export type DemoTransfer = {
  id: string;
  name: string;
  time: string;
  /** Tailwind gradient classes when no image src is set */
  gradient: string;
  /** Optional path under public/, e.g. /demo/ui-screenshot.webp */
  src?: string;
};

export const INITIAL_DEMO_TRANSFERS: DemoTransfer[] = [
  {
    id: "demo-1",
    name: "cursor-bug.png",
    time: "May 18, 2:14 PM",
    gradient: "from-slate-200 via-blue-100 to-slate-300",
    src: "/demo/cursor-bug.png",
  },
  {
    id: "demo-2",
    name: "figma-reference.png",
    time: "May 18, 11:02 AM",
    gradient: "from-violet-100 via-purple-50 to-slate-200",
    src: "/demo/figma-reference.png",
  },
  {
    id: "demo-3",
    name: "mobile-ui.png",
    time: "May 17, 4:48 PM",
    gradient: "from-cyan-100 via-sky-50 to-blue-100",
    src: "/demo/mobile-ui.png",
  },
  {
    id: "demo-4",
    name: "notes-scan.jpg",
    time: "May 17, 9:15 AM",
    gradient: "from-amber-100 via-orange-50 to-slate-200",
    src: "/demo/notes-scan.jpg",
  },
];

export const INCOMING_DEMO_TRANSFER: DemoTransfer = {
  id: "demo-new",
  name: "screenshot-new.png",
  time: "Just now",
  gradient: "from-blue-200 via-indigo-100 to-purple-200",
  src: "/demo/screenshot-new.png",
};
