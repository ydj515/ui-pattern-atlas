import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const DAYS = [
  [
    [
      ["A 장바구니 담기", 180, 3.8],
      ["B 바로 구매", 180, 2.9],
    ],
    "표본이 작아 아직 판단할 수 없어요",
  ],
  [
    [
      ["A 장바구니 담기", 5000, 3.1],
      ["B 바로 구매", 5000, 3.6],
    ],
    "정한 기간과 표본을 채운 뒤 비교해요. B가 0.5%p 높아요",
  ],
] as const;

/** Same experiment as AbTestDemo: on 1일째 A looks ahead; on 14일째, with the planned sample, B is ahead. */
export function AbTestThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-ux-ab-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">1일째</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">14일째</span>
        </p>
        <p className="mt-[3px] text-[5px] text-slate-600">
          방문자를 무작위로 반씩 나눔 · 지표: 결제 완료율
        </p>
        {DAYS.map(([variants, note], index) => (
          <div
            key={note}
            className={`thumb-anim thumb-ux-ab-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[32px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            {variants.map(([name, visitors, rate]) => (
              <div key={name} className="mt-[3px]">
                <p className="flex justify-between">
                  {name}
                  <b>{rate}%</b>
                </p>
                <span className="mt-[1px] block h-[3px] rounded-full bg-slate-100">
                  <span
                    className="block h-full rounded-full bg-blue-600"
                    style={{ width: `${rate * 20}%` }}
                  />
                </span>
                <p className="text-[5px] text-slate-500">
                  방문자 {visitors.toLocaleString("ko-KR")}명
                </p>
              </div>
            ))}
            <p className="mt-[3px] text-[5px] text-slate-600">{note}</p>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-ux-ab-cursor" />
    </ThumbStage>
  );
}
