import { type Pattern } from "@/entities/pattern/model/pattern";

export const glitchPattern: Pattern = {
  slug: "glitch",

  kind: "concept",
  name: "Glitch",
  nameKo: "글리치",
  aliases: ["글리치 효과", "RGB 분리", "glitch text"],
  category: "typography-style",
  summary: "채널 어긋남과 끊긴 획으로 디지털 오류를 표현",
  description:
    "빨강과 청록 채널이 어긋나고 일부 구간이 잘려 나간 듯 보이게 해 화면 오류를 연출하는 스타일입니다. 같은 글자를 두 번 더 겹치고 위치와 잘림 영역을 다르게 줍니다.",
  tags: ["글자 스타일", "Glitch"],
  loadGuide: () => import("@/entities/pattern/catalog/glitch/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/glitch/GlitchDemo").then((m) => m.GlitchDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/glitch/GlitchThumbnail").then((m) => m.GlitchThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/glitch/GlitchDemo.tsx?raw"),
};
