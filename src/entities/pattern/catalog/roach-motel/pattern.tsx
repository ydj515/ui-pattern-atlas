import { type Pattern } from "@/entities/pattern/model/pattern";

export const roachMotelPattern: Pattern = {
  slug: "roach-motel",

  kind: "concept",
  name: "Roach Motel",
  nameKo: "해지 미로",
  aliases: ["해지 방해", "탈퇴 미로", "hard to cancel", "subscription trap"],
  category: "dark-patterns",
  summary: "가입은 쉽고 해지는 어렵게",
  description:
    "가입은 버튼 한 번으로 되지만 해지는 전화, 여러 단계, 숨은 메뉴를 거쳐야 하도록 만든 다크 패턴입니다. 바른 방법은 가입한 곳에서 같은 수고로 해지할 수 있게 하고 남은 이용 기간을 알려 주는 것입니다.",
  tags: ["다크 패턴"],
  loadGuide: () => import("@/entities/pattern/catalog/roach-motel/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/roach-motel/RoachMotelDemo").then((m) => m.RoachMotelDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/roach-motel/RoachMotelThumbnail").then(
      (m) => m.RoachMotelThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/roach-motel/RoachMotelDemo.tsx?raw"),
};
