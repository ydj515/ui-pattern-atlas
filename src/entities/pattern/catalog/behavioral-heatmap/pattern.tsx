import { type Pattern } from "@/entities/pattern/model/pattern";
import { BehavioralHeatmapThumbnail } from "@/entities/pattern/catalog/behavioral-heatmap/BehavioralHeatmapThumbnail";

export const behavioralHeatmapPattern: Pattern = {
  slug: "behavioral-heatmap",
  kind: "concept",
  name: "Behavioral Heatmap",
  nameKo: "행동 히트맵",
  aliases: ["클릭 히트맵", "스크롤 맵", "클릭 맵", "click heatmap", "scroll map"],
  category: "ux-research",
  summary: "클릭과 스크롤 위치의 분포 비교",
  description:
    "많은 방문자가 페이지의 어디를 누르고 어디까지 내려 봤는지 색으로 겹쳐 보는 방법입니다. 누를 수 없는 곳에 몰린 클릭이나, 중요한 내용 앞에서 끊기는 스크롤을 찾을 수 있습니다.",
  whenToUse: [
    "방문자가 많은 페이지의 배치를 점검할 때",
    "눌리지 않는 버튼이나 잘못 눌리는 요소를 찾을 때",
    "긴 페이지에서 내용 순서를 정할 때",
  ],
  whenNotToUse: [
    "왜 그곳을 눌렀는지 알아야 할 때(사용성 테스트 사용)",
    "방문자가 적을 때",
    "화면 크기마다 배치가 크게 달라 섞어 볼 때",
  ],
  alternatives: [
    { name: "퍼널 분석", slug: "funnel-analysis", reason: "단계별로 얼마나 빠지는지 볼 때" },
    { name: "사용성 테스트", slug: "usability-test", reason: "행동의 이유를 볼 때" },
  ],
  accessibility: [
    "키보드나 화면 낭독기 사용은 클릭 위치에 잡히지 않는다는 점을 감안합니다.",
    "기기와 화면 너비별로 나눠 봅니다.",
    "입력 내용이 기록되지 않게 개인 정보를 가립니다.",
  ],
  tags: ["UX 리서치", "정량 조사"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/behavioral-heatmap/BehavioralHeatmapDemo").then(
      (m) => m.BehavioralHeatmapDemo,
    ),
  Thumbnail: BehavioralHeatmapThumbnail,
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/behavioral-heatmap/BehavioralHeatmapDemo.tsx?raw"),
};
