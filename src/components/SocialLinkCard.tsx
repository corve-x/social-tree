"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import type { CSSProperties } from "react";
import type { SocialLink } from "@/config/profile";
import { PlatformIcon } from "./icons";
import { PlatformHoverAnimation } from "./PlatformHoverAnimation";

export function SocialLinkCard({ link }: { link: SocialLink }) {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card group relative isolate overflow-hidden flex min-h-[72px] items-center gap-3.5 rounded-[14px] px-4 py-3.5 will-change-transform"
      style={
        {
          "--brand": link.brand,
          transformStyle: "preserve-3d",
        } as CSSProperties
      }
      whileHover={{ y: -3, rotateX: 2.5, transformPerspective: 900 }}
      whileTap={{ scale: 0.975 }}
      transition={{ type: "spring", stiffness: 420, damping: 30, mass: 0.7 }}
    >
      <PlatformHoverAnimation platform={link.icon} />
      <span className="card-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line bg-base text-sub">
        <PlatformIcon name={link.icon} />
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="flex items-center gap-2">
          <span className="truncate text-[15px] font-medium tracking-[-0.01em] text-fg">
            {link.platform}
          </span>
          {link.handle && (
            <span className="font-mono text-[11px] text-sub">
              {link.handle}
            </span>
          )}
          {link.isPrivate && (
            <span className="flex items-center gap-1 font-mono text-[10px] text-sub">
              <Lock
                className="h-2.5 w-2.5"
                strokeWidth={2}
                aria-hidden="true"
              />
              Private
              <span className="sr-only"> account</span>
            </span>
          )}
        </span>
        <span className="text-[13px] leading-snug text-sub">
          {link.description}
        </span>
      </span>

      <ArrowUpRight
        className="card-arrow h-4 w-4 shrink-0 text-mute"
        strokeWidth={1.8}
        aria-hidden="true"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </motion.a>
  );
}
