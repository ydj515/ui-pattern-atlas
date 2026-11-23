import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const ALL = [
  ["한국어", "한국어"],
  ["English", "영어"],
  ["日本語", "일본어"],
  ["中文", "중국어"],
];

/** Same list as LanguagePickerDemo: each language in its own words; searching 일본 finds 日本語. */
export function LanguagePickerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">언어</b>
        <span className="mt-[2px] grid h-[11px] rounded-[3px] border border-slate-300 px-[3px] leading-[10px]">
          <span className="thumb-anim thumb-st-lp-q-from col-start-1 row-start-1 text-slate-400">
            일본어, English
          </span>
          <span className="thumb-anim thumb-st-lp-q-to col-start-1 row-start-1" style={HIDDEN}>
            일본
          </span>
        </span>
        <div className="relative mt-[2px] h-[44px]">
          <div className="thumb-anim thumb-st-lp-all absolute inset-0 rounded-[4px] border border-slate-200">
            {ALL.map(([native, local], index) => (
              <p
                key={native}
                className="flex items-center justify-between border-b border-slate-100 px-[3px] py-[1px] last:border-0"
              >
                <span>
                  {native} <span className="text-[4.5px] text-slate-500">{local}</span>
                </span>
                <span className="relative size-[5px] rounded-full border border-slate-400">
                  {index === 0 ? (
                    <span className="absolute inset-[1px] rounded-full bg-slate-900" />
                  ) : null}
                </span>
              </p>
            ))}
          </div>
          <div
            className="thumb-anim thumb-st-lp-one absolute inset-x-0 top-0 rounded-[4px] border border-slate-200"
            style={HIDDEN}
          >
            <p className="flex items-center justify-between px-[3px] py-[1px]">
              <span>
                日本語 <span className="text-[4.5px] text-slate-500">일본어</span>
              </span>
              <span className="relative size-[5px] rounded-full border border-slate-400">
                <span
                  className="thumb-anim thumb-st-lp-pick absolute inset-[1px] rounded-full bg-slate-900"
                  style={HIDDEN}
                />
              </span>
            </p>
          </div>
        </div>
        <p className="grid text-[5.5px] text-slate-600">
          <span className="thumb-anim thumb-st-lp-s-from col-start-1 row-start-1">
            지금 언어: 한국어 (한국어)
          </span>
          <span className="thumb-anim thumb-st-lp-s-to col-start-1 row-start-1" style={HIDDEN}>
            지금 언어: 日本語 (일본어)
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-st-lp-cursor" />
    </ThumbStage>
  );
}
