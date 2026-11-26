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
  tags: [...BASE_TAGS, "list", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/dormant-account/guide").then((m) => m.guide),
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
