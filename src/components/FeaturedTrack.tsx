import { featuredTrack } from "@/config/profile";
import { ArrowUpRight, Music2 } from "lucide-react";
import { PlatformIcon } from "./icons";

export function FeaturedTrack() {
  return (
    <a
      href={featuredTrack.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-5 flex items-center gap-3 rounded-xl 
                 border border-zinc-800 bg-zinc-900/60 p-3 
                 transition-all hover:border-[#1DB954]/40"
    >
      <div
        className="relative h-12 w-12 shrink-0 overflow-hidden 
                      rounded-lg bg-zinc-800"
      >
        <Music2 className="absolute inset-0 m-auto text-zinc-500" />

        <img
          src={featuredTrack.artwork}
          alt={featuredTrack.title}
          className="relative h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div
          className="flex items-center gap-1.5 text-[10px] 
                        font-medium tracking-wider text-[#1DB954]"
        >
          <PlatformIcon name="spotify" className="h-3 w-3" />
          ON REPEAT
        </div>

        <p className="truncate text-sm font-medium text-white">
          {featuredTrack.title}
        </p>

        <p className="truncate text-xs text-zinc-400">{featuredTrack.artist}</p>
      </div>

      <ArrowUpRight
        size={16}
        className="text-zinc-500 transition-colors group-hover:text-white"
      />
    </a>
  );
}
