import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const termsAgreementPattern: Pattern = {
  slug: "terms-agreement",

  name: "Terms Agreement",
  nameKo: "약관 동의",
  aliases: ["전체 동의", "약관 체크", "consent checkboxes", "terms of service"],
  category: "onboarding",
  summary: "필수와 선택 약관을 구분하는 동의 화면",
  description:
    "전체 동의 아래에 필수와 선택 약관을 나눠 보여 주고, 필수를 모두 체크해야 다음으로 넘어가는 가입 화면입니다. 일부만 체크하면 전체 동의가 중간 상태로 보이고, 약관마다 내용을 열어 볼 수 있습니다.",
  tags: [...BASE_TAGS, "indeterminate", "fieldset", "Consent"],
  loadGuide: () => import("@/entities/pattern/catalog/terms-agreement/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/terms-agreement/TermsAgreementDemo").then(
      (m) => m.TermsAgreementDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/terms-agreement/TermsAgreementThumbnail").then(
      (m) => m.TermsAgreementThumbnail,
    ),
  sources: [
    {
      fileName: "TermsAgreement.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/terms-agreement/TermsAgreement.tsx?raw"),
    },
    {
      fileName: "TermsAgreementDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/terms-agreement/TermsAgreementDemo.tsx?raw"),
    },
  ],
};
