import { featuredTrack, spotify } from "@/config/profile";
import { ArrowUpRight } from "lucide-react";
import { PlatformIcon } from "./icons";

export function FeaturedTrack() {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-line bg-raised">
      <a
        href={featuredTrack.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 p-3"
      >
        <img
          src={featuredTrack.artwork}
          alt={featuredTrack.title}
          className="h-12 w-12 rounded-md object-cover"
        />

        <div className="min-w-0 flex-1">
          <p className="mb-1 flex items-center gap-1.5 text-[10px] tracking-wider text-[#1DB954]">
            <PlatformIcon name="spotify" className="h-3 w-3" />
            ON REPEAT
          </p>

          <p className="truncate text-sm font-medium text-fg">
            {featuredTrack.title}
          </p>

          <p className="truncate text-xs text-sub">{featuredTrack.artist}</p>
        </div>

        <ArrowUpRight size={15} className="text-mute" />
      </a>

      <a
        href={spotify.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between border-t border-line px-4 py-2.5 text-xs text-sub transition-colors hover:text-[#1DB954]"
      >
        Explore my Spotify
        <ArrowUpRight size={13} />
      </a>
    </div>
  );
}
