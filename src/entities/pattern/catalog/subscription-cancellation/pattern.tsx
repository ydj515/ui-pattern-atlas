import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SubscriptionCancellationThumbnail } from "@/entities/pattern/catalog/subscription-cancellation/SubscriptionCancellationThumbnail";

export const subscriptionCancellationPattern: Pattern = {
  slug: "subscription-cancellation",
  name: "Subscription Cancellation",
  nameKo: "구독 해지",
  aliases: ["정기 결제 해지", "멤버십 해지", "cancel subscription", "cancellation flow"],
  category: "leave-return",
  summary: "끝나는 날짜를 먼저 알리고 한 화면에서 끝내는 해지",
  description:
    "해지해도 언제까지 쓸 수 있는지, 그 뒤로 무엇이 달라지는지를 먼저 보여 주고 한 화면에서 해지를 마치는 흐름입니다. 이유는 고르지 않아도 되고, 잠시 쉬기는 해지와 나란한 선택으로만 둡니다.",
  whenToUse: ["정기 결제를 끝낼 때", "남은 기간이 있을 때", "해지 대신 쉬기를 함께 제안할 때"],
  whenNotToUse: [
    "해지를 여러 화면 뒤에 숨길 때(해지 미로 참고)",
    "이유를 꼭 고르게 막을 때",
    "해지 버튼을 흐리게 두고 쉬기만 강조할 때",
  ],
  alternatives: [
    { name: "해지 미로", slug: "roach-motel", reason: "해지를 어렵게 만드는 다크 패턴" },
    {
      name: "몰래 자동 결제",
      slug: "forced-continuity",
      reason: "무료 체험 뒤 몰래 결제하는 다크 패턴",
    },
    { name: "회원 탈퇴", slug: "account-deletion", reason: "계정까지 지울 때" },
  ],
  accessibility: [
    "이유는 선택 사항이라고 legend에 적은 라디오 버튼입니다.",
    "해지와 쉬기 버튼을 같은 크기로 나란히 둡니다.",
    '결과는 role="status"로 읽어 줍니다.',
  ],
  tags: [...BASE_TAGS, "radio", "fieldset", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/subscription-cancellation/SubscriptionCancellationDemo").then(
      (m) => m.SubscriptionCancellationDemo,
    ),
  Thumbnail: SubscriptionCancellationThumbnail,
  sources: [
    {
      fileName: "SubscriptionCancellation.tsx",
      role: "Component",
      load: () =>
        import("@/shared/ui/patterns/subscription-cancellation/SubscriptionCancellation.tsx?raw"),
    },
    {
      fileName: "SubscriptionCancellationDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/subscription-cancellation/SubscriptionCancellationDemo.tsx?raw"),
    },
  ],
};
