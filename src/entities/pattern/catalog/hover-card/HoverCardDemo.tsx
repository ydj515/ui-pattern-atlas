import { useState } from "react";

import { HoverCard } from "@/shared/ui/patterns/hover-card/HoverCard";

function ProfilePreview() {
  return (
    <>
      <span className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-amber-100 font-semibold text-amber-800">
          김
        </span>
        <span>
          <span className="block text-sm font-semibold text-slate-900">김하늘</span>
          <span className="block text-xs text-slate-500">프로덕트 디자이너</span>
        </span>
      </span>
      <span className="mt-3 block text-xs leading-5 text-slate-600">
        디자인 시스템 팀 · 최근 활동 2시간 전
      </span>
    </>
  );
}

export function HoverCardDemo() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full max-w-sm space-y-3 pb-28">
      <p className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700">
        <HoverCard content={<ProfilePreview />}>
          <a
            href="#profile"
            onClick={(event) => {
              // A real app would route to the profile page here.
              event.preventDefault();
              setMessage("김하늘 님 프로필로 이동해요");
            }}
            className="font-semibold text-blue-700 underline-offset-2 hover:underline"
          >
            @김하늘
          </a>
        </HoverCard>{" "}
        님이 시안을 수정했어요
      </p>
      <p role="status" className="min-h-5 text-center text-xs text-slate-500">
        {message}
      </p>
    </div>
  );
}
