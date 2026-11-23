import { type Pattern } from "@/entities/pattern/model/pattern";
import { SurveyThumbnail } from "@/entities/pattern/catalog/survey/SurveyThumbnail";

export const surveyPattern: Pattern = {
  slug: "survey",
  kind: "concept",
  name: "Survey",
  nameKo: "설문",
  aliases: ["설문 조사", "만족도 조사", "리커트 척도", "survey", "questionnaire"],
  category: "ux-research",
  summary: "같은 문항으로 여러 응답의 분포를 파악",
  description:
    "많은 사람에게 같은 문항을 물어 응답의 분포를 보는 방법입니다. 한 문항에는 한 가지만 묻고, 답을 유도하지 않는 말로 써야 결과가 무엇을 뜻하는지 알 수 있습니다.",
  whenToUse: [
    "인터뷰에서 들은 내용이 얼마나 흔한지 확인할 때",
    "만족도를 같은 척도로 꾸준히 잴 때",
    "여러 집단의 응답을 비교할 때",
  ],
  whenNotToUse: [
    "이유를 깊이 알아야 할 때(사용자 인터뷰 사용)",
    "실제 행동을 알아야 할 때(행동 기록 분석)",
    "한 문항에 두 가지를 함께 물을 때",
  ],
  alternatives: [
    { name: "사용자 인터뷰", slug: "user-interview", reason: "응답의 이유를 들을 때" },
    { name: "NPS 점수", slug: "nps-scale", reason: "추천 의향 하나를 잴 때" },
  ],
  accessibility: [
    "라디오 버튼과 fieldset으로 만든 설문 도구를 씁니다.",
    "척도 양 끝의 뜻을 글자로 적습니다.",
    "필수 문항을 줄이고 남은 문항 수를 알려 줍니다.",
  ],
  tags: ["UX 리서치", "정량 조사"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/survey/SurveyDemo").then((m) => m.SurveyDemo),
  Thumbnail: SurveyThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/survey/SurveyDemo.tsx?raw"),
};
