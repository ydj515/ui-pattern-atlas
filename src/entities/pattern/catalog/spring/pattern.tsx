import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const springPattern: Pattern = {
  slug: "spring",

  name: "Spring",
  nameKo: "스프링",
  aliases: ["스프링 애니메이션", "탄성", "spring physics", "damping"],
  category: "motion",
  summary: "목표를 지나쳤다 돌아와 멈추기",
  description:
    "용수철에 매단 추처럼 목표를 조금 지나쳤다가 되돌아와 멈추는 움직임입니다. 시간 대신 당기는 힘과 마찰로 정해서, 움직이는 도중에 목표가 바뀌어도 속도를 이어받아 자연스럽게 방향을 바꿉니다.",
  tags: [...BASE_TAGS, "requestAnimationFrame", "Spring physics", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/spring/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/spring/SpringDemo").then((m) => m.SpringDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/spring/SpringThumbnail").then((m) => m.SpringThumbnail),
  sources: [
    {
      fileName: "Spring.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/spring/Spring.tsx?raw"),
    },
    {
      fileName: "SpringDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/spring/SpringDemo.tsx?raw"),
    },
  ],
};
