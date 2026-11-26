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
  whenToUse: [
    "앱을 처음 열 때 데이터를 준비해야 할 때",
    "브랜드를 짧게 보여 줄 수 있을 때",
    "준비 시간이 1초 안팎일 때",
  ],
  whenNotToUse: [
    "준비가 끝났는데도 광고처럼 오래 보여 줄 때",
    "웹 페이지 이동마다(스켈레톤 사용)",
    "오래 걸리는 작업(진행률 표시 사용)",
  ],
  alternatives: [
    { name: "스켈레톤", slug: "skeleton", reason: "화면 모양을 먼저 보여 줄 때" },
    { name: "스피너", slug: "spinner", reason: "화면 일부만 기다릴 때" },
  ],
  accessibility: [
    "준비 중에는 aria-busy와 role=status로 화면 읽기에 알립니다.",
    "로고와 회전 표시는 장식이라 aria-hidden입니다.",
    "동작 줄이기에서는 회전과 페이드를 멈춥니다.",
    "최소 표시 시간은 600ms로 깜빡임을 막습니다.",
  ],
  tags: [...BASE_TAGS, "aria-busy", "@starting-style", "Reduced motion"],
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
