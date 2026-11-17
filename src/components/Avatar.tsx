"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function Avatar({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const previewRef = useRef<HTMLButtonElement>(null);

  const [origin, setOrigin] = useState({
    x: 0,
    y: 0,
    size: 128,
  });

  const reduce = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const spring = { stiffness: 120, damping: 18, mass: 0.6 };

  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), spring);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), spring);

  const transition = {
    duration: reduce ? 0 : 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  function openPreview() {
    if (!buttonRef.current || failed || previewVisible) return;

    const rect = buttonRef.current.getBoundingClientRect();

    setOrigin({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      size: rect.width,
    });

    setPreviewVisible(true);
    setOpen(true);
  }

  useEffect(() => {
    if (reduce || previewVisible) {
      px.set(0);
      py.set(0);
      return;
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;

      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };

    const onLeave = () => {
      px.set(0);
      py.set(0);
    };

    window.addEventListener("pointermove", onMove, {
      passive: true,
    });

    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [px, py, reduce, previewVisible]);

  useEffect(() => {
    const img = imgRef.current;

    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  useEffect(() => {
    if (!previewVisible) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    previewRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);

      if (e.key === "Tab") {
        e.preventDefault();
        previewRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      buttonRef.current?.focus();
    };
  }, [previewVisible]);

  return (
    <>
      <div className="avatar-float">
        <motion.button
          ref={buttonRef}
          type="button"
          disabled={failed}
          onClick={openPreview}
          aria-label="View profile picture"
          aria-haspopup="dialog"
          aria-expanded={open}
          whileHover={reduce ? {} : { scale: 1.04 }}
          whileTap={reduce ? {} : { scale: 0.98 }}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 800,
            opacity: previewVisible ? 0 : 1,
          }}
          className="relative h-32 w-32 cursor-pointer rounded-full
                     p-px shadow-[0_24px_44px_-16px_rgba(0,0,0,0.9)]
                     sm:h-[136px] sm:w-[136px]"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(145deg,#e4e4e7 0%,#6b6b72 30%,#27272a 55%,#8d8d94 80%,#d4d4d8 100%)",
            }}
          />

          <span className="relative block h-full w-full overflow-hidden rounded-full bg-raised">
            {failed ? (
              <span
                role="img"
                aria-label={alt}
                className="flex h-full w-full items-center justify-center
                           text-[34px] font-medium tracking-tight text-silver"
              >
                {initials}
              </span>
            ) : (
              <Image
                ref={imgRef}
                src={src}
                alt={alt}
                width={1254}
                height={1254}
                sizes="140px"
                priority
                onError={() => setFailed(true)}
                className="h-full w-full object-cover"
              />
            )}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(120% 120% at 28% 12%, rgba(255,255,255,0.14), transparent 46%)",
                boxShadow: "inset 0 -10px 24px rgba(0,0,0,0.35)",
              }}
            />
          </span>
        </motion.button>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence onExitComplete={() => setPreviewVisible(false)}>
            {open && (
              <motion.div
                key="avatar-preview"
                role="dialog"
                aria-modal="true"
                aria-label="Profile picture preview"
                initial={{
                  backgroundColor: "rgba(0,0,0,0)",
                  backdropFilter: "blur(0px)",
                }}
                animate={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(8px)",
                }}
                exit={{
                  backgroundColor: "rgba(0,0,0,0)",
                  backdropFilter: "blur(0px)",
                }}
                transition={transition}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[100] cursor-pointer"
              >
                <motion.button
                  ref={previewRef}
                  type="button"
                  aria-label="Close profile picture preview"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.5 }}
                  exit={{ scale: 1 }}
                  transition={transition}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                  style={{
                    left: origin.x,
                    top: origin.y,
                    width: origin.size,
                    height: origin.size,
                    x: "-50%",
                    y: "-50%",
                    transformOrigin: "center",
                  }}
                  className="absolute cursor-pointer overflow-hidden
                             rounded-full border border-white/20
                             bg-raised shadow-2xl"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={1254}
                    height={1254}
                    sizes="220px"
                    className="h-full w-full rounded-full object-cover"
                  />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
