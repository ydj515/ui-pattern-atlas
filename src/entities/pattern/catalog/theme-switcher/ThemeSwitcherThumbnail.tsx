import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const OPTIONS = [
  ["시스템 설정", "split", "thumb-st-ts-sys"],
  ["라이트", "light", ""],
  ["다크", "dark", "thumb-st-ts-dark"],
] as const;

/** Same choice as ThemeSwitcherDemo: 시스템 설정 says what it is now; picking 다크 changes the preview. */
export function ThemeSwitcherThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">화면 모드</b>
        <p className="mt-[3px] grid grid-cols-3 gap-[3px] text-center">
          {OPTIONS.map(([label, preview, ring]) => (
            <span
              key={label}
              className="relative grid gap-[2px] rounded-[4px] border border-slate-200 p-[2px]"
            >
              {ring ? (
                <span
                  className={`thumb-anim ${ring} absolute -inset-px rounded-[4px] border-[1.5px] border-slate-900`}
                  style={ring === "thumb-st-ts-dark" ? HIDDEN : undefined}
                />
              ) : null}
              <span className="flex h-[16px] overflow-hidden rounded-[2px] border border-slate-200">
                {preview !== "dark" ? <span className="flex-1 bg-white" /> : null}
                {preview !== "light" ? <span className="flex-1 bg-slate-900" /> : null}
              </span>
              {label}
              {preview === "split" ? (
                <span className="text-[4.5px] text-slate-500">지금은 라이트</span>
              ) : null}
            </span>
          ))}
        </p>
        <div className="relative mt-[4px] h-[26px] overflow-hidden rounded-[4px] bg-slate-50 p-[4px] text-slate-800">
          <b>미리 보기</b>
          <p className="text-slate-500">라이트 모드로 보여요</p>
          <div
            className="thumb-anim thumb-st-ts-preview absolute inset-0 bg-slate-900 p-[4px] text-slate-100"
            style={HIDDEN}
          >
            <b>미리 보기</b>
            <p className="text-slate-400">다크 모드로 보여요</p>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-st-ts-cursor" />
    </ThumbStage>
  );
}
