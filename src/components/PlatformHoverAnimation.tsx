import type { IconKey } from "@/config/profile";
import { PlatformIcon } from "./icons";

export function PlatformHoverAnimation({ platform }: { platform: IconKey }) {
  return (
    <span
      className={`platform-motion platform-motion--${platform}`}
      aria-hidden="true"
    >
      {platform === "portfolio-work" ? (
        <svg
          viewBox="0 0 100 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="15" y="5" width="70" height="38" rx="5" opacity=".5" />
          <path d="M15 15H85" opacity=".5" />
          <path
            className="motion-trace"
            d="M35 23L29 29L35 35M46 36L53 21M64 23L70 29L64 35"
          />
        </svg>
      ) : platform === "portfolio-edit" ? (
        <svg
          viewBox="0 0 100 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <rect x="9" y="9" width="82" height="30" rx="4" opacity=".5" />
          <path d="M15 23H85M15 31H85" opacity=".5" />
          <path d="M17 25H36M40 25H67M20 33H49M54 33H82" strokeWidth="3" />
          <path className="motion-playhead" d="M17 5V43" strokeWidth="2" />
        </svg>
      ) : platform === "github" ? (
        <svg
          viewBox="0 0 100 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            className="motion-trace"
            d="M8 24H88M24 24C42 24 36 8 54 8H79M47 24C63 24 58 40 76 40H90"
          />
          {[
            [24, 24],
            [54, 8],
            [79, 8],
            [47, 24],
            [76, 40],
            [90, 40],
            [88, 24],
          ].map(([x, y], i) => (
            <circle
              key={i}
              className="motion-node"
              cx={x}
              cy={y}
              r="3"
              fill="currentColor"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </svg>
      ) : platform === "linkedin" ? (
        <svg
          viewBox="0 0 100 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            className="motion-trace"
            d="M50 24L19 10M50 24L83 9M50 24L81 39M50 24L21 39"
          />
          {[
            [19, 10],
            [83, 9],
            [81, 39],
            [21, 39],
            [50, 24],
          ].map(([x, y], i) => (
            <circle
              key={i}
              className="motion-node"
              cx={x}
              cy={y}
              r={i === 4 ? 5 : 3}
              fill="currentColor"
              style={{ animationDelay: `${i * 120}ms` }}
            />
          ))}
        </svg>
      ) : (
        <span className="motion-emblem">
          {platform !== "discord" && <span className="motion-ring" />}
          <PlatformIcon name={platform} className="motion-logo" />
          {platform === "discord" && (
            <span className="motion-dots">
              <i />
              <i />
              <i />
            </span>
          )}
        </span>
      )}
    </span>
  );
}
