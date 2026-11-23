import { type Pattern } from "@/entities/pattern/model/pattern";
import { PreCheckedOptInThumbnail } from "@/entities/pattern/catalog/pre-checked-opt-in/PreCheckedOptInThumbnail";

export const preCheckedOptInPattern: Pattern = {
  slug: "pre-checked-opt-in",
  kind: "concept",
  name: "Pre-checked Opt-in",
  nameKo: "미리 체크된 동의",
  aliases: ["사전 체크", "기본 동의", "pre-ticked box", "opt-out by default"],
  category: "dark-patterns",
  summary: "마케팅 동의를 기본으로 켜 두기 (다크 패턴)",
  description:
    "마케팅 수신처럼 선택 사항인 동의를 미리 체크해 두어, 사용자가 알아채지 못하면 동의한 것으로 처리하는 다크 패턴입니다. 개인정보 관련 법에서도 선택 동의는 사용자가 직접 켜도록 요구하는 경우가 많습니다.",
  whenToUse: [
    "가입, 결제 폼의 동의 항목을 검토할 때",
    "필수와 선택 동의를 구분하는 기준을 정할 때",
    "기본값이 미치는 영향을 설명할 때",
  ],
  whenNotToUse: [
    "선택 동의를 미리 켜 두고 싶을 때",
    "필수와 선택을 같은 모양으로 섞을 때",
    "동의 내용을 볼 수 없게 할 때",
  ],
  alternatives: [
    { name: "약관 동의", slug: "terms-agreement", reason: "필수와 선택을 구분한 동의 화면" },
    { name: "기본값 효과", slug: "default-effect", reason: "기본값이 선택에 주는 영향" },
  ],
  accessibility: [
    "체크박스마다 [필수], [선택]을 글자로 표시합니다.",
    "선택 동의는 체크되지 않은 상태로 시작합니다.",
    "label로 문구 전체를 눌러 고를 수 있게 합니다.",
    "동의 내용을 열어 볼 수 있게 합니다.",
  ],
  tags: ["다크 패턴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/pre-checked-opt-in/PreCheckedOptInDemo").then(
      (m) => m.PreCheckedOptInDemo,
    ),
  Thumbnail: PreCheckedOptInThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/pre-checked-opt-in/PreCheckedOptInDemo.tsx?raw"),
};
