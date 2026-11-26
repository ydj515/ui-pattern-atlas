import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin: "2025년 애플이 iOS 26을 비롯한 운영체제에 들여온 디자인 언어의 이름이에요.",
  whenToUse: [
    "사진, 영상 위에 떠 있는 조작 막대",
    "콘텐츠를 가리지 않고 컨트롤을 겹칠 때",
    "최신 플랫폼의 인상을 맞출 때",
  ],
  whenNotToUse: [
    "밝고 복잡한 배경 위 긴 글",
    "웹에서 굴절을 흉내 내려 무거운 필터를 남용할 때",
    "대비를 보장할 수 없는 화면",
  ],
  alternatives: [
    { name: "글래스모피즘", slug: "glassmorphism", reason: "단순한 젖빛 유리" },
    { name: "머티리얼", slug: "material-design", reason: "불투명한 면과 그림자" },
  ],
  accessibility: [
    "배경이 바뀌어도 글자가 읽히도록 글자 그림자와 대비를 함께 확인합니다.",
    "prefers-reduced-transparency에서는 불투명한 면으로 바꾸는 것을 권장합니다.",
    "반사광 레이어는 pointer-events: none의 장식입니다.",
    "상태는 글자로 알립니다.",
  ],
};
