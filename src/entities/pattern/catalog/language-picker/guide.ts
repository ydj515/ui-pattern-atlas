import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "지원하는 언어가 여러 개일 때",
    "잘못 바뀐 언어에서 되돌아와야 할 때",
    "언어 수가 많아 검색이 필요할 때",
  ],
  whenNotToUse: [
    "언어가 두 개뿐일 때(토글 링크 사용)",
    "국기로 언어를 표시할 때",
    "위치만 보고 언어를 강제로 정할 때",
  ],
  alternatives: [
    { name: "콤보박스", slug: "combobox", reason: "입력하며 목록에서 고를 때" },
    { name: "라디오 그룹", slug: "radio-group", reason: "선택지가 적을 때" },
  ],
  accessibility: [
    "언어 이름마다 lang 속성을 붙여 그 언어 발음으로 읽습니다.",
    '검색 칸은 type="search"이고 결과가 없으면 안내를 읽어 줍니다.',
    "선택지는 라디오 버튼이라 방향키로 옮겨 다닙니다.",
  ],
};
