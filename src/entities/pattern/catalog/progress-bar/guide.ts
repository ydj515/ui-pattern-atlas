import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["총 작업량이 알려진 업로드나 처리 상태를 표시할 때"],
  whenNotToUse: ["현재 진행률을 측정할 수 없는 요청"],
  alternatives: [{ name: "스피너", slug: "spinner", reason: "진행률을 계산할 수 없는 짧은 작업" }],
  accessibility: ["네이티브 progress에 이름을 부여하고, 완료 시 텍스트로도 알립니다."],
};
