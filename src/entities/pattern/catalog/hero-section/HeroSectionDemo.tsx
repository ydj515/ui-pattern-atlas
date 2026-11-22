import { useState } from "react";

import { HeroSection } from "@/shared/ui/patterns/hero-section/HeroSection";

export function HeroSectionDemo() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <HeroSection
          title="회의록은 회의가 끝나기 전에"
          description="말하는 동안 요점과 할 일을 정리해 드려요. 팀 전체가 같은 기록을 봐요."
          primary={
            <button
              type="button"
              onClick={() => setMessage("무료로 시작했어요")}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              무료로 시작하기
            </button>
          }
          secondary={
            <button
              type="button"
              onClick={() => setMessage("소개 영상을 열었어요")}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 underline underline-offset-2"
            >
              1분 소개 보기
            </button>
          }
          visual={
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200" />
          }
        />
      </div>
      <p role="status" className="min-h-4 text-center text-xs text-slate-600">
        {message}
      </p>
    </div>
  );
}
