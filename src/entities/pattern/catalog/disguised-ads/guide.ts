import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "광고 지면과 기능 버튼이 한 화면에 있을 때",
    "광고 표시 기준을 정할 때",
    "주요 버튼이 광고에 묻히는지 확인할 때",
  ],
  whenNotToUse: [
    "광고를 진짜 버튼과 같은 모양으로 만들 때",
    "광고 표시를 아주 작게 숨길 때",
    "광고를 콘텐츠 목록에 섞어 구분하지 않을 때",
  ],
  alternatives: [
    { name: "버튼", slug: "button", reason: "주요 행동을 분명히 하는 버튼 위계" },
    { name: "카드 그리드", slug: "card-grid", reason: "콘텐츠와 광고를 구분해 배치할 때" },
  ],
  accessibility: [
    "광고 영역에 광고라는 글자를 둡니다.",
    "진짜 기능 버튼 이름에 파일 크기처럼 구체적인 정보를 넣습니다.",
    "광고 링크와 기능 버튼을 화면 읽기에서도 구분되게 합니다.",
    "광고는 기능 버튼과 떨어뜨려 둡니다.",
  ],
};
