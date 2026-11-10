import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

export function Legal({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={`Last updated: ${updated}`} />
      <article className="mx-auto max-w-3xl px-5 pb-28 sm:px-8 [&_a]:text-electric [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:mt-1.5 [&_p]:mt-3 [&_p]:leading-relaxed [&_p]:text-muted [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted">
        <p className="rounded-2xl border border-dashed border-line p-4 text-sm">
          This document is a general template provided for convenience. It should be reviewed by a qualified legal professional before being relied upon.
        </p>
        {children}
      </article>
    </>
  );
}
