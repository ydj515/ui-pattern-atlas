import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STOPS = [
  { label: "검색", body: "이름이나 태그로 찾아요", x: 14, w: 24, bubble: 14, next: "다음" },
  { label: "필터", body: "기간과 상태로 좁혀요", x: 42, w: 24, bubble: 42, next: "다음" },
  { label: "내보내기", body: "표를 파일로 내려받아요", x: 70, w: 34, bubble: 28, next: "마치기" },
];

/** Same toolbar as ProductTourDemo: 둘러보기 시작 → 검색 → 필터 → 내보내기 → 둘러보기를 마쳤어요. */
export function ProductTourThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[8px] h-[100px] w-[160px] overflow-hidden rounded-lg border border-slate-200">
        {STOPS.map((stop) => (
          <span
            key={stop.label}
            className="absolute top-[6px] grid h-[12px] place-items-center rounded border border-slate-200 text-[6.5px]"
            style={{ left: stop.x - 8, width: stop.w }}
          >
            {stop.label}
          </span>
        ))}
        <span className="absolute inset-x-[6px] top-[24px] h-[8px] rounded bg-slate-100" />
        <span className="absolute inset-x-[6px] top-[36px] h-[8px] rounded bg-slate-100" />
        <span className="absolute inset-x-[6px] top-[48px] h-[8px] rounded bg-slate-100" />
        <span className="absolute bottom-[5px] left-[6px] rounded bg-slate-900 px-[5px] py-[2px] text-[6px] font-semibold text-white">
          둘러보기 시작
        </span>
        <span
          className="thumb-anim thumb-pt2-done absolute bottom-[7px] left-[60px] text-[6px] text-slate-600"
          style={{ opacity: 0 }}
        >
          둘러보기를 마쳤어요
        </span>
        {STOPS.map((stop, index) => (
          <div
            key={stop.label}
            className={`thumb-anim thumb-pt2-s${index} absolute inset-0`}
            style={index === 1 ? undefined : { opacity: 0 }}
          >
            <span
              className="absolute top-[5px] h-[14px] rounded-md ring-1 ring-white shadow-[0_0_0_200px_rgba(15,23,42,0.55)]"
              style={{ left: stop.x - 9, width: stop.w + 2 }}
            />
            <div
              className="absolute top-[22px] w-[76px] rounded-md bg-white p-[4px] text-[5.5px] leading-[7px] shadow-lg"
              style={{ left: stop.bubble - 8 }}
            >
              <p className="flex justify-between text-slate-500">
                <span>{index + 1} / 3</span>
                <span>건너뛰기</span>
              </p>
              <p className="mt-[1px] text-[6.5px] font-semibold">{stop.label}</p>
              <p className="text-slate-600">{stop.body}</p>
              <p className="mt-[3px] flex justify-end gap-[2px]">
                {index > 0 ? (
                  <span className="rounded border border-slate-200 px-[3px]">이전</span>
                ) : null}
                <span className="rounded bg-slate-900 px-[3px] font-semibold text-white">
                  {stop.next}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-pt2-cursor" />
    </ThumbStage>
  );
}
