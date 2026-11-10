import { useSyncExternalStore } from "react";

const subscribe = (onChange) => {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
};

/** The current `?query` string; "" on the server and during hydration so markup matches. */
export const useLocationSearch = () =>
  useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => "",
  );
