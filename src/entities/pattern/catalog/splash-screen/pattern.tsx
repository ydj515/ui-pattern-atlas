import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const splashScreenPattern: Pattern = {
  slug: "splash-screen",

  name: "Splash Screen",
  nameKo: "스플래시 화면",
  aliases: ["시작 화면", "로딩 화면", "launch screen", "splash"],
  category: "onboarding",
  summary: "앱 시작 직후 준비하는 동안 보이는 화면",
  description:
    "앱을 여는 동안 로고를 보여 주다가 준비가 끝나면 바로 홈으로 넘어가는 화면입니다. 너무 빨리 깜빡이지 않도록 최소 시간만 두고, 준비가 끝났는데 일부러 붙잡아 두지 않습니다.",
  tags: [...BASE_TAGS, "aria-busy", "@starting-style", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/splash-screen/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/splash-screen/SplashScreenDemo").then(
      (m) => m.SplashScreenDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/splash-screen/SplashScreenThumbnail").then(
      (m) => m.SplashScreenThumbnail,
    ),
  sources: [
    {
      fileName: "SplashScreen.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/splash-screen/SplashScreen.tsx?raw"),
    },
    {
      fileName: "SplashScreenDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/splash-screen/SplashScreenDemo.tsx?raw"),
    },
  ],
};
