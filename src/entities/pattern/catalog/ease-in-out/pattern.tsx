import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const easeInOutPattern: Pattern = {
  slug: "ease-in-out",

  name: "Ease In / Ease Out",
  nameKo: "이즈 인·아웃",
  aliases: ["이징", "easing", "타이밍 함수", "cubic-bezier", "가속 감속"],
  category: "motion",
  summary: "시작과 끝의 속도를 조절하는 이징",
  description:
    "같은 시간 동안 같은 거리를 움직여도 처음에 천천히, 끝에 천천히, 또는 양쪽 모두 천천히 움직이게 바꾸는 속도 곡선입니다. 들어오는 요소는 ease-out, 나가는 요소는 ease-in, 제자리에서 옮겨 가는 요소는 ease-in-out이 자연스럽습니다.",
  tags: [...BASE_TAGS, "CSS easing", "Web Animations API", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/ease-in-out/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/ease-in-out/EasingCompareDemo").then(
      (m) => m.EasingCompareDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/ease-in-out/EasingCompareThumbnail").then(
      (m) => m.EasingCompareThumbnail,
    ),
  sources: [
    {
      fileName: "EasingCompare.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/ease-in-out/EasingCompare.tsx?raw"),
    },
    {
      fileName: "EasingCompareDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/ease-in-out/EasingCompareDemo.tsx?raw"),
    },
  ],
};
