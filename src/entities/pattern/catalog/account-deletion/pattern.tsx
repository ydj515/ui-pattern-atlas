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
  tags: [...BASE_TAGS, "select", "disabled", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/account-deletion/guide").then((m) => m.guide),
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
