import { type Pattern } from "@/entities/pattern/model/pattern";
import { MonospaceTypeThumbnail } from "@/entities/pattern/catalog/monospace/MonospaceTypeThumbnail";

export const monospacePattern: Pattern = {
  slug: "monospace",
  kind: "concept",
  name: "Monospace",
  nameKo: "모노스페이스",
  aliases: ["고정폭 글꼴", "모노 타이포", "monospace type", "fixed-width"],
  category: "typography-style",
  summary: "글자의 폭을 일정하게 배치",
  description:
    "모든 글자를 같은 폭의 칸에 맞춰 놓는 스타일입니다. 코드, 타자기, 표 같은 느낌을 주며, 이 예시는 칸을 선으로 드러내 고정폭을 보여 줍니다.",
  whenToUse: [
    "개발자 도구, 기술 블로그",
    "숫자와 코드처럼 자리를 맞춰야 할 때",
    "타자기 느낌의 연출",
  ],
  whenNotToUse: [
    "긴 한글 본문(자간이 성기게 보임)",
    "부드러운 분위기의 브랜드",
    "칸이 내용보다 눈에 띌 때",
  ],
  alternatives: [
    { name: "픽셀", slug: "pixel-typography", reason: "격자에 맞춘 획" },
    { name: "스위스 스타일", slug: "swiss-style", reason: "그리드 정렬" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Monospace"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/monospace/MonospaceTypeDemo").then(
      (m) => m.MonospaceTypeDemo,
    ),
  Thumbnail: MonospaceTypeThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/monospace/MonospaceTypeDemo.tsx?raw"),
};
