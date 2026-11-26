import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "대부분 빠르지만 가끔 느려지는 요청",
    "스피너가 잠깐 나타났다 사라지는 깜빡임이 거슬릴 때",
    "필터나 탭 전환처럼 자주 반복되는 불러오기",
  ],
  whenNotToUse: [
    "항상 오래 걸리는 작업(처음부터 진행 상태를 보여 주기)",
    "버튼을 누른 직후 반응이 없으면 다시 누르게 되는 곳(버튼 상태를 바로 바꾸기)",
    "레이아웃을 미리 잡아야 하는 목록(스켈레톤 사용)",
  ],
  alternatives: [
    { name: "스피너", slug: "spinner", reason: "기다림이 항상 눈에 띌 만큼 길 때" },
    { name: "스켈레톤", slug: "skeleton", reason: "불러올 내용의 자리를 미리 보여 줄 때" },
  ],
  accessibility: [
    '스피너는 role="status"와 "불러오는 중" 문구로 나타날 때만 읽힙니다.',
    "짧은 요청에서는 아무 알림도 하지 않아 스크린 리더 사용자도 불필요한 안내를 듣지 않습니다.",
    "최소 표시 시간으로 빠르게 깜빡이는 화면을 막습니다.",
    "회전은 동작 줄이기 설정에서 멈춥니다.",
  ],
};
