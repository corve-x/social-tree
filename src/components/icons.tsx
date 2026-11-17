import {
  Github,
  Instagram,
  Linkedin,
  Code2,
  Film,
  ShoppingBag,
} from "lucide-react";
import type { IconKey } from "@/config/profile";

type P = { className?: string };

function Fiverr({ className }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 20V10.5C8 8 9.2 6.5 11.6 6.5H13" />
      <path d="M5 11h7" />
      <path d="M16.5 11v9" />
      <circle cx="16.5" cy="6.9" r="0.6" fill="currentColor" />
    </svg>
  );
}

function Discord({ className }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.6 6.9c1.3-.6 2.9-.9 4.4-.9s3.1.3 4.4.9c1.6 2.3 2.4 4.9 2.6 7.9-1 .8-2.2 1.4-3.5 1.8l-.9-1.5M7.6 6.9C6 9.2 5.2 11.8 5 14.8c1 .8 2.2 1.4 3.5 1.8l.9-1.5" />
      <path d="M8.9 15.1c2 .7 4.2.7 6.2 0" />
      <circle cx="9.4" cy="11.4" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="11.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Spotify({ className }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.5 17.3a.75.75 0 0 1-1 .25c-2.8-1.7-6.3-2.1-10.4-1.2a.75.75 0 1 1-.33-1.46c4.5-1.03 8.4-.55 11.48 1.33a.75.75 0 0 1 .25 1.08zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.2-1.97-8.08-2.54-11.85-1.4a.94.94 0 0 1-.55-1.8c4.31-1.3 9.69-.67 13.38 1.6a.94.94 0 0 1 .31 1.29zm.12-3.4C15.25 8.35 8.9 8.14 5.23 9.25a1.13 1.13 0 0 1-.65-2.16c4.24-1.29 11.23-1.04 15.65 1.58a1.13 1.13 0 0 1-1.14 1.95z" />
    </svg>
  );
}

export function PlatformIcon({ name, className }: { name: IconKey } & P) {
  const cls = className ?? "h-[18px] w-[18px]";
  switch (name) {
    case "portfolio-work":
      return <Code2 className={cls} strokeWidth={1.7} aria-hidden="true" />;
    case "portfolio-edit":
      return <Film className={cls} strokeWidth={1.7} aria-hidden="true" />;
    case "linkedin":
      return <Linkedin className={cls} strokeWidth={1.7} aria-hidden="true" />;
    case "github":
      return <Github className={cls} strokeWidth={1.7} aria-hidden="true" />;
    case "instagram":
      return <Instagram className={cls} strokeWidth={1.7} aria-hidden="true" />;
    case "fiverr":
      return <Fiverr className={cls} />;
    case "discord":
      return <Discord className={cls} />;
    case "spotify":
      return <Spotify className={cls} />;
    case "payhip":
      return <ShoppingBag className={cls} strokeWidth={1.7} />;
  }
}
