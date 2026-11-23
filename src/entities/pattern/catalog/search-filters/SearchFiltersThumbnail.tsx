import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STATES = [
  {
    count: "결과 8개",
    chips: [],
    rows: [
      ["린넨 셔츠 흰색", "29,000원"],
      ["린넨 셔츠 베이지", "29,000원"],
      ["린넨 셔츠 네이비", "32,000원"],
    ],
  },
  {
    count: "결과 4개",
    chips: ["흰색"],
    rows: [
      ["린넨 셔츠 흰색", "29,000원"],
      ["오버핏 린넨 셔츠 흰색", "39,000원"],
      ["린넨 셔츠 반팔 흰색", "25,000원"],
    ],
  },
  {
    count: "결과 2개",
    chips: ["3만 원 이하", "흰색"],
    rows: [
      ["린넨 셔츠 흰색", "29,000원"],
      ["린넨 셔츠 반팔 흰색", "25,000원"],
    ],
  },
];

function Chip({ label, on }: { readonly label: string; readonly on?: string }) {
  return (
    <span className="relative rounded-full border border-slate-300 px-[4px] leading-[9px]">
      {on ? (
        <span className={`thumb-anim ${on} absolute -inset-px rounded-full bg-slate-900`} />
      ) : null}
      <span className="relative">{label}</span>
      {on ? (
        <span className={`thumb-anim ${on} absolute inset-0 px-[4px] text-white`}>{label}</span>
      ) : null}
    </span>
  );
}

/** Same results as SearchFiltersDemo: 흰색 → 결과 4개, then 3만 원 이하 → 결과 2개, each applied filter summed up as a chip. */
export function SearchFiltersThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b className="text-[7.5px]">린넨 셔츠 검색 결과</b>
        <p className="mt-[3px] text-[5.5px] text-slate-600">가격</p>
        <p className="flex gap-[3px]">
          <Chip label="3만 원 이하" on="thumb-sfl-price" />
          <Chip label="3만~5만 원" />
        </p>
        <p className="mt-[2px] text-[5.5px] text-slate-600">색상</p>
        <p className="flex gap-[3px]">
          <Chip label="흰색" on="thumb-sfl-white" />
          <Chip label="베이지" />
          <Chip label="네이비" />
        </p>
        {STATES.map((state, index) => (
          <div
            key={state.count}
            className={`thumb-anim thumb-sfl-s${index} absolute inset-x-[8px] top-[58px] border-t border-slate-100 pt-[3px]`}
            style={index === 2 ? undefined : { opacity: 0 }}
          >
            <p className="flex items-center gap-[3px]">
              <b>{state.count}</b>
              {state.chips.map((chip) => (
                <span key={chip} className="rounded-full bg-slate-100 px-[3px] text-[5.5px]">
                  {chip} ×
                </span>
              ))}
              {state.chips.length > 0 ? (
                <span className="ml-auto text-[5px] text-slate-500 underline">모두 지우기</span>
              ) : null}
            </p>
            {state.rows.map(([name, price]) => (
              <p key={name} className="mt-[2px] flex justify-between text-[5.5px] text-slate-700">
                {name}
                <span>{price}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-sfl-cursor" />
    </ThumbStage>
  );
}
