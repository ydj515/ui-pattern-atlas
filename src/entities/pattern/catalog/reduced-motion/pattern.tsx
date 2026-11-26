import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const reducedMotionPattern: Pattern = {
  slug: "reduced-motion",

  name: "Reduced Motion",
  nameKo: "동작 줄이기 대응",
  aliases: ["prefers-reduced-motion", "움직임 줄이기", "모션 감소", "멀미"],
  category: "motion",
  summary: "움직임을 줄인 사용자를 위한 대안",
  description:
    "기기에서 동작 줄이기를 켠 사람에게는 큰 이동 대신 짧은 페이드로 같은 변화를 알리는 패턴입니다. 움직임을 없애는 것이 아니라 덜 자극적인 방식으로 바꾸고, 전달하는 내용은 그대로 둡니다.",
  tags: [...BASE_TAGS, "prefers-reduced-motion", "Web Animations API", "WCAG 2.3.3"],
  loadGuide: () => import("@/entities/pattern/catalog/reduced-motion/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/reduced-motion/MotionSafeDemo").then(
      (m) => m.MotionSafeDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/reduced-motion/MotionSafeThumbnail").then(
      (m) => m.MotionSafeThumbnail,
    ),
  sources: [
    {
      fileName: "MotionSafe.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/reduced-motion/MotionSafe.tsx?raw"),
    },
    {
      fileName: "MotionSafeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/reduced-motion/MotionSafeDemo.tsx?raw"),
    },
  ],
};
