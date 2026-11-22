import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STROKE =
  "M8 30c6-14 10-20 13-16s-6 20-2 18 9-22 14-20-3 16 2 16 8-14 12-13-2 12 3 12 10-10 15-9 6 7 12 6 10-6 16-8";

/** Same flow as SignaturePadDemo: sign in the box → 서명 완료 turns on → 서명을 저장했어요. */
export function SignaturePadThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-sp-form absolute inset-0">
        <p className="absolute top-[6px] left-[24px] text-[7px] font-medium">서명</p>
        <p className="absolute top-[7px] left-[136px] text-[5.5px] text-slate-600 underline">
          지우기
        </p>
        <div className="absolute top-[16px] left-[24px] h-[50px] w-[128px] overflow-hidden rounded-md border border-dashed border-slate-300">
          <svg
            viewBox="0 0 128 50"
            className="absolute inset-0"
            fill="none"
            stroke="#0f172a"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d={STROKE} />
          </svg>
          <span
            className="thumb-anim thumb-sp-mask absolute inset-0 origin-right bg-white"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <p className="absolute top-[70px] left-[24px] text-[5.5px] text-slate-500">
          칸 안에 서명해 주세요
        </p>
        <p className="absolute top-[86px] left-[24px] text-[5.5px] text-slate-500 underline">
          이름으로 대신하기
        </p>
        <span className="absolute top-[81px] left-[112px] grid h-[14px] w-[40px] place-items-center rounded bg-slate-200 text-[6px] font-semibold text-slate-500">
          서명 완료
        </span>
        <span className="thumb-anim thumb-sp-ready absolute top-[81px] left-[112px] grid h-[14px] w-[40px] place-items-center rounded bg-slate-900 text-[6px] font-semibold text-white">
          서명 완료
        </span>
      </div>
      <div className="thumb-anim thumb-sp-saved absolute inset-0 text-center opacity-0">
        <p className="absolute inset-x-0 top-[18px] text-[7px] font-semibold">서명을 저장했어요</p>
        <svg
          viewBox="0 0 128 50"
          className="absolute top-[32px] left-[48px] h-[40px] w-[80px] rounded border border-slate-200"
          fill="none"
          stroke="#0f172a"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d={STROKE} />
        </svg>
        <p className="absolute inset-x-0 top-[78px] text-[5.5px] text-slate-500 underline">
          다시 서명
        </p>
      </div>
      <ThumbCursor motion="thumb-sp-cursor" />
    </ThumbStage>
  );
}
