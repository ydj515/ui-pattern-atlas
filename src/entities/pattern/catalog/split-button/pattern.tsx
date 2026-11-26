import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const splitButtonPattern: Pattern = {
  slug: "split-button",

  name: "Split Button",
  nameKo: "분할 버튼",
  aliases: ["드롭다운 버튼", "옵션 버튼", "split button", "button with menu"],
  category: "button",
  summary: "기본 동작과 다른 선택지를 함께",
  description:
    "자주 쓰는 행동은 바로 누르고, 옆의 화살표로 비슷한 다른 행동을 고르는 패턴입니다. 저장과 다른 이름으로 저장처럼 한 묶음의 행동에 씁니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/split-button/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/split-button/SplitButtonDemo").then(
      (m) => m.SplitButtonDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/split-button/SplitButtonThumbnail").then(
      (m) => m.SplitButtonThumbnail,
    ),
  sources: [
    {
      fileName: "SplitButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/split-button/SplitButton.tsx?raw"),
    },
    {
      fileName: "SplitButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/split-button/SplitButtonDemo.tsx?raw"),
    },
  ],
};
