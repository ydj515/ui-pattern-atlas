import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as SocialProofDemo: 정보만 → 다른 사람의 선택. */
export function SocialProofThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-social-proof-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">정보만</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-social-proof-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">다른 사람의 선택</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-social-proof-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="block text-[7.5px]">린넨 셔츠</b>
          <span className="block">39,000원</span>
        </div>
        <div className="thumb-anim thumb-dk-social-proof-b absolute inset-0 bg-white p-[6px]">
          <b className="block text-[7.5px]">린넨 셔츠</b>
          <span className="block">39,000원</span>
          <span className="mt-[4px] block text-[5.5px] text-slate-600">
            이번 주 1,240명이 샀어요 · 리뷰 312개
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-social-proof-cursor" />
    </ThumbStage>
  );
}
