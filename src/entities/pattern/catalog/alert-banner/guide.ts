import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "결제 실패, 계정 문제처럼 조치가 필요한 상태를 알릴 때",
    "마감 임박, 점검 예정처럼 기한이 있는 안내를 할 때",
    "페이지 전체에 영향을 주는 상태를 지속적으로 보여줄 때",
  ],
  whenNotToUse: [
    "방금 한 작업의 가벼운 결과를 알릴 때",
    "마케팅 메시지를 여러 개 겹쳐서 노출할 때",
    "특정 입력 필드에만 해당하는 오류일 때",
  ],
  alternatives: [
    { name: "토스트", slug: "toast", reason: "잠시 보여주면 되는 결과 안내" },
    { name: "인라인 오류", slug: "inline-validation", reason: "필드 단위 오류" },
    { name: "모달 다이얼로그", slug: "modal-dialog", reason: "즉시 결정이 필요한 경우" },
  ],
  accessibility: [
    '오류 톤은 role="alert", 나머지는 role="status"로 심각도에 맞게 알립니다.',
    "색상뿐 아니라 아이콘과 제목 문구로 심각도를 함께 전달합니다.",
    "닫기 버튼은 아이콘 전용이므로 aria-label을 제공합니다.",
    "텍스트와 배경의 명도 대비를 4.5:1 이상으로 유지합니다.",
  ],
};
