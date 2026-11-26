import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "SPA에서 다음 화면의 데이터를 불러오는 동안",
    "기존 화면을 지우지 않고 기다리게 할 때",
    "대부분 1~2초 안에 끝나는 이동",
  ],
  whenNotToUse: [
    "화면 일부만 새로 불러올 때(스켈레톤이나 스피너 사용)",
    "진행률을 정확히 알 수 있을 때(진행 바 사용)",
    "몇 초 이상 걸리는 작업(진행 알림 사용)",
  ],
  alternatives: [
    { name: "스켈레톤", slug: "skeleton", reason: "새 화면의 자리를 먼저 그릴 때" },
    { name: "지연 표시 로더", slug: "delayed-spinner", reason: "영역 안에서 기다릴 때" },
    { name: "프로그레스 바", slug: "progress-bar", reason: "진행률을 알 때" },
  ],
  accessibility: [
    "막대는 이름이 있는 progressbar이고, 보이지 않을 때는 aria-hidden입니다.",
    "불러오는 영역에 aria-busy를 걸어 바뀌는 중임을 알립니다.",
    "짧은 지연 뒤에만 나타나 빠른 이동에서 깜빡이지 않습니다.",
    "움직임은 transform만 쓰고 동작 줄이기 설정에서 전환을 끕니다.",
  ],
};
