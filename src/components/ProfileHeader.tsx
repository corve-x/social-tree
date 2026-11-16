"use client";

import { Code2, GraduationCap, MapPin, Clapperboard } from "lucide-react";
import { profile, type DetailIcon } from "@/config/profile";
import { Avatar } from "./Avatar";
import { Item } from "./motion";
import { ShareButton } from "./ShareButton";

const detailIcons: Record<DetailIcon, typeof Code2> = {
  education: GraduationCap,
  code: Code2,
  motion: Clapperboard,
  location: MapPin,
};

export function ProfileHeader() {
  return (
    <header className="relative flex flex-col items-center text-center">
      <ShareButton />

      <Item blur>
        <Avatar
          src={profile.avatar}
          alt={profile.name}
          initials={profile.initials}
        />
      </Item>

      <Item className="mt-6">
        <h1 className="text-[26px] font-medium leading-tight tracking-[-0.02em] text-fg">
          {profile.name}
        </h1>
        <p className="mt-1 font-mono text-xs text-sub">{profile.username}</p>
        <p className="mt-3 text-[15px] text-fg/90">{profile.title}</p>
      </Item>

      <Item
        as="p"
        className="mt-4 max-w-[36ch] text-[14px] leading-[1.65] text-sub"
      >
        {profile.bio}
      </Item>

      <Item as="div" className="mt-5">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {profile.details.map(({ icon, label }) => {
            const Icon = detailIcons[icon];
            return (
              <li
                key={label}
                className="flex items-center gap-1.5 font-mono text-[11px] text-sub"
              >
                <Icon
                  className="h-3 w-3 text-mute"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                {label}
              </li>
            );
          })}
        </ul>
      </Item>
    </header>
  );
}
