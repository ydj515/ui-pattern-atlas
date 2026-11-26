import { type Pattern } from "@/entities/pattern/model/pattern";

export const preCheckedOptInPattern: Pattern = {
  slug: "pre-checked-opt-in",

  kind: "concept",
  name: "Pre-checked Opt-in",
  nameKo: "미리 체크된 동의",
  aliases: ["사전 체크", "기본 동의", "pre-ticked box", "opt-out by default"],
  category: "dark-patterns",
  summary: "마케팅 동의를 기본으로 켜 두기",
  description:
    "마케팅 수신처럼 선택 사항인 동의를 미리 체크해 두어, 사용자가 알아채지 못하면 동의한 것으로 처리하는 다크 패턴입니다. 개인정보 관련 법에서도 선택 동의는 사용자가 직접 켜도록 요구하는 경우가 많습니다.",
  tags: ["다크 패턴"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/pre-checked-opt-in/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/pre-checked-opt-in/PreCheckedOptInDemo").then(
      (m) => m.PreCheckedOptInDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/pre-checked-opt-in/PreCheckedOptInThumbnail").then(
      (m) => m.PreCheckedOptInThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/pre-checked-opt-in/PreCheckedOptInDemo.tsx?raw"),
};
