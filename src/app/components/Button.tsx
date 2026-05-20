import { Link } from "react-router";
import { ReactNode } from "react";

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ to, href, variant = "primary", size = "md", children, onClick, className = "" }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm",
    outline:
      "bg-gray-900/40 text-gray-100 border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-800/60 shadow-sm shadow-black/20 hover:scale-[1.01] active:scale-[0.99]",
    ghost: "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
  };

  const sizeStyles = {
    sm: "h-9 px-4 text-sm rounded-lg",
    md: "h-11 px-6 text-base rounded-xl",
    lg: "h-14 px-8 text-lg rounded-xl"
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
}
