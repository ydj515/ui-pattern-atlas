import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TONES = ["info", "success", "warning", "error"] as const;

/** Same flow as AlertBannerDemo: dismiss the warning banner → 배너 다시 보기 → it returns. */
export function AlertBannerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-x-0 top-[8px] flex justify-center gap-[3px]">
        {TONES.map((tone) => (
          <span
            key={tone}
            className={`rounded-full border px-[5px] text-[6.5px] leading-[11px] ${
              tone === "warning"
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 text-slate-500"
            }`}
          >
            {tone}
          </span>
        ))}
      </div>

      <div className="thumb-anim thumb-alert-banner absolute top-[26px] left-[8px] h-[34px] w-[160px] rounded-lg border border-amber-200 bg-amber-50 text-amber-950">
        <div className="absolute top-[7px] left-[7px] grid size-[11px] place-items-center rounded-full bg-amber-500 text-[7px] leading-none font-bold text-white">
          !
        </div>
        <p className="absolute top-[5px] left-[23px] font-semibold">쿠폰 마감이 3일 남았어요</p>
        <p className="absolute top-[17px] left-[23px] text-[7px] opacity-80">
          11월 25일 자정까지 사용할 수 있어요.
        </p>
        <div className="absolute top-[6px] right-[4px] grid size-[12px] place-items-center text-[8px] leading-none opacity-60">
          ✕
        </div>
      </div>
      <p className="thumb-anim thumb-alert-reshow absolute inset-x-0 top-[38px] text-center text-slate-500 underline">
        배너 다시 보기
      </p>
      <ThumbCursor motion="thumb-alert-cursor" />
    </ThumbStage>
  );
}
