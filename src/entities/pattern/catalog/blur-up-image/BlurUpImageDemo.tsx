import { useEffect, useState } from "react";

import { BlurUpImage } from "@/shared/ui/patterns/blur-up-image/BlurUpImage";

// Stand-ins for a photo and its ~20 px preview; in a real app the server sends both.
export const PHOTO = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7dd3fc"/><stop offset="1" stop-color="#fde68a"/></linearGradient></defs><rect width="320" height="200" fill="url(#s)"/><circle cx="240" cy="70" r="22" fill="#fff7ed"/><path d="M0 120 70 70l50 35 60-55 70 60 70-30v50H0Z" fill="#475569"/><path d="M0 135h320v65H0Z" fill="#0e7490"/><path d="M20 150h60M120 165h80M230 152h60" stroke="#a5f3fc" stroke-width="3" stroke-linecap="round"/></svg>`,
)}`;
export const PREVIEW = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3" shape-rendering="crispEdges"><rect width="4" height="1" fill="#a5d8f0"/><rect y="1" width="4" height="1" fill="#8a94a0"/><rect x="3" y="1" width="1" height="1" fill="#c9c6a8"/><rect y="2" width="4" height="1" fill="#2a8094"/></svg>`,
)}`;
const NETWORK_DELAY_MS = 1500;

export function BlurUpImageDemo() {
  const [attempt, setAttempt] = useState(0);
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    // Simulate a slow network: the full image arrives after a delay.
    const timer = window.setTimeout(() => setSrc(PHOTO), NETWORK_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [attempt]);

  return (
    <figure className="w-full max-w-xs space-y-2">
      <BlurUpImage
        key={attempt}
        src={src}
        placeholderSrc={PREVIEW}
        alt="해 질 무렵 산 아래로 펼쳐진 동해 바다"
        width={320}
        height={200}
        className="rounded-xl"
      />
      <figcaption className="flex items-center justify-between text-sm text-slate-700">
        동해 바다
        <button
          type="button"
          onClick={() => {
            setSrc(undefined);
            setAttempt((value) => value + 1);
          }}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-50"
        >
          다시 불러오기
        </button>
      </figcaption>
    </figure>
  );
}
