import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const CARDS = ["쿠폰함", "적립금", "배송 조회", "반품 신청", "주소 관리"];
const PICKS = [
  [
    "쿠폰함",
    [
      ["적립금", 90],
      ["주소 관리", 20],
      ["배송 조회", 10],
      ["반품 신청", 10],
    ],
  ],
  [
    "배송 조회",
    [
      ["반품 신청", 80],
      ["주소 관리", 40],
      ["쿠폰함", 10],
      ["적립금", 10],
    ],
  ],
] as const;

/** Same sort as CardSortingDemo: 쿠폰함 is grouped with 적립금; 배송 조회 with 반품 신청. */
export function CardSortingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>참가자 10명의 카드 묶음</b>
        <p className="mt-[3px] flex flex-wrap gap-[2px]">
          {CARDS.map((card) => {
            const pick = PICKS.findIndex(([name]) => name === card);
            return (
              <span
                key={card}
                className="relative rounded-[3px] border border-slate-300 px-[3px] py-[1px]"
              >
                {pick >= 0 ? (
                  <span
                    className={`thumb-anim thumb-ux-sort-${pick === 0 ? "a" : "b"} absolute -inset-px rounded-[3px] bg-slate-900 px-[3px] py-[1px] text-white`}
                    style={pick === 0 ? undefined : { opacity: 0 }}
                  >
                    {card}
                  </span>
                ) : null}
                {card}
              </span>
            );
          })}
        </p>
        {PICKS.map(([card, pairs], index) => (
          <div
            key={card}
            className={`thumb-anim thumb-ux-sort-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[44px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            {pairs.map(([name, percent]) => (
              <p
                key={name}
                className="mt-[2px] grid grid-cols-[28px_1fr_14px] items-center gap-[3px] text-[5.5px]"
              >
                {name}
                <span className="h-[3px] rounded-full bg-slate-100">
                  <span
                    className="block h-full rounded-full bg-blue-600"
                    style={{ width: `${percent}%` }}
                  />
                </span>
                <span className="text-right">{percent}%</span>
              </p>
            ))}
            <p className="mt-[3px] text-[5px] text-slate-600">
              {card} 카드와 가장 자주 함께 묶인 카드: {pairs[0][0]} ({pairs[0][1]}%)
            </p>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-ux-sort-cursor" />
    </ThumbStage>
  );
}
