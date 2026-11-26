import { type Pattern } from "@/entities/pattern/model/pattern";

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
  tags: ["UX 리서치", "정량 조사"],
  loadGuide: () => import("@/entities/pattern/catalog/survey/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/survey/SurveyDemo").then((m) => m.SurveyDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/survey/SurveyThumbnail").then((m) => m.SurveyThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/survey/SurveyDemo.tsx?raw"),
};
