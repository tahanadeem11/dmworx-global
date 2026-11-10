"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    __dmwReady?: boolean;
  }
}

/** True once the preloader has finished (or was skipped). Hero animations wait on this. */
export function useReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const done = () => setReady(true);
    if (window.__dmwReady || document.documentElement.dataset.pl === "seen") {
      done();
      return;
    }
    window.addEventListener("dmw:ready", done, { once: true });
    return () => window.removeEventListener("dmw:ready", done);
  }, []);

  return ready;
}
