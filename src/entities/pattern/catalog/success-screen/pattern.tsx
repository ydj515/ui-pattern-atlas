import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const successScreenPattern: Pattern = {
  slug: "success-screen",

  name: "Success Screen",
  nameKo: "완료 화면",
  aliases: ["결제 완료", "주문 완료", "완료 페이지", "confirmation page", "thank you page"],
  category: "completion",
  summary: "결제·가입 뒤 결과와 다음 단계",
  description:
    "결제나 가입을 마친 직후 결과를 분명한 제목으로 알리고, 주문 번호와 금액처럼 바로 확인하고 싶은 정보와 다음 행동을 함께 보여 주는 화면입니다. 화면 읽기 사용자가 결과를 바로 듣도록 제목으로 포커스를 옮깁니다.",
  tags: [...BASE_TAGS, "Focus management", "dl", "Next step"],
  loadGuide: () => import("@/entities/pattern/catalog/success-screen/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/success-screen/SuccessScreenDemo").then(
      (m) => m.SuccessScreenDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/success-screen/SuccessScreenThumbnail").then(
      (m) => m.SuccessScreenThumbnail,
    ),
  sources: [
    {
      fileName: "SuccessScreen.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/success-screen/SuccessScreen.tsx?raw"),
    },
    {
      fileName: "SuccessScreenDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/success-screen/SuccessScreenDemo.tsx?raw"),
    },
  ],
};
