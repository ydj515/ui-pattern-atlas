import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same invite as CopyLinkDemo: 복사 → the link is selected → 링크를 복사했어요. */
export function CopyLinkThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[16px] h-[92px] w-[144px] rounded-[12px] border border-slate-200 p-[8px] text-[6px]">
        <p className="text-[8px] font-bold">팀 초대</p>
        <p className="mt-[2px] text-slate-600">링크를 받은 사람은 7일 안에 들어올 수 있어요.</p>
        <p className="mt-[5px] font-medium">초대 링크</p>
        <p className="mt-[2px] flex gap-[3px]">
          <span className="relative h-[14px] flex-1 rounded border border-slate-300 bg-slate-50 px-[3px] leading-[13px] text-slate-700">
            <span className="thumb-anim thumb-cl-sel absolute inset-y-[3px] left-[3px] w-[78px] bg-blue-200" />
            <span className="relative">https://atlas.example/i/7KQ2</span>
          </span>
          <span className="grid w-[26px] place-items-center rounded bg-slate-900 font-semibold text-white">
            복사
          </span>
        </p>
        <p className="thumb-anim thumb-cl-sel mt-[3px] text-emerald-700">링크를 복사했어요</p>
      </div>
      <ThumbCursor motion="thumb-cl-cursor" />
    </ThumbStage>
  );
}
