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
  whenToUse: [
    "기본 행동이 분명하고 변형이 몇 개 있을 때",
    "툴바나 폼 끝처럼 자리가 좁을 때",
    "대부분 기본 행동만 쓸 때",
  ],
  whenNotToUse: [
    "행동끼리 성격이 다를 때(버튼을 따로 두기)",
    "기본 행동이 없을 때(드롭다운 메뉴 사용)",
    "선택지가 많을 때",
  ],
  alternatives: [
    { name: "드롭다운 메뉴", slug: "dropdown-menu", reason: "기본 행동 없이 메뉴만" },
    { name: "버튼", slug: "button", reason: "선택지 없이 한 가지 행동" },
  ],
  accessibility: [
    '두 버튼은 각각 이름이 있고, 화살표 버튼은 aria-haspopup="menu"와 aria-expanded를 가집니다.',
    '메뉴는 role="menu"이고 ↑/↓로 이동, Enter로 실행합니다.',
    "Esc나 Tab으로 닫으면 포커스가 화살표 버튼으로 돌아옵니다.",
    "바깥을 누르면 메뉴가 닫힙니다.",
  ],
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
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
