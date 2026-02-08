import type { ReactNode } from "react";
import React from "react";

type LayoutProps = {
  children: ReactNode;
};

/**
 * Layout principal : structure commune à toutes les pages.
 * Un seul endroit pour header, footer, conteneur, etc.
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-10 focus-visible:rounded focus-visible:bg-neutral-900 focus-visible:px-3 focus-visible:py-2 focus-visible:text-white focus-visible:outline-none"
      >
        Aller au contenu
      </a>
      <main className="mx-auto max-w-3xl px-6 py-12" id="main-content">
        {children}
      </main>
    </div>
  );
}
