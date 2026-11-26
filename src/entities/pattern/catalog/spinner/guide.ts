import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["새로고침이나 단일 요청이 처리되는 동안"],
  whenNotToUse: ["완료 비율을 계산할 수 있는 업로드나 다운로드"],
  alternatives: [
    { name: "스켈레톤", slug: "skeleton", reason: "불러올 콘텐츠의 구조를 이미 알 때" },
  ],
  accessibility: [
    "아이콘의 회전과 별도로 실제 대기 문구를 상태로 읽습니다.",
    "동작 줄이기 설정에서는 아이콘이 회전하지 않습니다.",
  ],
};
