import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const selectPattern: Pattern = {
  slug: "select",
  name: "Select",
  nameKo: "셀렉트",
  aliases: ["드롭다운", "선택 상자", "dropdown", "select box", "picker"],
  category: "selection",
  summary: "목록에서 하나 고르는 드롭다운",
  description:
    "정해진 목록에서 하나를 고르는 드롭다운입니다. 기본 select 요소를 꾸며 써서 휴대폰에서는 운영체제의 선택 화면이 열리고, 키보드와 보조 기술 지원을 그대로 얻습니다.",
  whenToUse: [
    "보기가 6개 이상이라 펼쳐 두면 자리를 많이 차지할 때",
    "지역, 국가, 연도처럼 사용자가 이미 아는 목록",
    "폼 안에서 다른 입력과 같은 높이로 맞춰야 할 때",
  ],
  whenNotToUse: [
    "보기가 2~5개이고 비교가 필요할 때(라디오 그룹 사용)",
    "목록이 아주 길어 찾아야 할 때(콤보박스 사용)",
    "여러 개를 고를 때(멀티 셀렉트 사용)",
  ],
  alternatives: [
    { name: "라디오 그룹", slug: "radio-group", reason: "보기가 적어 펼쳐 둘 수 있을 때" },
    { name: "콤보박스", slug: "combobox", reason: "입력해서 찾아야 할 만큼 길 때" },
  ],
  accessibility: [
    "기본 select라 키보드, 첫 글자 이동, 스크린 리더 지원이 브라우저 그대로입니다.",
    "아직 고르지 않은 상태는 고를 수 없는 placeholder 보기로 보여 줍니다.",
    "안내 문구는 aria-describedby로 연결됩니다.",
    "화살표 아이콘은 장식이라 aria-hidden이고 클릭을 막지 않습니다.",
  ],
  tags: [...BASE_TAGS, "Native select", "Forms"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/select/SelectDemo").then((m) => m.SelectDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/select/SelectThumbnail").then((m) => m.SelectThumbnail),
  sources: [
    {
      fileName: "Select.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/select/Select.tsx?raw"),
    },
    {
      fileName: "SelectDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/select/SelectDemo.tsx?raw"),
    },
  ],
};
