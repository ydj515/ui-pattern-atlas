import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "중세 유럽 필사본의 굵고 각진 글자로, 지면이 검게 보일 만큼 획이 빽빽해 블랙레터라고 불러요. 1450년대 구텐베르크 성경도 이 글자로 인쇄됐어요.",
  whenToUse: [
    "전통, 맥주, 신문 제호 같은 고전적인 로고",
    "음악(메탈) 앨범 표지",
    "라틴 문구 한두 단어",
  ],
  whenNotToUse: [
    "본문이나 한글 문장",
    "유니코드 장식 문자를 실제 글처럼 쓸 때(검색, 화면 읽기 문제)",
    "작은 크기",
  ],
  alternatives: [
    { name: "아르데코", slug: "art-deco", reason: "장식적인 고전 분위기" },
    { name: "에디토리얼", slug: "editorial-typography", reason: "세리프 제목" },
  ],
  accessibility: [
    "유니코드 장식 문자는 화면 읽기가 낱자로 읽으므로 role=img와 aria-label(Weekend Market)을 붙입니다.",
    "한글 문구를 함께 적어 뜻을 전합니다.",
    "장식 문자를 검색이나 복사가 필요한 글에 쓰지 않습니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
