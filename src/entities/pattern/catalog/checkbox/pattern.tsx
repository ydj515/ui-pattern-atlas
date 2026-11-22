import { BASE_TAGS, type Pattern } from "../../model/pattern";
import { CheckboxThumbnail } from "./CheckboxThumbnail";

export const checkboxPattern: Pattern = {
  slug: "checkbox",

  name: "Checkbox",
  nameKo: "체크박스",
  aliases: ["중간 선택", "Indeterminate"],
  category: "selection",
  summary: "여러 항목을 독립적으로 선택하고 부분 선택도 표시",
  description:
    "체크된 값은 폼을 제출하거나 여러 항목을 한 번에 처리할 때 사용합니다. 일부 항목만 고르면 전체 선택이 중간 상태가 됩니다.",
  whenToUse: ["메일 목록이나 약관에서 여러 개를 고를 수 있을 때"],
  whenNotToUse: ["누르자마자 설정을 켜거나 끄는 경우"],
  alternatives: [{ name: "스위치", slug: "switch", reason: "설정이 즉시 반영되는 켜기와 끄기" }],
  accessibility: [
    "네이티브 체크박스와 연결된 라벨을 사용합니다.",
    "일부 선택 상태는 indeterminate 속성으로 전달합니다.",
  ],
  tags: BASE_TAGS,
  loadPreview: () => import("./CheckboxDemo").then((m) => m.CheckboxDemo),
  Thumbnail: CheckboxThumbnail,
  sources: [
    {
      fileName: "Checkbox.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/checkbox/Checkbox.tsx?raw"),
    },
    { fileName: "CheckboxDemo.tsx", role: "Usage", load: () => import("./CheckboxDemo.tsx?raw") },
  ],
};
