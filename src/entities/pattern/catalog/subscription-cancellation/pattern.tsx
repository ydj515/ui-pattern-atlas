import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const subscriptionCancellationPattern: Pattern = {
  slug: "subscription-cancellation",

  name: "Subscription Cancellation",
  nameKo: "구독 해지",
  aliases: ["정기 결제 해지", "멤버십 해지", "cancel subscription", "cancellation flow"],
  category: "leave-return",
  summary: "끝나는 날짜를 먼저 알리고 한 화면에서 끝내는 해지",
  description:
    "해지해도 언제까지 쓸 수 있는지, 그 뒤로 무엇이 달라지는지를 먼저 보여 주고 한 화면에서 해지를 마치는 흐름입니다. 이유는 고르지 않아도 되고, 잠시 쉬기는 해지와 나란한 선택으로만 둡니다.",
  tags: [...BASE_TAGS, "radio", "fieldset", "role=status"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/subscription-cancellation/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/subscription-cancellation/SubscriptionCancellationDemo").then(
      (m) => m.SubscriptionCancellationDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/subscription-cancellation/SubscriptionCancellationThumbnail").then(
      (m) => m.SubscriptionCancellationThumbnail,
    ),
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
