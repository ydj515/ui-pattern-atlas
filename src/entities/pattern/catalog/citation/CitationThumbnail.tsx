import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Marker({ n }: { readonly n: number }) {
  return (
    <span className="mx-[1px] inline-grid h-[7px] min-w-[7px] -translate-y-[2px] place-items-center rounded-[2px] bg-slate-200 px-[1px] text-[5px] font-semibold">
      {n}
    </span>
  );
}

/** Same answer as CitationDemo: tap marker 1 → the source card with its link. */
export function CitationThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 p-[8px] text-[6.5px] leading-[10px]">
        <p>
          서울숲은 매주 토요일 아침에 플리마켓이 열려요
          <Marker n={1} />. 주차는 공원 남쪽이 가장 넓어요
          <Marker n={2} />.
        </p>
        <ol className="mt-[6px] grid gap-[1px] border-t border-slate-100 pt-[4px] text-[5.5px] leading-[8px] text-slate-600">
          <li>1 서울숲 주말 행사 · 서울숲 공원</li>
          <li>2 주차 안내 · 서울숲 공원</li>
        </ol>
        <span
          className="thumb-anim thumb-cite-card absolute top-[20px] left-[50px] block w-[88px] rounded-md bg-white p-[5px] text-[5.5px] leading-[8px] shadow-lg ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          <span className="block text-slate-500">서울숲 공원</span>
          <b className="block">서울숲 주말 행사</b>
          <span className="text-blue-700 underline">원문 열기</span>
        </span>
      </div>
      <ThumbCursor motion="thumb-cite-cursor" />
    </ThumbStage>
  );
}
