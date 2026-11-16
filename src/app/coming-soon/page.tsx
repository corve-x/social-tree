import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export const metadata = {
  title: "Coming Soon",
};

export default function ComingSoon() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-6">
      <div className="max-w-md text-center">
        <Construction
          size={36}
          strokeWidth={1.4}
          className="mx-auto mb-6 text-sub"
        />

        <p className="mb-4 font-mono text-xs text-mute">
          ERROR 200 — SUCCESSFULLY UNFINISHED
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Well, ahh this is awkward.
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-sub">
          The portfolio exists. Unfortunately, uploading it is apparently a
          whole different skill. You might see it soon :'(
        </p>

        <p className="mt-4 text-xs text-mute">Coming soon-ish.</p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg
                     border border-line px-4 py-2 text-sm
                     text-sub transition-colors hover:text-fg"
        >
          <ArrowLeft size={14} />
          Back to socials
        </Link>
      </div>
    </main>
  );
}
