import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "무엇을 찾을지 정하지 않은 사람에게 출발점을 줄 때",
    "계절, 이벤트처럼 관심사가 빨리 바뀔 때",
    "검색창이 비어 있을 때",
  ],
  whenNotToUse: [
    "집계 기간이나 기준을 밝힐 수 없을 때",
    "검색량이 적어 순위가 의미 없을 때",
    "광고 상품을 인기 검색어처럼 섞을 때(위장 광고)",
  ],
  alternatives: [
    { name: "최근 검색어", slug: "recent-searches", reason: "내가 전에 찾은 말을 다시 쓸 때" },
    {
      name: "위장 광고",
      slug: "disguised-ads",
      reason: "광고를 인기 항목처럼 보이면 생기는 문제를 볼 때",
    },
  ],
  accessibility: [
    "순위는 ol 목록이라 몇 번째인지 함께 읽힙니다.",
    "▲▼ 표시는 aria-hidden이고, 상승·하락 같은 글자를 따로 읽어 줍니다.",
    "집계 기준은 제목 옆 글자로 늘 보입니다.",
  ],
};
