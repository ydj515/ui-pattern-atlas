import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { NpsScaleThumbnail } from "@/entities/pattern/catalog/nps-scale/NpsScaleThumbnail";

export const npsScalePattern: Pattern = {
  slug: "nps-scale",
  name: "NPS Scale",
  nameKo: "NPS 점수",
  aliases: ["추천 의향", "순추천지수", "net promoter score", "0-10 scale"],
  category: "reaction-share",
  summary: "0~10점 추천 의향 묻기",
  description:
    "친구에게 추천할 의향을 0부터 10까지 고르게 하는 척도입니다. 고르기 전에는 모든 점수가 같은 모양이라 특정 숫자로 유도하지 않고, 점수에 맞는 후속 질문을 하나만 묻습니다.",
  whenToUse: [
    "서비스 전반의 추천 의향을 주기적으로 볼 때",
    "점수 뒤에 이유를 한 번 묻고 싶을 때",
    "같은 질문으로 추이를 비교할 때",
  ],
  whenNotToUse: [
    "한 기능의 만족도(도움이 됐나요나 별점 사용)",
    "가입 직후처럼 써 보기 전",
    "자주 반복해서 묻는 팝업",
  ],
  alternatives: [
    { name: "평점 슬라이더", slug: "rating-slider", reason: "범위를 끌어서 고를 때" },
    { name: "도움이 됐나요", slug: "thumbs-feedback", reason: "두 가지 답이면 될 때" },
  ],
  accessibility: [
    "fieldset과 라디오 버튼으로 만들어 방향키로 점수를 바꿉니다.",
    "양 끝의 뜻(전혀 아니에요, 매우 그래요)을 글자로 둡니다.",
    "선택한 점수는 색과 채움 둘 다로 보여 줍니다.",
    "후속 질문은 label로 입력칸과 연결합니다.",
  ],
  tags: [...BASE_TAGS, "radio", "fieldset", "Survey"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/nps-scale/NpsScaleDemo").then((m) => m.NpsScaleDemo),
  Thumbnail: NpsScaleThumbnail,
  sources: [
    {
      fileName: "NpsScale.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/nps-scale/NpsScale.tsx?raw"),
    },
    {
      fileName: "NpsScaleDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/nps-scale/NpsScaleDemo.tsx?raw"),
    },
  ],
};
