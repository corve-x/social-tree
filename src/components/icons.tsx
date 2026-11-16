import { Github, Instagram, Linkedin, Code2, Film } from "lucide-react";
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
  }
}
