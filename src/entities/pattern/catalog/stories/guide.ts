import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "2013년 스냅챗이 처음 선보이고, 2016년 인스타그램이 같은 이름으로 들여오며 널리 퍼진 형식이에요.",
  whenToUse: [
    "짧은 소식, 오늘의 메뉴처럼 가볍게 넘겨 보는 콘텐츠",
    "모바일 앱",
    "콘텐츠가 몇 개 안 될 때",
  ],
  whenNotToUse: [
    "읽는 데 시간이 걸리는 글(자동 넘김이 방해)",
    "다시 찾아봐야 하는 정보",
    "데스크톱 화면",
  ],
  alternatives: [{ name: "캐러셀", slug: "carousel", reason: "페이지 안에서 넘길 때" }],
  accessibility: [
    "앞뒤 이동, 일시 정지, 닫기가 모두 이름이 있는 버튼입니다.",
    "일시 정지 버튼과 길게 누르기로 자동 넘김을 멈출 수 있습니다(WCAG 2.2.2).",
    "동작 줄이기 설정에서는 자동으로 넘기지 않습니다.",
    "스토리 제목은 aria-live로 바뀔 때 읽어 줍니다.",
  ],
};
