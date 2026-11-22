import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ConfettiThumbnail } from "@/entities/pattern/catalog/confetti/ConfettiThumbnail";

export const confettiPattern: Pattern = {
  slug: "confetti",
  name: "Confetti",
  nameKo: "축하 효과",
  aliases: ["컨페티", "폭죽 효과", "celebration", "party popper"],
  category: "completion",
  summary: "목표 달성 순간의 종이 조각",
  description:
    "30일 걷기처럼 오래 걸린 목표를 이룬 순간 종이 조각이 한 번 터져 흩어지는 효과입니다. 장식일 뿐이라 화면 읽기에서는 숨기고, 달성 문구를 함께 보여 줍니다.",
  whenToUse: [
    "오랜 목표를 이룬 드문 순간",
    "첫 결제, 첫 판매처럼 의미 있는 첫 경험",
    "즐거운 분위기의 서비스",
  ],
  whenNotToUse: [
    "자주 일어나는 일(축하가 소음이 됨)",
    "업무 도구의 평범한 저장",
    "실패나 경고와 같은 화면",
  ],
  alternatives: [
    { name: "체크 애니메이션", slug: "success-checkmark", reason: "조용히 성공을 알릴 때" },
    { name: "업적 배지", slug: "achievement-badge", reason: "달성을 기록으로 남길 때" },
  ],
  accessibility: [
    "효과는 aria-hidden이고 달성은 role=status 문구로 알립니다.",
    "동작 줄이기에서는 터뜨리지 않습니다.",
    "한 번만 재생하고 1.2초 안에 사라집니다.",
    "pointer-events: none이라 아래 버튼을 가리지 않습니다.",
  ],
  tags: [...BASE_TAGS, "Web Animations API", "aria-hidden", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/confetti/ConfettiDemo").then((m) => m.ConfettiDemo),
  Thumbnail: ConfettiThumbnail,
  sources: [
    {
      fileName: "Confetti.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/confetti/Confetti.tsx?raw"),
    },
    {
      fileName: "ConfettiDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/confetti/ConfettiDemo.tsx?raw"),
    },
  ],
};
