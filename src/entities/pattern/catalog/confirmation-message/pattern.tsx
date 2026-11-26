import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const confirmationMessagePattern: Pattern = {
  slug: "confirmation-message",

  name: "Confirmation Message",
  nameKo: "제출 완료 안내",
  aliases: ["완료 화면", "제출 완료", "접수 완료", "success page", "thank you page"],
  category: "feedback",
  summary: "폼을 보낸 뒤 다음 단계 안내",
  description:
    "폼을 보낸 자리에 결과와 다음 단계를 보여 주는 패턴입니다. 무엇이 접수됐는지, 언제 어떻게 답을 받는지, 다음에 무엇을 할 수 있는지를 한곳에서 알려 줍니다.",
  tags: [...BASE_TAGS, "Forms", "Focus management"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/confirmation-message/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/confirmation-message/ConfirmationMessageDemo").then(
      (m) => m.ConfirmationMessageDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/confirmation-message/ConfirmationMessageThumbnail").then(
      (m) => m.ConfirmationMessageThumbnail,
    ),
  sources: [
    {
      fileName: "ConfirmationMessage.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/confirmation-message/ConfirmationMessage.tsx?raw"),
    },
    {
      fileName: "ConfirmationMessageDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/confirmation-message/ConfirmationMessageDemo.tsx?raw"),
    },
  ],
};
