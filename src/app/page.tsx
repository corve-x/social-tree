import { profile } from "@/config/profile";
import { Background3D } from "@/components/Background3D";
import { ProfileHeader } from "@/components/ProfileHeader";
import { FeaturedTrack } from "@/components/FeaturedTrack";
import { SocialLinkCard } from "@/components/SocialLinkCard";
import { Footer } from "@/components/Footer";
import { Item, Stagger } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Background3D />
      <div className="grain" aria-hidden="true" />

      <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[480px] flex-col px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-[max(2.5rem,calc(env(safe-area-inset-top)+1.5rem))]">
        <Stagger className="flex flex-1 flex-col">
          <ProfileHeader />

          {/* Featured Spotify track */}
          <Item>
            <FeaturedTrack />
          </Item>

          <nav aria-label="Social links" className="mt-9">
            <ul className="flex flex-col gap-3" style={{ perspective: 900 }}>
              {profile.links.map((link) => (
                <Item as="li" key={link.id}>
                  <SocialLinkCard link={link} />
                </Item>
              ))}
            </ul>
          </nav>

          <Footer />
        </Stagger>
      </main>
    </>
  );
}
