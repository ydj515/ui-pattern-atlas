import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const dormantAccountPattern: Pattern = {
  slug: "dormant-account",
  name: "Dormant Account Notice",
  nameKo: "휴면 계정 안내",
  aliases: [
    "휴면 해제",
    "장기 미사용 계정",
    "dormant account",
    "inactive account",
    "reactivate account",
  ],
  category: "leave-return",
  summary: "어느 계정이 언제 휴면됐고 무엇이 남았는지 알리는 안내",
  description:
    "오래 쓰지 않아 휴면으로 바뀐 계정으로 로그인했을 때 보여 주는 화면입니다. 어느 계정인지, 언제 휴면이 됐는지, 따로 보관해 둔 적립금과 주문 내역을 알려 주고 한 번에 다시 쓰게 합니다.",
  whenToUse: [
    "오래 쓰지 않은 계정의 정보를 따로 보관하는 서비스",
    "휴면 계정으로 로그인했을 때",
    "남아 있는 적립금이나 내역을 알려야 할 때",
  ],
  whenNotToUse: [
    "휴면 없이 계정을 그대로 두는 서비스",
    "본인 확인 단계를 길게 늘어놓을 때",
    "무엇이 남았는지 알리지 않을 때",
  ],
  alternatives: [
    { name: "이어서 하기 안내", slug: "resume-prompt", reason: "휴면 없이 다시 온 사람을 맞을 때" },
    { name: "로그인 폼", slug: "login-form", reason: "앞 단계의 로그인" },
  ],
  accessibility: [
    "보관한 정보는 목록으로 읽힙니다.",
    "체크 표시는 장식이라 aria-hidden입니다.",
    '결과는 role="status"로 읽어 줍니다.',
  ],
  tags: [...BASE_TAGS, "list", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/dormant-account/DormantAccountDemo").then(
      (m) => m.DormantAccountDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/dormant-account/DormantAccountThumbnail").then(
      (m) => m.DormantAccountThumbnail,
    ),
  sources: [
    {
      fileName: "DormantAccount.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/dormant-account/DormantAccount.tsx?raw"),
    },
    {
      fileName: "DormantAccountDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/dormant-account/DormantAccountDemo.tsx?raw"),
    },
  ],
};
