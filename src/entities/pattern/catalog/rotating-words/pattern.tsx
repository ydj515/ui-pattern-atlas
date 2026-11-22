import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { RotatingWordsThumbnail } from "@/entities/pattern/catalog/rotating-words/RotatingWordsThumbnail";

export const rotatingWordsPattern: Pattern = {
  slug: "rotating-words",
  name: "Rotating Words",
  nameKo: "단어 바꾸기",
  aliases: ["단어 회전", "바뀌는 문구", "word rotator", "text rotate"],
  category: "text-motion",
  summary: "한 자리의 단어가 차례로 바뀌기",
  description:
    "문장의 마지막 단어가 일정한 간격으로 위로 빠지고 다음 단어가 올라오는 표현입니다. 하나의 문장으로 여러 쓰임을 보여 줄 때 쓰고, 멈추기 버튼으로 언제든 멈출 수 있습니다.",
  whenToUse: [
    "디자인, 문서, 발표처럼 같은 문장에 들어갈 쓰임이 여러 개일 때",
    "소개 페이지의 큰 제목",
    "단어 길이가 비슷할 때",
  ],
  whenNotToUse: [
    "바뀌는 단어를 꼭 읽어야 하는 정보",
    "버튼이나 링크 안의 글",
    "멈출 방법 없이 5초 넘게 움직일 때",
  ],
  alternatives: [
    { name: "타이핑 효과", slug: "typewriter", reason: "한 문장을 한 번만 써 보일 때" },
    { name: "흐르는 글자", slug: "marquee", reason: "여러 항목을 계속 흘려 보낼 때" },
  ],
  accessibility: [
    "화면 읽기에는 모든 단어를 한 번에 읽어 주고 바뀔 때마다 알리지 않습니다.",
    "멈추기 버튼으로 움직임을 멈출 수 있습니다(WCAG 2.2.2).",
    "동작 줄이기에서는 첫 단어에서 멈추고 버튼도 숨깁니다.",
    "멈추기 버튼은 aria-pressed로 상태를 알립니다.",
  ],
  tags: [...BASE_TAGS, "CSS transition", "WCAG 2.2.2", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/rotating-words/RotatingWordsDemo").then(
      (m) => m.RotatingWordsDemo,
    ),
  Thumbnail: RotatingWordsThumbnail,
  sources: [
    {
      fileName: "RotatingWords.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/rotating-words/RotatingWords.tsx?raw"),
    },
    {
      fileName: "RotatingWordsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/rotating-words/RotatingWordsDemo.tsx?raw"),
    },
  ],
};
