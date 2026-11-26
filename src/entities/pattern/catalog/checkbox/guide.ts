import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["메일 목록이나 약관에서 여러 개를 고를 수 있을 때"],
  whenNotToUse: ["누르자마자 설정을 켜거나 끄는 경우"],
  alternatives: [{ name: "스위치", slug: "switch", reason: "설정이 즉시 반영되는 켜기와 끄기" }],
  accessibility: [
    "네이티브 체크박스와 연결된 라벨을 사용합니다.",
    "일부 선택 상태는 indeterminate 속성으로 전달합니다.",
  ],
};
