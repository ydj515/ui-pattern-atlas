import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const welcomeScreenPattern: Pattern = {
  slug: "welcome-screen",

  name: "Welcome Screen / Modal",
  nameKo: "환영 화면",
  aliases: ["웰컴 모달", "첫 방문 인사", "welcome modal", "first-run"],
  category: "onboarding",
  summary: "첫 방문 인사와 시작 버튼",
  description:
    "처음 들어온 사람에게 서비스가 무엇을 하는지 한 문장으로 인사하고 시작 버튼을 주는 모달입니다. 먼저 둘러보기를 고를 수 있고, Esc로 닫아도 둘러보기로 처리합니다.",
  tags: [...BASE_TAGS, "dialog", "showModal", "Focus management"],
  loadGuide: () => import("@/entities/pattern/catalog/welcome-screen/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/welcome-screen/WelcomeScreenDemo").then(
      (m) => m.WelcomeScreenDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/welcome-screen/WelcomeScreenThumbnail").then(
      (m) => m.WelcomeScreenThumbnail,
    ),
  sources: [
    {
      fileName: "WelcomeScreen.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/welcome-screen/WelcomeScreen.tsx?raw"),
    },
    {
      fileName: "WelcomeScreenDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/welcome-screen/WelcomeScreenDemo.tsx?raw"),
    },
  ],
};
