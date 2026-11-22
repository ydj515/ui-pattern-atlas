import { ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same sentence as RotatingWordsDemo: 함께 만드는 디자인 → 문서 → 발표, word by word. */
export function RotatingWordsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[24px] left-[10px] h-[60px] w-[156px] rounded-lg border border-slate-200 p-[8px]">
        <p className="text-[6px] text-slate-600">팀 협업 도구</p>
        <p className="mt-[6px] flex items-end gap-[4px] text-[12px] leading-[16px] font-bold">
          <span>함께 만드는</span>
          <span className="relative h-[16px] w-[40px] overflow-hidden text-blue-700">
            <span className="thumb-anim thumb-rw-col absolute inset-x-0 top-0 grid">
              <span className="h-[16px]">디자인</span>
              <span className="h-[16px]">문서</span>
              <span className="h-[16px]">발표</span>
              <span className="h-[16px]">디자인</span>
            </span>
          </span>
          <span className="ml-auto rounded border border-slate-200 px-[4px] text-[6px] leading-[11px] font-normal text-slate-700">
            멈추기
          </span>
        </p>
      </div>
    </ThumbStage>
  );
}
