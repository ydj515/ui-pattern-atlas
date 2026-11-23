import { type Pattern } from "@/entities/pattern/model/pattern";
import { HicksLawThumbnail } from "@/entities/pattern/catalog/hicks-law/HicksLawThumbnail";

export const hicksLawPattern: Pattern = {
  slug: "hicks-law",
  kind: "concept",
  name: "Hick's Law",
  nameKo: "힉의 법칙",
  aliases: ["힉-하이먼 법칙", "선택 시간", "Hick-Hyman law", "choice reaction time"],
  category: "dark-pattern-ux",
  summary: "선택지가 많을수록 결정이 느려진다",
  description:
    "고를 수 있는 선택지가 늘어날수록 하나를 고르는 데 걸리는 시간이 길어진다는 원리입니다. 자주 찾는 항목부터 묶어 한 번에 보이는 선택지를 줄이면 빨리 고를 수 있습니다.",
  whenToUse: [
    "메뉴, 고객센터 첫 화면처럼 첫 선택을 고르게 할 때",
    "선택지를 묶을지 펼칠지 정할 때",
    "자주 쓰는 항목을 앞에 둘 때",
  ],
  whenNotToUse: [
    "숙련자가 많은 항목을 빠르게 훑는 도구(펼쳐 두는 편이 빠를 수 있음)",
    "묶음 이름이 모호해 오히려 헤맬 때",
    "필요한 항목을 숨겨 버릴 때",
  ],
  alternatives: [
    { name: "선택 과부하", slug: "choice-overload", reason: "결정을 미루게 되는 현상" },
    { name: "피츠의 법칙", slug: "fitts-law", reason: "누르기 쉬운 크기와 거리" },
  ],
  accessibility: [
    "묶음 이름은 안에 든 항목을 짐작할 수 있게 씁니다.",
    "선택지는 실제 버튼으로 만들어 키보드로 고를 수 있게 합니다.",
    "버튼 크기를 넉넉히 둬 누르기 쉽게 합니다.",
    "묶음 안의 항목도 검색으로 찾을 수 있게 합니다.",
  ],
  tags: ["다크 패턴과 UX 심리", "UX 심리"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/hicks-law/HicksLawDemo").then((m) => m.HicksLawDemo),
  Thumbnail: HicksLawThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/hicks-law/HicksLawDemo.tsx?raw"),
};
