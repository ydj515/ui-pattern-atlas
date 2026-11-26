import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "건물의 골조처럼 콘텐츠의 뼈대(skeleton)만 먼저 그려 둔다는 뜻이에요. 2013년 루크 로블르스키(Luke Wroblewski)가 모바일 앱 Polar를 만들며 스피너 대신 쓰는 방법으로 '스켈레톤 스크린'을 소개하면서 이름이 퍼졌어요.",
  whenToUse: [
    "카드, 목록, 프로필처럼 모양이 예측 가능한 콘텐츠를 불러올 때",
    "로딩 시간이 대략 0.3~3초 정도일 때",
    "페이지 첫 진입에서 레이아웃 이동을 줄이고 싶을 때",
  ],
  whenNotToUse: [
    "파일 업로드처럼 진행률을 알 수 있는 작업일 때(프로그레스 바 사용)",
    "버튼 클릭 후 짧은 처리처럼 작은 영역의 대기일 때(스피너 사용)",
    "실제 레이아웃과 전혀 다른 모양의 자리 표시일 때",
  ],
  alternatives: [
    { name: "Spinner", reason: "작은 영역이나 짧은 처리" },
    { name: "Progress Bar", reason: "진행률을 알 수 있는 긴 작업" },
    { name: "빈 화면", slug: "empty-state", reason: "불러온 결과가 없을 때" },
  ],
  accessibility: [
    '회색 블록은 aria-hidden으로 숨기고, 대신 role="status"로 로딩 문구를 한 번 읽어줍니다.',
    "로딩 중인 영역에 aria-busy를 설정합니다.",
    "pulse 애니메이션은 prefers-reduced-motion에서 멈춥니다.",
  ],
};
