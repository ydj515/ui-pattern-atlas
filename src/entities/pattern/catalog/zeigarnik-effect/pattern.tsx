import { type Pattern } from "@/entities/pattern/model/pattern";

export const zeigarnikEffectPattern: Pattern = {
  slug: "zeigarnik-effect",
  kind: "concept",
  name: "Zeigarnik Effect",
  nameKo: "자이가르닉 효과",
  aliases: ["미완성 효과", "자이가르닉", "Zeigarnik effect", "open loops"],
  category: "ux-laws",
  summary: "끝내지 못한 일이 계속 떠오른다",
  description:
    "끝낸 일보다 끝내지 못한 일이 더 오래 기억에 남고 마무리하고 싶어진다는 원리입니다. 진행률과 남은 일을 보여 주면 설정이나 프로필을 끝까지 채우게 돕습니다.",
  origin:
    "1927년 심리학자 블루마 자이가르닉(Bluma Zeigarnik)의 연구에서 이름을 따왔어요. 식당 종업원이 계산 전 주문은 잘 기억하다가 계산이 끝나면 잊는다는 관찰에서 시작된 것으로 알려져 있어요.",
  whenToUse: [
    "프로필, 설정 체크리스트처럼 단계가 있는 일",
    "남은 일이 무엇인지 보여 줄 때",
    "중간에 멈춘 작업을 이어 하게 할 때",
  ],
  whenNotToUse: [
    "필요 없는 정보를 채우게 하려고 진행률을 띄울 때",
    "100%를 일부러 늦게 만들 때",
    "끝없이 새 할 일을 붙일 때",
  ],
  alternatives: [
    { name: "설정 체크리스트", slug: "setup-checklist", reason: "처음 할 일 목록" },
    { name: "프로그레스 바", slug: "progress-bar", reason: "진행률 표시" },
  ],
  accessibility: [
    "진행률은 숫자와 글로 함께 보여 줍니다.",
    "막대는 progress 요소나 role=progressbar로 만듭니다.",
    "남은 일은 바로 할 수 있는 링크로 둡니다.",
    "색만으로 진행을 알리지 않습니다.",
  ],
  tags: ["UX 법칙", "UX 심리"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/zeigarnik-effect/ZeigarnikDemo").then(
      (m) => m.ZeigarnikDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/zeigarnik-effect/ZeigarnikThumbnail").then(
      (m) => m.ZeigarnikThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/zeigarnik-effect/ZeigarnikDemo.tsx?raw"),
};
