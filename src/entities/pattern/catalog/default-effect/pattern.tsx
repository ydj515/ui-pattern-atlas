import { type Pattern } from "@/entities/pattern/model/pattern";
import { DefaultEffectThumbnail } from "@/entities/pattern/catalog/default-effect/DefaultEffectThumbnail";

export const defaultEffectPattern: Pattern = {
  slug: "default-effect",
  kind: "concept",
  name: "Default Effect",
  nameKo: "기본값 효과",
  aliases: ["디폴트 효과", "기본 설정 효과", "default effect", "status quo bias"],
  category: "dark-pattern-ux",
  summary: "미리 정해 둔 옵션을 그대로 선택하는 경향",
  description:
    "사람들은 미리 정해 둔 값을 바꾸지 않고 그대로 고르는 경향이 있습니다. 기본값은 결정을 대신하는 것과 같으므로, 사용자에게 이롭고 되돌리기 쉬운 값을 기본으로 둬야 합니다.",
  whenToUse: [
    "설정, 금액, 요금제의 기본 선택을 정할 때",
    "개인정보 기본 설정을 검토할 때",
    "많은 사람이 고르는 값을 안내할 때",
  ],
  whenNotToUse: [
    "회사에만 유리한 값을 기본으로 둘 때",
    "개인정보 공유를 기본으로 켤 때",
    "기본값을 바꾸기 어렵게 만들 때",
  ],
  alternatives: [
    { name: "미리 체크된 동의", slug: "pre-checked-opt-in", reason: "동의를 기본값으로 켤 때" },
    { name: "라디오 그룹", slug: "radio-group", reason: "하나를 고르는 입력" },
  ],
  accessibility: [
    "기본 선택은 라디오 버튼의 checked로 화면 읽기에도 알려집니다.",
    "기본값인 이유를 글로 적습니다.",
    "다른 값으로 쉽게 바꿀 수 있게 합니다.",
    "선택 상태를 색과 테두리 둘 다로 보여 줍니다.",
  ],
  tags: ["다크 패턴과 UX 심리", "UX 심리"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/default-effect/DefaultEffectDemo").then(
      (m) => m.DefaultEffectDemo,
    ),
  Thumbnail: DefaultEffectThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/default-effect/DefaultEffectDemo.tsx?raw"),
};
