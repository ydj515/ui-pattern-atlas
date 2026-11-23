import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STATES = [
  { query: "린넨", count: "결과 3개", items: ["린넨 셔츠 반팔", "린넨 바지", "린넨 원피스"] },
  {
    query: "린넨 셔",
    count: "결과 5개",
    items: ["린넨 셔츠 반팔", "린넨 바지", "옥스퍼드 셔츠", "린넨 원피스", "셔츠형 재킷"],
  },
  {
    query: "린넨 셔츠",
    count: "결과 5개",
    items: ["린넨 셔츠 반팔", "린넨 바지", "옥스퍼드 셔츠", "린넨 원피스", "셔츠형 재킷"],
  },
];

function marked(text: string, query: string) {
  const pattern = new RegExp(`(${query.split(" ").join("|")})`);
  return text.split(pattern).map((part, index) =>
    index % 2 === 1 ? (
      <mark key={index} className="rounded-[1px] bg-amber-100 font-semibold">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

/** Same list as SearchTermHighlightDemo: 린넨 is marked; typing 셔츠 marks it too and lists the results that match it. */
export function SearchTermHighlightThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        {STATES.map((state, index) => (
          <div
            key={state.query}
            className={`thumb-anim thumb-shl-s${index} absolute inset-[8px]`}
            style={index === 2 ? undefined : { opacity: 0 }}
          >
            <p className="h-[16px] rounded-[4px] border border-slate-300 px-[4px] leading-[14px]">
              {state.query}
            </p>
            <p className="mt-[3px] text-[5.5px] text-slate-500">{state.count}</p>
            {state.items.map((item) => (
              <p key={item} className="mt-[3px] leading-[8px]">
                {marked(item, state.query)}
              </p>
            ))}
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-shl-cursor" />
    </ThumbStage>
  );
}
