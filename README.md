# spn.fx — Personal Link Hub

Basic and simple personal link hub built with Next.js, TypeScript, Tailwind CSS, Framer Motion and Three.js which is a mobile-first build.

One place for everything I do online.

## Features

No backend, database or APIs used with centralized link and c

## Socials

- Portfolio - Work website
- Portfolio - Edit website
- LinkedIn
- Github
- Fiverr
- Discord
- Instagram - Pvt
- Instagram - Creative

## Project Structure

```text
├── public/
│   └── images/                    # Profile picture
├── src/
│   ├── app/
│   │   ├── page.tsx               # Main page
│   │   ├── layout.tsx             # Layout and metadata
│   │   ├── globals.css            # Global styles and animations
│   │   └── icon.svg               # Favicon
│   ├── components/
│   │   ├── ProfileHeader.tsx      # Personal profile
│   │   ├── SocialLinkCard.tsx      # Reusable link cards
│   │   ├── PlatformHoverAnimation.tsx
│   │   ├── Background3D.tsx       # 3D loading and fallback
│   │   ├── BackgroundScene.tsx    # Three.js scene
│   │   └── ShareButton.tsx         # Page sharing
│   └── config/
│       └── profile.ts             # Profile and link configuration
└── package.json
```

## Customization

Most personal details can be changed in `src/config/profile.ts`, including the name, bio, social links, portfolio URLs and footer. Links appear in the order they are defined in the `links` array.

For example, to update the work portfolio:

```ts
{
  id: "portfolio-work",
  platform: "Portfolio - Work",
  description: "Development projects, skills & experience",
  url: "https://example.com/work",
  icon: "portfolio-work",
  brand: "#94A3B8",
}
```

Replace the placeholder portfolio URLs with your published websites before deploying.

To update the profile picture, place a square PNG at `public/images/profile.png`. A 1254 × 1254 image works well. If the image is missing, the site displays initials instead.

New platform icons can be added in `src/components/icons.tsx`, with matching animation variants in `src/components/PlatformHoverAnimation.tsx` and styles in `src/app/globals.css`.

## Deployment

The project is designed to be deployed on Vercel:

1. Push the project to a GitHub repository.
2. Import that repository into Vercel.
3. Keep the Next.js framework preset and default build settings.
4. Deploy the project.

Optionally, set the following environment variable to your final website URL for accurate social metadata:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Design & Performance

The visual direction is intentionally understated: dark surfaces, subtle lighting, restrained brand colours and motion that adds personality without getting in the way of the content. The 3D scene is loaded on the client, and reduced-motion preferences are respected through CSS and the background animation system.

## Author

**Satyaprasad Nayak** — Computer Science undergraduate at PES University, developer, video editor and motion graphics enthusiast.

- [GitHub](https://github.com/corve-x)
- [LinkedIn](https://www.linkedin.com/in/satyaprasad-nayak/)

---

Designed and built by Satya.
