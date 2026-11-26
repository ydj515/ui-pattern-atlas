import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const onboardingCarouselPattern: Pattern = {
  slug: "onboarding-carousel",

  name: "Onboarding Carousel",
  nameKo: "온보딩 슬라이드",
  aliases: ["온보딩", "튜토리얼 슬라이드", "intro slides", "walkthrough"],
  category: "onboarding",
  summary: "넘기며 보는 서비스 소개",
  description:
    "앱을 처음 연 사람에게 서비스의 핵심을 서너 장의 화면으로 하나씩 소개하는 패턴입니다. 건너뛰기를 늘 보여 주고, 저절로 넘어가지 않으며, 마지막 화면의 버튼이 시작하기로 바뀝니다.",
  tags: [...BASE_TAGS, "aria-roledescription", "Keyboard", "aria-current"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/onboarding-carousel/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/onboarding-carousel/OnboardingCarouselDemo").then(
      (m) => m.OnboardingCarouselDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/onboarding-carousel/OnboardingCarouselThumbnail").then(
      (m) => m.OnboardingCarouselThumbnail,
    ),
  sources: [
    {
      fileName: "OnboardingCarousel.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/onboarding-carousel/OnboardingCarousel.tsx?raw"),
    },
    {
      fileName: "OnboardingCarouselDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/onboarding-carousel/OnboardingCarouselDemo.tsx?raw"),
    },
  ],
};
