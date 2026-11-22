import { useState } from "react";

import { ToastProvider, useToast } from "@/shared/ui/patterns/toast/Toast";

function WishlistButton() {
  const showToast = useToast();
  const [saved, setSaved] = useState(false);

  function toggleSaved() {
    const nextSaved = !saved;
    setSaved(nextSaved);
    showToast(nextSaved ? "찜 목록에 저장했어요" : "찜 목록에서 뺐어요", {
      tone: nextSaved ? "success" : "neutral",
      action: nextSaved ? { label: "되돌리기", onAction: () => setSaved(false) } : undefined,
    });
  }

  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={toggleSaved}
      className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 aria-pressed:border-rose-300 aria-pressed:bg-rose-50 aria-pressed:text-rose-700"
    >
      {saved ? "♥ 찜했어요" : "♡ 찜하기"}
    </button>
  );
}

export function ToastDemo() {
  return (
    <ToastProvider>
      <WishlistButton />
    </ToastProvider>
  );
}
