import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "앱 아이콘, 빈 화면, 기능 소개의 대표 그림",
    "평평한 화면에 눈길을 끌 한 점이 필요할 때",
    "친근한 브랜드 표현",
  ],
  whenNotToUse: [
    "작은 크기의 툴바 아이콘(디테일이 뭉개짐)",
    "아이콘이 많은 목록",
    "다른 아이콘과 스타일이 섞일 때",
  ],
  alternatives: [
    { name: "스큐어모피즘", slug: "skeuomorphism", reason: "화면 전체에 실물 질감을 줄 때" },
    { name: "플랫", slug: "flat-design", reason: "아이콘도 평면으로" },
  ],
  accessibility: [
    "장식 아이콘은 aria-hidden이고 뜻은 글자로 전달합니다.",
    "아이콘 위 기호에 그림자를 더해 대비를 높입니다.",
    "하이라이트 흐림은 장식으로만 씁니다.",
    "버튼 상태는 글자로 알립니다.",
  ],
};
