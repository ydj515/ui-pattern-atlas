import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { OnboardingCarouselThumbnail } from "@/entities/pattern/catalog/onboarding-carousel/OnboardingCarouselThumbnail";

export const onboardingCarouselPattern: Pattern = {
  slug: "onboarding-carousel",
  name: "Onboarding Carousel",
  nameKo: "온보딩 슬라이드",
  aliases: ["온보딩", "튜토리얼 슬라이드", "intro slides", "walkthrough"],
  category: "onboarding",
  summary: "넘기며 보는 서비스 소개",
  description:
    "앱을 처음 연 사람에게 서비스의 핵심을 서너 장의 화면으로 하나씩 소개하는 패턴입니다. 건너뛰기를 늘 보여 주고, 저절로 넘어가지 않으며, 마지막 화면의 버튼이 시작하기로 바뀝니다.",
  whenToUse: [
    "처음 보는 개념을 미리 알려야 하는 서비스",
    "소개할 핵심이 세 가지 안팎일 때",
    "가입 전에 무엇을 얻는지 보여 줄 때",
  ],
  whenNotToUse: [
    "화면만 봐도 쓸 수 있는 단순한 앱(바로 시작하기)",
    "기능 설명서처럼 긴 내용",
    "건너뛸 수 없게 막을 때",
  ],
  alternatives: [
    { name: "코치마크", slug: "coach-mark", reason: "실제 화면에서 버튼 하나를 짚어 줄 때" },
    { name: "환영 화면", slug: "welcome-screen", reason: "한 화면으로 인사만 할 때" },
  ],
  accessibility: [
    "건너뛰기, 점, 다음 버튼 모두 실제 button이라 키보드로 쓸 수 있습니다.",
    "방향키로도 앞뒤 화면을 오갑니다.",
    "제목은 aria-live로 바뀔 때 읽힙니다.",
    "점 버튼에는 몇 번째 소개인지 이름이 있고 현재 점은 aria-current로 표시합니다.",
  ],
  tags: [...BASE_TAGS, "aria-roledescription", "Keyboard", "aria-current"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/onboarding-carousel/OnboardingCarouselDemo").then(
      (m) => m.OnboardingCarouselDemo,
    ),
  Thumbnail: OnboardingCarouselThumbnail,
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
