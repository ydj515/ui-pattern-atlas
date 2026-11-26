import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "캠페인, 컬렉션 공개처럼 무게감 있는 큰 제목",
    "어두운 배경의 짧은 두세 줄",
    "공개 날짜처럼 순서가 있는 줄",
  ],
  whenNotToUse: [
    "작은 글씨(움직임이 잘 보이지 않음)",
    "줄바꿈 위치가 화면마다 달라지는 긴 문장",
    "읽기 중심의 본문",
  ],
  alternatives: [
    {
      name: "글자·줄 순차 등장",
      slug: "staggered-text-reveal",
      reason: "가림 없이 투명도로 나타날 때",
    },
    { name: "블러 인", slug: "blur-in", reason: "흐린 글자가 선명해질 때" },
  ],
  accessibility: [
    "화면 읽기에는 sr-only로 모든 줄을 한 번에 줍니다.",
    "움직이는 줄은 aria-hidden입니다.",
    "동작 줄이기에서는 바로 보여 줍니다.",
    "줄 상자 아래 여백을 둬 받침이 잘리지 않습니다.",
  ],
};
