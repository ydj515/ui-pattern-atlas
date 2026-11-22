import { BentoGrid } from "@/shared/ui/patterns/bento-grid/BentoGrid";

const tile = "flex size-full flex-col justify-end p-3 text-sm";

export function BentoGridDemo() {
  return (
    <div className="w-full max-w-sm">
      <BentoGrid
        rowHeight={64}
        items={[
          {
            id: "sync",
            cols: 2,
            rows: 2,
            content: (
              <div className={`${tile} bg-slate-900 text-white`}>
                <b className="text-base">어디서나 이어서</b>휴대폰에서 쓰던 글을 노트북에서
              </div>
            ),
          },
          {
            id: "offline",
            cols: 2,
            content: (
              <div className={`${tile} bg-amber-100 text-amber-950`}>
                <b>오프라인 저장</b>
              </div>
            ),
          },
          {
            id: "share",
            content: (
              <div className={`${tile} bg-sky-100 text-sky-950`}>
                <b>공유</b>
              </div>
            ),
          },
          {
            id: "dark",
            content: (
              <div className={`${tile} bg-emerald-100 text-emerald-950`}>
                <b>다크 모드</b>
              </div>
            ),
          },
          {
            id: "search",
            cols: 4,
            content: (
              <div className={`${tile} bg-rose-100 text-rose-950`}>
                <b>모든 메모를 한 번에 검색</b>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
