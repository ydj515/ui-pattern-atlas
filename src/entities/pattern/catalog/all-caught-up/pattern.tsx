import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const allCaughtUpPattern: Pattern = {
  slug: "all-caught-up",

  name: "All Caught Up",
  nameKo: "모두 완료",
  aliases: ["인박스 제로", "다 읽음", "할 일 없음", "inbox zero", "you're all set"],
  category: "empty-error",
  summary: "남은 할 일이나 새 알림이 없음을 안내",
  description:
    "알림이나 할 일을 모두 처리해 목록이 비었을 때, 무언가 빠졌다는 느낌 대신 끝냈다는 사실을 알려 주는 패턴입니다. 새 항목이 언제 어디에 나타나는지도 함께 안내합니다.",
  tags: [...BASE_TAGS, "role=status", "UX writing"],
  loadGuide: () => import("@/entities/pattern/catalog/all-caught-up/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/all-caught-up/AllCaughtUpDemo").then(
      (m) => m.AllCaughtUpDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/all-caught-up/AllCaughtUpThumbnail").then(
      (m) => m.AllCaughtUpThumbnail,
    ),
  sources: [
    {
      fileName: "AllCaughtUp.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/all-caught-up/AllCaughtUp.tsx?raw"),
    },
    {
      fileName: "AllCaughtUpDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/all-caught-up/AllCaughtUpDemo.tsx?raw"),
    },
  ],
};
