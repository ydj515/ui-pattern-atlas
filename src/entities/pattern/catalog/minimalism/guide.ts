import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 사진처럼 내용 자체를 돋보이게 할 때",
    "브랜드의 고급스러운 인상",
    "한 화면에 할 일이 하나뿐일 때",
  ],
  whenNotToUse: [
    "누를 수 있다는 신호까지 지워 버릴 때",
    "정보를 비교해야 하는 복잡한 화면",
    "가는 글자로 대비가 떨어질 때",
  ],
  alternatives: [
    { name: "플랫", slug: "flat-design", reason: "색 면으로 조작 요소를 분명히 할 때" },
    { name: "브루털리즘", slug: "brutalism", reason: "덜어 내되 거칠게" },
  ],
  accessibility: [
    "가는 글자와 회색 글자의 대비를 4.5:1 이상으로 맞춥니다.",
    "밑줄 버튼도 누르는 영역을 44px 가까이 확보합니다.",
    "상태를 글자로 함께 보여 줍니다.",
    "여백이 넓어도 읽는 순서가 분명하게 배치합니다.",
  ],
};
