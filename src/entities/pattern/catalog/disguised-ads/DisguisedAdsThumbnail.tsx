import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as DisguisedAdsDemo: 다크 패턴 → 바른 방법. */
export function DisguisedAdsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-disguised-ads-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-disguised-ads-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-disguised-ads-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b>회의록.pdf</b>
          <span className="mt-[4px] block rounded bg-emerald-500 py-[4px] text-center text-[8px] font-bold text-white">
            다운로드
          </span>
          <span className="mt-[3px] block text-center text-[5px] text-slate-400">
            파일 받기 (2.1MB)
          </span>
        </div>
        <div className="thumb-anim thumb-dk-disguised-ads-b absolute inset-0 bg-white p-[6px]">
          <b>회의록.pdf</b>
          <span className="mt-[4px] block text-center rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
            다운로드 (2.1MB)
          </span>
          <span className="mt-[4px] block rounded border border-dashed border-slate-300 p-[2px] text-[5.5px] text-slate-500">
            <b>광고</b> 클라우드 저장 공간 100GB
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-disguised-ads-cursor" />
    </ThumbStage>
  );
}
