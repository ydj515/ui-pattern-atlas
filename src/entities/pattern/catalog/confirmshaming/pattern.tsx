import { type Pattern } from "@/entities/pattern/model/pattern";

export const confirmshamingPattern: Pattern = {
  slug: "confirmshaming",

  kind: "concept",
  name: "Confirmshaming",
  nameKo: "컨펌셰이밍",
  aliases: ["컨펌 셰이밍", "죄책감 버튼", "manipulink", "guilt-tripping"],
  category: "dark-patterns",
  summary: "거절 버튼에 죄책감을 씌우기",
  description:
    "거절 선택지를 '아니요, 저는 제값 다 낼게요'처럼 놀리는 말로 써서 거절하는 사람이 부끄럽게 느끼도록 만드는 다크 패턴입니다. 바른 방법은 두 선택지를 같은 말투와 무게로 쓰는 것입니다.",
  tags: ["다크 패턴"],
  loadGuide: () => import("@/entities/pattern/catalog/confirmshaming/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/confirmshaming/ConfirmshamingDemo").then(
      (m) => m.ConfirmshamingDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/confirmshaming/ConfirmshamingThumbnail").then(
      (m) => m.ConfirmshamingThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/confirmshaming/ConfirmshamingDemo.tsx?raw"),
};
