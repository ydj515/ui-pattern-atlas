import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { BounceThumbnail } from "@/entities/pattern/catalog/bounce/BounceThumbnail";

export const bouncePattern: Pattern = {
  slug: "bounce",
  name: "Bounce",
  nameKo: "바운스",
  aliases: ["튀기", "통통", "bounce animation", "hop"],
  category: "motion",
  summary: "바닥에 닿아 튀어 오르는 움직임",
  description:
    "공이 바닥에 떨어져 점점 낮게 튀다 멈추듯 움직이는 효과입니다. 장바구니에 상품을 담으면 장바구니가 한 번 통통 튀어 숫자가 바뀐 곳으로 눈길을 보냅니다.",
  whenToUse: [
    "다른 곳에서 한 행동의 결과가 생긴 곳을 알릴 때",
    "장바구니, 알림처럼 숫자가 늘어난 아이콘",
    "가볍고 즐거운 분위기의 서비스",
  ],
  whenNotToUse: [
    "오류나 경고(흔들림이나 문구 사용)",
    "계속 반복되는 주의 끌기",
    "누른 버튼 자체의 반응(마이크로 인터랙션 사용)",
  ],
  alternatives: [
    { name: "스프링", slug: "spring", reason: "목표를 지나쳤다 돌아오는 움직임" },
    { name: "배지", slug: "badge", reason: "숫자만 바뀌어도 충분할 때" },
  ],
  accessibility: [
    "늘어난 개수는 role=status로 알려 움직임을 보지 못해도 알 수 있습니다.",
    "동작 줄이기에서는 튀지 않습니다.",
    "한 번만 재생하고 저절로 반복하지 않습니다.",
    "튀는 높이는 14px로 작게 둡니다.",
  ],
  tags: [...BASE_TAGS, "Web Animations API", "Keyframes", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/bounce/BounceDemo").then((m) => m.BounceDemo),
  Thumbnail: BounceThumbnail,
  sources: [
    {
      fileName: "Bounce.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bounce/Bounce.tsx?raw"),
    },
    {
      fileName: "BounceDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bounce/BounceDemo.tsx?raw"),
    },
  ],
};
