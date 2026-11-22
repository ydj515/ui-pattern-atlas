import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as FileUploadDemo: drag 영수증.jpg onto the zone → it is listed with its size. */
export function FileUploadThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[3px] left-[24px] text-[6.5px] font-medium">증빙 사진</p>
      <div className="absolute top-[13px] left-[24px] h-[46px] w-[128px] rounded-md border border-dashed border-slate-300 text-center">
        <span className="thumb-anim thumb-fu-over absolute -inset-px rounded-md border border-dashed border-blue-600 bg-blue-50 opacity-0" />
        <p className="absolute inset-x-0 top-[9px] text-[6px] text-slate-600">
          여기로 끌어다 놓거나
        </p>
        <p className="absolute inset-x-0 top-[18px] text-[6.5px] font-semibold text-blue-700 underline">
          파일 고르기
        </p>
        <p className="absolute inset-x-0 top-[31px] text-[5.5px] text-slate-500">
          이미지 파일, 5MB 이하
        </p>
      </div>
      <p className="thumb-anim thumb-fu-row absolute top-[64px] left-[24px] flex h-[16px] w-[128px] items-center justify-between rounded border border-slate-200 px-[6px] text-[6px]">
        영수증.jpg
        <span className="text-slate-500">1.2MB ×</span>
      </p>
      <span className="thumb-anim thumb-fu-file absolute top-[84px] left-[105px] flex h-[14px] w-[50px] items-center gap-[3px] rounded border border-slate-300 bg-white px-[4px] text-[5.5px] shadow-md opacity-0">
        <span className="size-[6px] rounded-[1px] bg-amber-300" />
        영수증.jpg
      </span>
      <ThumbCursor motion="thumb-fu-cursor" />
    </ThumbStage>
  );
}
