"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/config/profile";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  }
}

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  async function onShare() {
    const url = window.location.href;
    const canNative =
      typeof navigator.share === "function" &&
      window.matchMedia("(pointer: coarse)").matches;

    if (canNative) {
      try {
        await navigator.share({
          title: profile.name,
          text: profile.title,
          url,
        });
        return;
      } catch (err) {
        if ((err as DOMException).name === "AbortError") return;
      }
    }
    if (await copyText(url)) {
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <div className="absolute right-0 top-0 flex items-center">
      <span aria-live="polite" className="pointer-events-none">
        <AnimatePresence>
          {copied && (
            <motion.span
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mr-1 font-mono text-[11px] text-sub"
            >
              Link copied
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <motion.button
        type="button"
        onClick={onShare}
        aria-label="Share this page"
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="flex h-11 w-11 items-center justify-center rounded-full text-sub transition-colors duration-300 hover:text-fg"
      >
        {copied ? (
          <Check className="h-4 w-4" strokeWidth={1.8} />
        ) : (
          <Share2 className="h-4 w-4" strokeWidth={1.6} />
        )}
      </motion.button>
    </div>
  );
}
