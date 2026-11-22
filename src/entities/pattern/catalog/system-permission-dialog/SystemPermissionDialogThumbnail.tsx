import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as SystemPermissionDialogDemo: 사진 올리기 → the device asks → 사진 선택 → 고른 사진만 쓸 수 있어요. */
export function SystemPermissionDialogThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[28px] h-[108px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="text-[8px] font-bold">후기 쓰기</p>
        <span className="mt-[4px] block h-[26px] rounded border border-dashed border-slate-300" />
        <span className="mt-[4px] inline-block rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
          사진 올리기
        </span>
        <p className="thumb-anim thumb-sp-result mt-[4px] text-[6px] text-slate-600">
          고른 사진만 쓸 수 있어요
        </p>
        <div
          className="thumb-anim thumb-sp-dialog absolute inset-0 grid place-items-center bg-slate-900/40"
          style={{ opacity: 0 }}
        >
          <div className="w-[96px] overflow-hidden rounded-lg bg-slate-100 text-center">
            <p className="px-[6px] pt-[6px] text-[6px] leading-[8px] font-semibold">
              ‘동네가게’에서 사진에 접근하려고 합니다
            </p>
            <p className="px-[6px] pt-[2px] pb-[4px] text-[5px] text-slate-700">
              후기에 사진을 붙이려면 필요해요
            </p>
            <p className="border-t border-slate-300 py-[2px] text-[6px] text-blue-600">사진 선택</p>
            <p className="border-t border-slate-300 py-[2px] text-[6px] font-semibold text-blue-600">
              모든 사진 허용
            </p>
            <p className="border-t border-slate-300 py-[2px] text-[6px] text-blue-600">
              허용 안 함
            </p>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-sp-cursor" />
    </ThumbStage>
  );
}
