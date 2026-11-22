import type { ReactNode } from "react";

import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Person({
  initial,
  top,
  children,
}: {
  readonly initial: string;
  readonly top: number;
  readonly children: ReactNode;
}) {
  return (
    <span
      className="absolute left-[8px] grid size-[13px] place-items-center rounded-full bg-slate-200 text-[5.5px] font-semibold"
      style={{ top }}
    >
      {initial}
      {children}
    </span>
  );
}

/** Same team as PresenceDemo: switch 내 상태 from 온라인 to 자리 비움. */
export function PresenceThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[24px] h-[92px] w-[128px] rounded-md border border-slate-200 text-[6.5px]">
        <Person initial="나" top={6}>
          <span className="thumb-anim thumb-pr-online absolute -right-[1px] -bottom-[1px] size-[5px] rounded-full bg-emerald-500 ring-1 ring-white opacity-0" />
          <span className="thumb-anim thumb-pr-away absolute -right-[1px] -bottom-[1px] size-[5px] rounded-full bg-amber-400 ring-1 ring-white [clip-path:inset(0_0_0_50%)]" />
        </Person>
        <Person initial="김" top={24}>
          <span className="absolute -right-[1px] -bottom-[1px] size-[5px] rounded-full bg-amber-400 ring-1 ring-white [clip-path:inset(0_0_0_50%)]" />
        </Person>
        <Person initial="이" top={42}>
          <span className="absolute -right-[1px] -bottom-[1px] size-[5px] rounded-full border border-slate-400 bg-white" />
        </Person>
        {[
          ["나", 9],
          ["김하늘", 27],
          ["이도윤", 45],
        ].map(([name, top]) => (
          <span key={name} className="absolute left-[26px]" style={{ top }}>
            {name}
          </span>
        ))}
        <span className="thumb-anim thumb-pr-online absolute top-[9px] right-[8px] text-[5.5px] text-slate-500 opacity-0">
          온라인
        </span>
        <span className="thumb-anim thumb-pr-away absolute top-[9px] right-[8px] text-[5.5px] text-slate-500">
          자리 비움
        </span>
        <span className="absolute top-[27px] right-[8px] text-[5.5px] text-slate-500">
          자리 비움
        </span>
        <span className="absolute top-[45px] right-[8px] text-[5.5px] text-slate-500">
          오프라인
        </span>
        <span className="absolute top-[68px] left-[8px] text-[5.5px] text-slate-600">내 상태</span>
        <span className="absolute top-[65px] right-[8px] h-[12px] w-[40px] rounded-[3px] border border-slate-300 px-[3px] text-[5.5px] leading-[10px]">
          <span className="thumb-anim thumb-pr-online opacity-0">온라인</span>
          <span className="thumb-anim thumb-pr-away absolute left-[3px]">자리 비움</span>
        </span>
      </div>
      <ThumbCursor motion="thumb-pr-cursor" />
    </ThumbStage>
  );
}
