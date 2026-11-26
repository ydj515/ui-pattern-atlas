import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const connectedAccountsPattern: Pattern = {
  slug: "connected-accounts",

  name: "Connected Accounts",
  nameKo: "연결된 계정",
  aliases: ["소셜 계정 연결", "계정 연동", "linked accounts", "sign-in methods"],
  category: "settings",
  summary: "마지막 로그인 수단은 해제하지 못하게 막는 계정 연결",
  description:
    "카카오, 구글처럼 로그인에 쓰는 외부 계정을 연결하고 해제하는 목록입니다. 비밀번호 없이 연결된 계정이 하나뿐이면 해제 버튼을 잠그고 이유를 적어, 실수로 계정에 들어올 방법을 모두 잃지 않게 합니다.",
  tags: [...BASE_TAGS, "aria-describedby", "disabled", "list"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/connected-accounts/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/connected-accounts/ConnectedAccountsDemo").then(
      (m) => m.ConnectedAccountsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/connected-accounts/ConnectedAccountsThumbnail").then(
      (m) => m.ConnectedAccountsThumbnail,
    ),
  sources: [
    {
      fileName: "ConnectedAccounts.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/connected-accounts/ConnectedAccounts.tsx?raw"),
    },
    {
      fileName: "ConnectedAccountsDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/connected-accounts/ConnectedAccountsDemo.tsx?raw"),
    },
  ],
};
