import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const slideToUnlockPattern: Pattern = {
  slug: "slide-to-unlock",

  name: "Slide to Unlock",
  nameKo: "밀어서 잠금 해제",
  aliases: ["밀어서 해제", "슬라이드 확인", "swipe to confirm", "slide to pay"],
  category: "gesture",
  summary: "끝까지 밀어야 실행되는 확인",
  description:
    "손잡이를 트랙 끝까지 밀어야 실행되는 패턴으로, 초기 휴대폰 잠금 화면에서 주머니 속 오작동을 막으려고 쓰였습니다. 끝까지 가지 않고 놓으면 손잡이가 처음으로 돌아갑니다.",
  tags: [...BASE_TAGS, "input range", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/slide-to-unlock/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/slide-to-unlock/SlideToUnlockDemo").then(
      (m) => m.SlideToUnlockDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/slide-to-unlock/SlideToUnlockThumbnail").then(
      (m) => m.SlideToUnlockThumbnail,
    ),
  sources: [
    {
      fileName: "SlideToUnlock.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/slide-to-unlock/SlideToUnlock.tsx?raw"),
    },
    {
      fileName: "SlideToUnlockDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/slide-to-unlock/SlideToUnlockDemo.tsx?raw"),
    },
  ],
};
