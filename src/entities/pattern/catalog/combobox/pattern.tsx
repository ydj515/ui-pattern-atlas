import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const comboboxPattern: Pattern = {
  slug: "combobox",
  name: "Combobox",
  nameKo: "콤보박스",
  aliases: ["자동완성", "검색 선택", "autocomplete", "typeahead"],
  category: "selection",
  summary: "입력하며 좁혀 고르는 자동완성",
  description:
    "글자를 입력하면 맞는 보기만 남겨 보여 주고, 그중 하나를 고르는 패턴입니다. 긴 목록을 스크롤하지 않고 몇 글자로 찾을 수 있습니다.",
  origin:
    "콤보(combo)는 조합이라는 뜻으로, 글자를 입력하는 칸(텍스트 박스)과 고르는 목록(리스트 박스)을 하나로 합쳤다는 데서 온 이름이에요.",
  whenToUse: [
    "도시, 회사, 사람처럼 보기가 많은 목록",
    "사용자가 찾는 이름의 일부를 알고 있을 때",
    "키보드로 빠르게 골라야 할 때",
  ],
  whenNotToUse: [
    "보기가 몇 개뿐일 때(셀렉트나 라디오 그룹 사용)",
    "목록에 없는 값도 자유롭게 넣어야 할 때(텍스트 필드에 추천만 붙이기)",
    "여러 개를 고를 때(멀티 셀렉트나 태그 입력 사용)",
  ],
  alternatives: [
    { name: "셀렉트", slug: "select", reason: "목록이 짧을 때" },
    { name: "검색창", slug: "search-field", reason: "고르기보다 목록을 걸러 보는 것이 목적일 때" },
  ],
  accessibility: [
    'WAI-ARIA combobox 패턴으로 role="combobox", aria-expanded, aria-controls를 씁니다.',
    "↑/↓로 옮기는 보기는 aria-activedescendant로 알려 포커스는 입력에 남습니다.",
    "Enter로 고르고, Esc로 목록을 닫고 한 번 더 누르면 입력을 지웁니다.",
    "한글 조합 중에는 키 처리를 건너뛰어 글자가 잘리지 않습니다.",
  ],
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/combobox/ComboboxDemo").then((m) => m.ComboboxDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/combobox/ComboboxThumbnail").then(
      (m) => m.ComboboxThumbnail,
    ),
  sources: [
    {
      fileName: "Combobox.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/combobox/Combobox.tsx?raw"),
    },
    {
      fileName: "ComboboxDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/combobox/ComboboxDemo.tsx?raw"),
    },
  ],
};
