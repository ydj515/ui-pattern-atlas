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
  whenToUse: [
    "소셜 로그인을 여러 개 지원할 때",
    "가입한 뒤 로그인 방법을 늘리거나 줄일 때",
    "비밀번호 없이 가입한 계정이 있을 때",
  ],
  whenNotToUse: [
    "로그인 방법이 하나뿐인 서비스",
    "기기 권한을 다룰 때(권한 요청 안내 사용)",
    "해제하면 무엇이 바뀌는지 알리지 않을 때",
  ],
  alternatives: [
    { name: "간편 로그인", slug: "social-sign-in", reason: "처음 로그인할 때 외부 계정을 고를 때" },
    { name: "권한 요청 안내", slug: "permission-priming", reason: "기능에 필요한 권한을 물을 때" },
  ],
  accessibility: [
    "버튼 이름에 계정 이름을 넣어 어느 줄의 버튼인지 읽어 줍니다.",
    "잠긴 해제 버튼은 disabled이고 이유를 aria-describedby로 이어 둡니다.",
    "연결 상태는 글자로도 적어 색에 기대지 않습니다.",
  ],
  tags: [...BASE_TAGS, "aria-describedby", "disabled", "list"],
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
