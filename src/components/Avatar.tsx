"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const imgRef = useRef<HTMLImageElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 120, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), spring);

  // Desktop only: tilt follows the mouse anywhere on the page, gently.
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };
    const onLeave = () => {
      px.set(0);
      py.set(0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [px, py, reduce]);

  // Catch an image error that fired before hydration.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="avatar-float">
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="relative h-32 w-32 rounded-full p-px shadow-[0_24px_44px_-16px_rgba(0,0,0,0.9)] sm:h-[136px] sm:w-[136px]"
      >
        {/* Thin metallic border */}
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
              className="flex h-full w-full items-center justify-center text-[34px] font-medium tracking-tight text-silver"
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
          {/* Soft specular highlight for dimensional lighting */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(120% 120% at 28% 12%, rgba(255,255,255,0.14), transparent 46%), inset 0 0 0 0 transparent",
              boxShadow: "inset 0 -10px 24px rgba(0,0,0,0.35)",
            }}
          />
        </span>
      </motion.div>
    </div>
  );
}
