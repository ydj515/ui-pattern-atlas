import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "글, 상품, 장소처럼 다른 사람에게 보낼 만한 콘텐츠",
    "모바일 사용자가 많을 때",
    "앱 공유 대상을 기기에 맡기고 싶을 때",
  ],
  whenNotToUse: [
    "특정 사람에게 보내는 기능(보내기와 전달 사용)",
    "주소만 복사하면 될 때(링크 복사 사용)",
    "공유할 주소가 없는 화면",
  ],
  alternatives: [
    { name: "링크 복사", slug: "copy-link", reason: "주소만 복사할 때" },
    { name: "QR 공유", slug: "qr-sharing", reason: "옆 사람에게 카메라로 넘길 때" },
  ],
  accessibility: [
    "공유 버튼은 글자와 아이콘을 함께 씁니다.",
    "대체 시트는 role=dialog이고 Esc로 닫힙니다.",
    "열리면 첫 대상에 포커스가 갑니다.",
    "기기 공유를 취소하면 대체 시트를 띄우지 않습니다.",
  ],
};
