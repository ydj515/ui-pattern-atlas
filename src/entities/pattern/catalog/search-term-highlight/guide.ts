import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "결과가 왜 나왔는지 바로 보여 줄 때",
    "제목이 길어 검색어 위치를 찾기 어려울 때",
    "여러 단어로 검색했을 때 어떤 단어가 맞았는지 보여 줄 때",
  ],
  whenNotToUse: [
    "철자 교정이나 동의어로 찾은 결과처럼 글자가 일치하지 않을 때",
    "강조가 너무 많아 문장을 읽기 어려울 때",
    "검색과 상관없는 강조",
  ],
  alternatives: [
    {
      name: "검색어 추천",
      slug: "search-suggestions",
      reason: "입력 중에 덧붙일 부분을 굵게 보여 줄 때",
    },
    { name: "검색 결과 필터", slug: "search-filters", reason: "결과를 좁혀야 할 때" },
  ],
  accessibility: [
    "일치 부분은 mark 요소라 의미가 함께 전달됩니다.",
    "배경색과 함께 굵기를 바꿔 색만으로 구분하지 않습니다.",
    "정규식 특수 문자를 이스케이프해 어떤 검색어도 안전하게 처리합니다.",
  ],
};
