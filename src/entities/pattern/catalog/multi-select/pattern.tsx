import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { MultiSelectThumbnail } from "@/entities/pattern/catalog/multi-select/MultiSelectThumbnail";

export const multiSelectPattern: Pattern = {
  slug: "multi-select",
  name: "Multi-select",
  nameKo: "멀티 셀렉트",
  aliases: ["다중 선택", "체크 드롭다운", "multiselect", "multiple select"],
  category: "selection",
  summary: "여러 개를 골라 칩으로 보여 주기",
  description:
    "버튼을 눌러 펼친 목록에서 체크로 여러 개를 고르고, 고른 항목을 칩으로 보여 주는 패턴입니다. 자리를 적게 차지하면서 여러 값을 받을 수 있습니다.",
  whenToUse: [
    "보기가 5개 이상이고 여러 개를 골라야 할 때",
    "폼에서 자리를 적게 차지해야 할 때",
    "고른 항목을 하나씩 지울 수 있어야 할 때",
  ],
  whenNotToUse: [
    "보기가 몇 개뿐일 때(체크박스나 필터 칩으로 펼쳐 두기)",
    "목록에 없는 값을 넣어야 할 때(태그 입력 사용)",
    "하나만 고를 때(셀렉트 사용)",
  ],
  alternatives: [
    { name: "체크박스", slug: "checkbox", reason: "보기가 적어 펼쳐 둘 수 있을 때" },
    { name: "태그 입력", slug: "tag-input", reason: "직접 입력한 값을 쌓을 때" },
  ],
  accessibility: [
    '버튼은 aria-haspopup="listbox"와 aria-expanded로 목록과 연결되고, 이름에 선택 개수를 함께 읽어 줍니다.',
    "목록은 aria-multiselectable listbox이고 각 보기는 aria-selected를 가집니다.",
    "↑/↓로 이동, Space나 Enter로 고르고, Esc나 Tab으로 닫으면 버튼으로 포커스가 돌아옵니다.",
    '칩마다 "개발 빼기" 같은 이름의 삭제 버튼이 있습니다.',
  ],
  tags: [...BASE_TAGS, "listbox", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/multi-select/MultiSelectDemo").then(
      (m) => m.MultiSelectDemo,
    ),
  Thumbnail: MultiSelectThumbnail,
  sources: [
    {
      fileName: "MultiSelect.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/multi-select/MultiSelect.tsx?raw"),
    },
    {
      fileName: "MultiSelectDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/multi-select/MultiSelectDemo.tsx?raw"),
    },
  ],
};
