# Pairlinx newsletter (lean Resend setup)

## Persistence model (no database)

This implementation intentionally avoids Supabase/Postgres.

| State | Where it lives |
|-------|----------------|
| **Pending** (awaiting confirm) | Resend Contact with `unsubscribed: true` + signed confirm token (HMAC) |
| **Active** | Resend Contact with `unsubscribed: false` in your Segment |
| **Unsubscribed** | Resend Contact with `unsubscribed: true` |
| **UI hide form** | Browser `localStorage` (`pairlinx_newsletter_status`) |

Resend is the durable source of truth for subscription status. Confirm/unsubscribe links use signed tokens (`NEWSLETTER_TOKEN_SECRET`) so pending signups do not require a database.

**Trade-off:** In-memory rate limits are best-effort on serverless (per instance). For stronger limits, add Vercel KV later without changing the public API.

## Environment variables

```env
RESEND_API_KEY=
NEWSLETTER_FROM_EMAIL=news@pairlinx.com
NEWSLETTER_AUDIENCE_ID=        # Resend Segment ID (Audiences were renamed to Segments)
NEWSLETTER_TOKEN_SECRET=       # Random 32+ char secret; do not reuse in production
SITE_URL=https://pairlinx.com
```

## Resend dashboard setup

1. Verify domain `pairlinx.com` in Resend.
2. Create a **Segment** (e.g. `Pairlinx Newsletter`).
3. Copy the Segment ID into `NEWSLETTER_AUDIENCE_ID`.
4. Use sender `news@pairlinx.com` (or your verified address) for `NEWSLETTER_FROM_EMAIL`.

## API routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/newsletter/subscribe` | POST | Validate, honeypot, rate limit, create pending contact, send confirm email |
| `/api/newsletter/confirm?token=...` | GET | Activate contact, redirect to `/newsletter/confirmed` |
| `/api/newsletter/unsubscribe?token=...` | GET | Unsubscribe contact, redirect to `/newsletter/unsubscribed` |

## Sending launch/update emails (Resend Broadcasts)

1. Open **Resend → Broadcasts → Create**.
2. Choose your **Segment** (`NEWSLETTER_AUDIENCE_ID`).
3. Only contacts with `unsubscribed: false` receive the broadcast (confirmed subscribers).
4. Compose subject/body; send test to yourself first.
5. Resend includes unsubscribe handling for broadcasts.

You do not need a custom campaign builder in this repo for v1.

## Test double opt-in end-to-end

1. Set env vars locally; run **`vercel dev`** (API routes are not served by `vite` alone).
2. Open the site, scroll to footer or homepage newsletter block.
3. Submit a real inbox you control with consent checked.
4. UI should show: **“Check your inbox to confirm your subscription.”**
5. Open the confirmation email; click the link (`/api/newsletter/confirm?token=...`).
6. You should land on `/newsletter/confirmed?status=success`.
7. In Resend → Contacts, confirm the contact exists and **Unsubscribed = false**.
8. In Resend → Segment, confirm the contact is in your newsletter segment.
9. Re-submit the same email → UI/API should return **already subscribed**.
10. Use the unsubscribe link from the confirmation email → `/newsletter/unsubscribed?status=success`.
11. Confirm contact shows **Unsubscribed = true** in Resend.

## Local development note

`npm run dev` (Vite) serves the frontend only. Use:

```bash
vercel dev
```

so `/api/newsletter/*` routes work.
