export type IconKey =
  | "linkedin"
  | "github"
  | "fiverr"
  | "discord"
  | "instagram"
  | "portfolio-work"
  | "portfolio-edit"
  | "spotify";
export type DetailIcon = "education" | "code" | "motion" | "location";

export interface SocialLink {
  id: string;
  platform: string;
  handle?: string;
  description: string;
  url: string;
  icon: IconKey;
  brand: string;
  isPrivate?: boolean; //pvt indicator
}

export interface ProfileConfig {
  name: string;
  initials: string;
  username: string;
  title: string;
  bio: string;
  location: string;
  avatar: string;
  details: { icon: DetailIcon; label: string }[];
  links: SocialLink[];
  footer: string;
}
export const featuredTrack = {
  title: "Reflections",
  artist: "The Neighbourhood",
  artwork: "/images/album.jpg",
  url: "https://open.spotify.com/track/2xql0pid3EUwW38AsywxhV?si=d62768d74d614a34",
};

export const profile: ProfileConfig = {
  name: "Satyaprasad Nayak",
  initials: "SPN",
  username: "ig: @spn.fx",
  title: "Developer & Visual Creative",
  bio: "Computer Science student, developer, motion graphics enthusiast.",
  location: "Bengaluru, India",
  avatar: "/images/profile-zoomed.png",
  details: [
    { icon: "education", label: "Computer Science" },
    { icon: "code", label: "Developer" },
    { icon: "motion", label: "Video Editor" },
    { icon: "location", label: "Bengaluru, India" },
  ],
  links: [
    {
      id: "portfolio-work",
      platform: "Portfolio - Work",
      description: "Projects, skills & experience",
      url: "/coming-soon",
      icon: "portfolio-work",
      brand: "#94A3B8",
    },
    {
      id: "portfolio-edit",
      platform: "Portfolio - Edit",
      description: "Video editing, visuals & graphics",
      url: "/coming-soon",
      icon: "portfolio-edit",
      brand: "#D97757",
    },
    {
      id: "linkedin",
      platform: "LinkedIn",
      description: "Professional journey & connections",
      url: "https://www.linkedin.com/in/satyaprasad-nayak/",
      icon: "linkedin",
      brand: "#0A66C2",
    },
    {
      id: "github",
      platform: "GitHub",
      handle: "corve-x",
      description: "Projects, code & experiments",
      url: "https://github.com/corve-x",
      icon: "github",
      brand: "#F4F4F5",
    },
    {
      id: "fiverr",
      platform: "Fiverr",
      handle: "sathyapn",
      description: "Freelance editing & creative services",
      url: "https://www.fiverr.com/sellers/sathyapn/",
      icon: "fiverr",
      brand: "#1DBF73",
    },
    {
      id: "discord",
      platform: "Discord",
      description: "Connect, chat and fun",
      url: "https://discord.com/users/718136910832205886",
      icon: "discord",
      brand: "#5865F2",
    },
    // {
    //   id: "instagram",
    //   platform: "Instagram - Pvt",
    //   handle: "@spn.fx",
    //   description: "Personal life, everything in between",
    //   url: "https://www.instagram.com/spn.fx/",
    //   icon: "instagram",
    //   brand: "#E4405F",
    //   isPrivate: false, //if needed
    // },
    {
      id: "instagram-creative",
      platform: "Instagram - Creative",
      handle: "@corvex.aep",
      description: "Video editing/ showcase",
      url: "https://www.instagram.com/corvex.aep/",
      icon: "instagram",
      brand: "#E4405F",
    },
    {
      id: "spotify",
      platform: "Spotify",
      description: "My music taste & curated playlists",
      url: "https://open.spotify.com/user/sajy9meiccv4cnw6ca4sn6eo4",
      icon: "spotify",
      brand: "#1DB954",
    },
  ],
  footer: "Built by Satya.",
};

export const site = {
  title: "Satyaprasad Nayak — Socials",
  description: "Explore my portfolios and socials.",
};
