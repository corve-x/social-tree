"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useState, type ReactNode } from "react";

const Scene = dynamic(() => import("./BackgroundScene"), { ssr: false });

class Boundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

/** Quiet static lighting used when WebGL is unavailable or the device is low-powered. */
function StaticFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 40% at 50% 28%, rgba(192,192,192,0.08), transparent 70%)",
      }}
    />
  );
}

function canRunWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

function isLowPower() {
  const nav = navigator as Navigator & { deviceMemory?: number };
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const weak =
    (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 3;
  return coarse && weak;
}

export function Background3D() {
  const [mode, setMode] = useState<"pending" | "scene" | "static">("pending");

  useEffect(() => {
    const decide = () =>
      setMode(canRunWebGL() && !isLowPower() ? "scene" : "static");
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(decide, { timeout: 800 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(decide, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-base"
    >
      <div className="bg-enter absolute inset-0">
        {mode === "scene" && (
          <div className="absolute inset-0 opacity-60 md:opacity-90">
            <Boundary fallback={<StaticFallback />}>
              <Scene />
            </Boundary>
          </div>
        )}
        {mode === "static" && <StaticFallback />}
        {/* Scrim keeps text readable over the sculpture */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 50% 45%, rgba(9,9,11,0.62), rgba(9,9,11,0) 100%), linear-gradient(to bottom, rgba(9,9,11,0.35), rgba(9,9,11,0) 25%, rgba(9,9,11,0) 70%, rgba(9,9,11,0.7))",
          }}
        />
      </div>
    </div>
  );
}
