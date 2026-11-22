import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { MotionSafeThumbnail } from "@/entities/pattern/catalog/reduced-motion/MotionSafeThumbnail";

export const reducedMotionPattern: Pattern = {
  slug: "reduced-motion",
  name: "Reduced Motion",
  nameKo: "동작 줄이기 대응",
  aliases: ["prefers-reduced-motion", "움직임 줄이기", "모션 감소", "멀미"],
  category: "motion",
  summary: "움직임을 줄인 사용자를 위한 대안",
  description:
    "기기에서 동작 줄이기를 켠 사람에게는 큰 이동 대신 짧은 페이드로 같은 변화를 알리는 패턴입니다. 움직임을 없애는 것이 아니라 덜 자극적인 방식으로 바꾸고, 전달하는 내용은 그대로 둡니다.",
  whenToUse: [
    "화면을 가로지르는 이동, 확대, 회전, 패럴랙스가 있을 때",
    "자동으로 재생되는 애니메이션이 있을 때",
    "모든 모션 컴포넌트의 기본값으로",
  ],
  whenNotToUse: [
    "움직임이 곧 정보인 진행 표시(속도를 늦추는 대신 유지)",
    "아주 작은 색 변화나 그림자 변화(이미 충분히 차분함)",
    "설정을 무시하고 사이트 자체 토글만 두는 경우",
  ],
  alternatives: [
    { name: "페이드", slug: "fade", reason: "이동 없이 나타나고 사라지게 할 때" },
    { name: "토스트", slug: "toast", reason: "결과를 글로 알릴 때" },
  ],
  accessibility: [
    "prefers-reduced-motion 미디어 쿼리를 useSyncExternalStore로 구독해 설정을 바꾸면 바로 반영합니다.",
    "동작 줄이기에서는 이동, 확대 대신 160ms 페이드만 씁니다(WCAG 2.3.3).",
    "움직임이 바뀌어도 내용과 순서는 같습니다.",
    "미리 보기 체크박스는 설정을 흉내 낼 뿐 시스템 설정을 바꾸지 않습니다.",
  ],
  tags: [...BASE_TAGS, "prefers-reduced-motion", "Web Animations API", "WCAG 2.3.3"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/reduced-motion/MotionSafeDemo").then(
      (m) => m.MotionSafeDemo,
    ),
  Thumbnail: MotionSafeThumbnail,
  sources: [
    {
      fileName: "MotionSafe.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/reduced-motion/MotionSafe.tsx?raw"),
    },
    {
      fileName: "MotionSafeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/reduced-motion/MotionSafeDemo.tsx?raw"),
    },
  ],
};
