import { type Pattern } from "@/entities/pattern/model/pattern";

export const naggingPattern: Pattern = {
  slug: "nagging",

  kind: "concept",
  name: "Nagging",
  nameKo: "반복 요청",
  aliases: ["졸라대기", "반복 팝업", "persistent prompts", "nag screen"],
  category: "dark-patterns",
  summary: "닫아도 계속 뜨는 요청",
  description:
    "사용자가 거절해도 알림 켜기, 앱 평가, 가입 요청을 화면마다 다시 띄워 결국 동의하게 만드는 다크 패턴입니다. 바른 방법은 한 번 묻고, 다시 묻지 않기를 고를 수 있게 하고 그 선택을 기억하는 것입니다.",
  tags: ["다크 패턴"],
  loadGuide: () => import("@/entities/pattern/catalog/nagging/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/nagging/NaggingDemo").then((m) => m.NaggingDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/nagging/NaggingThumbnail").then((m) => m.NaggingThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/nagging/NaggingDemo.tsx?raw"),
};
