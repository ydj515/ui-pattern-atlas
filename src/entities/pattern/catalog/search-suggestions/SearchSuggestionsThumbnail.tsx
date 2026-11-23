import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const COMPLETIONS = [" 셔츠", " 셔츠 반팔", " 바지", " 원피스"];

/** Same search as SearchSuggestionsDemo: type 린넨 → completions in bold → pick 린넨 바지 → its results. */
export function SearchSuggestionsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <div className="flex gap-[4px]">
          <span className="relative h-[16px] flex-1 rounded-[4px] border border-slate-300 px-[4px] leading-[14px]">
            <span
              className="thumb-anim thumb-sgs-t0 absolute text-slate-400"
              style={{ opacity: 0 }}
            >
              린넨을 입력해 보세요
            </span>
            <span className="thumb-anim thumb-sgs-t1 absolute" style={{ opacity: 0 }}>
              린
            </span>
            <span className="thumb-anim thumb-sgs-t2 absolute" style={{ opacity: 0 }}>
              린넨
            </span>
            <span className="thumb-anim thumb-sgs-t3 absolute">린넨 바지</span>
          </span>
          <span className="grid w-[22px] place-items-center rounded-[4px] bg-slate-900 font-semibold text-white">
            검색
          </span>
        </div>
        <ul
          className="thumb-anim thumb-sgs-list mt-[2px] rounded-[4px] border border-slate-200 py-[2px] shadow-sm"
          style={{ opacity: 0 }}
        >
          {COMPLETIONS.map((rest) => (
            <li key={rest} className="h-[12px] px-[4px] leading-[12px] text-slate-600">
              <span className="relative">
                <span
                  className="thumb-anim thumb-sgs-l1 absolute whitespace-pre"
                  style={{ opacity: 0 }}
                >
                  린<b className="text-slate-900">넨{rest}</b>
                </span>
                <span className="thumb-anim thumb-sgs-l2 whitespace-pre">
                  린넨<b className="text-slate-900">{rest}</b>
                </span>
              </span>
            </li>
          ))}
        </ul>
        <p className="thumb-anim thumb-sgs-done absolute top-[30px] left-[8px] text-slate-700">
          린넨 바지 검색 결과
        </p>
      </div>
      <ThumbCursor motion="thumb-sgs-cursor" />
    </ThumbStage>
  );
}
