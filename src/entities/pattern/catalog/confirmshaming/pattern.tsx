import { type Pattern } from "@/entities/pattern/model/pattern";
import { ConfirmshamingThumbnail } from "@/entities/pattern/catalog/confirmshaming/ConfirmshamingThumbnail";

export const confirmshamingPattern: Pattern = {
  slug: "confirmshaming",
  kind: "concept",
  name: "Confirmshaming",
  nameKo: "컨펌셰이밍",
  aliases: ["컨펌 셰이밍", "죄책감 버튼", "manipulink", "guilt-tripping"],
  category: "dark-patterns",
  summary: "거절 버튼에 죄책감을 씌우기 (다크 패턴)",
  description:
    "거절 선택지를 '아니요, 저는 제값 다 낼게요'처럼 놀리는 말로 써서 거절하는 사람이 부끄럽게 느끼도록 만드는 다크 패턴입니다. 바른 방법은 두 선택지를 같은 말투와 무게로 쓰는 것입니다.",
  whenToUse: [
    "팝업과 배너의 거절 문구를 검토할 때",
    "다크 패턴을 피하는 기준을 팀에 설명할 때",
    "같은 화면의 바른 문구와 비교할 때",
  ],
  whenNotToUse: [
    "실제 거절 버튼에 감정적인 말을 쓰고 싶을 때(그대로 쓰지 않기)",
    "사용자의 선택을 존중하지 않는 지표 목표를 정당화할 때",
    "거절 선택지를 숨기거나 작게 만들 때",
  ],
  alternatives: [
    { name: "미리 체크된 동의", slug: "pre-checked-opt-in", reason: "기본값으로 동의를 유도할 때" },
    { name: "반복 요청", slug: "nagging", reason: "거절해도 계속 물을 때" },
  ],
  accessibility: [
    "거절 선택지도 실제 button으로 만들어 키보드로 닿게 합니다.",
    "두 선택지의 글자 크기와 대비를 비슷하게 둡니다.",
    "밑줄 글자만으로 거절을 숨기지 않습니다.",
    "결과는 화면 읽기에도 같은 말로 들립니다.",
  ],
  tags: ["다크 패턴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/confirmshaming/ConfirmshamingDemo").then(
      (m) => m.ConfirmshamingDemo,
    ),
  Thumbnail: ConfirmshamingThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/confirmshaming/ConfirmshamingDemo.tsx?raw"),
};
