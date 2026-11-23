import { type Pattern } from "@/entities/pattern/model/pattern";
import { FittsLawThumbnail } from "@/entities/pattern/catalog/fitts-law/FittsLawThumbnail";

export const fittsLawPattern: Pattern = {
  slug: "fitts-law",
  kind: "concept",
  name: "Fitts's Law",
  nameKo: "피츠의 법칙",
  aliases: ["피츠 법칙", "목표 크기와 거리", "Fitts law", "target size"],
  category: "ux-laws",
  summary: "크고 가까운 버튼이 누르기 쉽다",
  description:
    "누를 대상이 크고 가까울수록 빨리, 정확하게 누를 수 있다는 원리입니다. 자주 쓰는 주요 버튼은 크게 만들고 손가락이나 커서가 닿기 쉬운 곳에 둡니다.",
  origin:
    "1954년 미국 심리학자 폴 피츠(Paul Fitts)가 발표한 연구에서 이름을 따왔어요. 미 공군에서 조종석 조작 장치를 연구하던 항공 심리학자였어요.",
  whenToUse: [
    "결제, 보내기처럼 주요 버튼의 크기와 위치를 정할 때",
    "모바일에서 엄지가 닿는 영역을 고려할 때",
    "작은 아이콘 버튼의 누르는 영역을 넓힐 때",
  ],
  whenNotToUse: [
    "삭제처럼 실수하면 곤란한 버튼을 크고 가깝게 둘 때",
    "모든 버튼을 크게 만들어 위계가 사라질 때",
    "화면 가장자리에 붙여 다른 제스처와 겹칠 때",
  ],
  alternatives: [
    { name: "탭 제스처", slug: "tap", reason: "누르는 영역 44px" },
    { name: "하단 고정 버튼", slug: "sticky-action-bar", reason: "주요 행동을 아래에 고정할 때" },
  ],
  accessibility: [
    "누르는 영역은 최소 24px, 권장 44px 이상으로 둡니다(WCAG 2.5.8).",
    "주요 버튼은 실제 button으로 만듭니다.",
    "작은 글자 링크를 주요 행동에 쓰지 않습니다.",
    "버튼 사이 간격을 둬 잘못 누르지 않게 합니다.",
  ],
  tags: ["UX 법칙", "UX 심리"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/fitts-law/FittsLawDemo").then((m) => m.FittsLawDemo),
  Thumbnail: FittsLawThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/fitts-law/FittsLawDemo.tsx?raw"),
};
