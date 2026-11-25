import { useEffect, useRef, useState } from "react";

type Listener = (near: boolean) => void;

/** One observer per root margin, shared by every element that uses that margin. */
const observers = new Map<
  string,
  { observer: IntersectionObserver; listeners: Map<Element, Listener> }
>();

function observe(element: Element, rootMargin: string, listener: Listener) {
  let shared = observers.get(rootMargin);
  if (!shared) {
    const listeners = new Map<Element, Listener>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) listeners.get(entry.target)?.(entry.isIntersecting);
      },
      { rootMargin },
    );
    shared = { observer, listeners };
    observers.set(rootMargin, shared);
  }
  shared.listeners.set(element, listener);
  shared.observer.observe(element);
  return () => {
    const current = observers.get(rootMargin);
    if (!current) return;
    current.observer.unobserve(element);
    current.listeners.delete(element);
    if (current.listeners.size === 0) {
      current.observer.disconnect();
      observers.delete(rootMargin);
    }
  };
}

/**
 * Reports whether the element is within `rootMargin` of the viewport, and keeps reporting
 * as it scrolls in and out. Where IntersectionObserver is missing it is always near, so
 * content is never left out.
 */
export function useNearViewport<T extends Element>(rootMargin = "100% 0px") {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    return observe(element, rootMargin, setNear);
  }, [rootMargin]);

  return [ref, near] as const;
}
