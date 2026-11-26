import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const accountDeletionPattern: Pattern = {
  slug: "account-deletion",
  name: "Account Deletion",
  nameKo: "회원 탈퇴",
  aliases: ["탈퇴하기", "계정 삭제", "delete account", "close account"],
  category: "auth",
  summary: "잃는 것을 보여 주고 입력해서 확인하는 탈퇴",
  description:
    "계정을 지우기 전에 함께 사라지는 것을 보여 주고, 떠나는 이유를 선택으로 묻고, 정해진 단어를 입력해야 버튼이 켜지는 화면입니다. 접수 뒤에는 언제까지 되돌릴 수 있는지 알려 줍니다.",
  whenToUse: [
    "계정과 데이터를 지울 때",
    "적립금처럼 사라지는 것이 있을 때",
    "일정 기간 되돌릴 수 있게 할 때",
  ],
  whenNotToUse: [
    "해지를 일부러 어렵게 만들 때(다크 패턴, 해지 미로 참고)",
    "이유 입력을 필수로 막을 때",
    "잠시 쉬기만 원하는 사용자에게 탈퇴만 제시할 때",
  ],
  alternatives: [
    { name: "해지 미로", slug: "roach-motel", reason: "해지를 어렵게 만드는 다크 패턴" },
    { name: "확인 다이얼로그", slug: "confirmation-dialog", reason: "되돌릴 수 있는 가벼운 확인" },
    { name: "길게 눌러 확인", slug: "hold-to-confirm", reason: "길게 눌러 확인할 때" },
  ],
  accessibility: [
    "입력 확인 전에는 버튼이 disabled입니다.",
    "사라지는 항목은 목록으로 읽힙니다.",
    '접수 결과는 role="status"로 읽어 줍니다.',
  ],
  tags: [...BASE_TAGS, "select", "disabled", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/account-deletion/AccountDeletionDemo").then(
      (m) => m.AccountDeletionDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/account-deletion/AccountDeletionThumbnail").then(
      (m) => m.AccountDeletionThumbnail,
    ),
  sources: [
    {
      fileName: "AccountDeletion.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/account-deletion/AccountDeletion.tsx?raw"),
    },
    {
      fileName: "AccountDeletionDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/account-deletion/AccountDeletionDemo.tsx?raw"),
    },
  ],
};
