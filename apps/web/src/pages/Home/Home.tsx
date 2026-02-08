import { SITE } from "@/constants/site";
import React from "react";

export function Home() {
  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight">{SITE.title}</h1>
      <p className="mt-2 text-neutral-600">{SITE.tagline}</p>
    </article>
  );
}
