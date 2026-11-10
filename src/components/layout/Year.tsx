"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Current year, evaluated on the client so statically rendered pages never go stale. */
export function Year() {
  const year = useSyncExternalStore(subscribe, () => String(new Date().getFullYear()), () => "2026");
  return <span suppressHydrationWarning>{year}</span>;
}
