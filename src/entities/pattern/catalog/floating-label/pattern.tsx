import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { FloatingLabelThumbnail } from "@/entities/pattern/catalog/floating-label/FloatingLabelThumbnail";

export const floatingLabelPattern: Pattern = {
  slug: "floating-label",
  name: "Floating Label",
  nameKo: "플로팅 라벨",
  aliases: ["떠오르는 라벨", "머티리얼 입력", "floating label", "float label"],
  category: "text-input",
  summary: "입력하면 위로 올라가는 라벨",
  description:
    "라벨이 입력칸 안에 있다가 포커스하거나 값이 들어가면 위로 작게 올라가는 패턴입니다. 세로 공간을 아끼면서도 입력한 뒤에 라벨이 사라지지 않습니다.",
  whenToUse: [
    "로그인, 결제처럼 필드가 적고 화면이 좁은 폼",
    "라벨이 짧은 필드",
    "디자인상 필드 높이를 하나로 맞춰야 할 때",
  ],
  whenNotToUse: [
    "라벨이 길거나 안내 문구가 필요한 필드(텍스트 필드 사용)",
    "자동 채우기로 값이 미리 들어오는 경우가 많을 때(라벨이 작게만 보임)",
    "날짜처럼 브라우저 기본 표시가 있는 입력",
  ],
  alternatives: [
    { name: "텍스트 필드", slug: "text-field", reason: "라벨을 필드 위에 따로 두는 기본형" },
  ],
  accessibility: [
    "placeholder가 아닌 실제 label 요소라 값을 넣은 뒤에도 이름이 남습니다.",
    "CSS의 :placeholder-shown으로 상태를 구분해 JavaScript 없이 동작합니다.",
    "올라간 라벨도 글자 대비 4.5:1을 지킵니다.",
    "움직임은 동작 줄이기 설정에서 꺼집니다.",
  ],
  tags: [...BASE_TAGS, "CSS only", "Forms"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/floating-label/FloatingLabelDemo").then(
      (m) => m.FloatingLabelDemo,
    ),
  Thumbnail: FloatingLabelThumbnail,
  sources: [
    {
      fileName: "FloatingLabelInput.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/floating-label/FloatingLabelInput.tsx?raw"),
    },
    {
      fileName: "FloatingLabelDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/floating-label/FloatingLabelDemo.tsx?raw"),
    },
  ],
};
