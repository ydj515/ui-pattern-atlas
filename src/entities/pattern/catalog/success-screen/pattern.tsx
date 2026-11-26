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
  whenToUse: [
    "결제, 주문, 가입, 예약처럼 되돌리기 어려운 일을 마친 직후",
    "번호나 금액을 다시 확인하고 싶어 할 때",
    "다음에 할 일이 정해져 있을 때",
  ],
  whenNotToUse: [
    "저장처럼 가벼운 결과(토스트 사용)",
    "같은 화면에서 계속 작업할 때(인라인 확인 메시지 사용)",
    "광고와 추천으로 결과를 덮을 때",
  ],
  alternatives: [
    {
      name: "제출 완료 안내",
      slug: "confirmation-message",
      reason: "화면 이동 없이 결과를 알릴 때",
    },
    { name: "영수증 요약", slug: "receipt-summary", reason: "금액 내역을 자세히 보여 줄 때" },
  ],
  accessibility: [
    "화면이 열리면 제목으로 포커스를 옮겨 결과를 먼저 읽게 합니다.",
    "확인할 정보는 dl 목록으로 이름과 값을 묶습니다.",
    "체크 아이콘은 장식이라 aria-hidden입니다.",
    "다음 행동 버튼은 주요와 보조를 모양으로 구분합니다.",
  ],
  tags: [...BASE_TAGS, "Focus management", "dl", "Next step"],
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
