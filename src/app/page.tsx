import { profile, store } from "@/config/profile";
import { Background3D } from "@/components/Background3D";
import { ProfileHeader } from "@/components/ProfileHeader";
import { FeaturedTrack } from "@/components/FeaturedTrack";
import { SocialLinkCard } from "@/components/SocialLinkCard";
import { Footer } from "@/components/Footer";
import { Item, Stagger } from "@/components/motion";

export default function Home() {
  const portfolios = profile.links.filter((link) =>
    link.id.startsWith("portfolio-"),
  );

  const socials = profile.links.filter(
    (link) =>
      !link.id.startsWith("portfolio-") &&
      link.id !== "spotify" &&
      link.id !== "payhip",
  );

  return (
    <>
      <Background3D />
      <div className="grain" aria-hidden="true" />

      <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[480px] flex-col px-5 pb-7 pt-10">
        <Stagger className="flex flex-1 flex-col">
          <ProfileHeader />

          <Item>
            <FeaturedTrack />
          </Item>

          {/* used condition for portfolios temporarily */}
          {portfolios.length > 0 && (
            <section className="mt-9">
              <h2 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-sub">
                Portfolios
              </h2>

              <ul className="flex flex-col gap-3">
                {portfolios.map((link) => (
                  <Item as="li" key={link.id}>
                    <SocialLinkCard link={link} />
                  </Item>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-8">
            <h2 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-sub">
              Socials
            </h2>

            <ul className="flex flex-col gap-3">
              {socials.map((link) => (
                <Item as="li" key={link.id}>
                  <SocialLinkCard link={link} />
                </Item>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-sub">
              Store
            </h2>

            <Item>
              <SocialLinkCard link={store} />
            </Item>
          </section>

          <Footer />
        </Stagger>
      </main>
    </>
  );
}
