import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "사진, 파일을 옆 사람의 기기로 보낼 때",
    "인터넷 없이 가까이서 보낼 때",
    "받는 사람이 수락해야 할 때",
  ],
  whenNotToUse: [
    "멀리 있는 사람(보내기와 전달 사용)",
    "기기 목록을 앱이 알 수 없는 웹 환경에서 흉내만 낼 때",
    "수락 없이 바로 보내는 설계",
  ],
  alternatives: [
    { name: "QR 공유", slug: "qr-sharing", reason: "카메라로 링크를 넘길 때" },
    { name: "공유 시트", slug: "share-sheet", reason: "기기 공유 기능을 그대로 쓸 때" },
  ],
  accessibility: [
    "찾는 중이라는 안내는 aria-live로 알립니다.",
    "기기 버튼마다 이름이 있고 상태를 aria-describedby로 연결합니다.",
    "기다리는 동안 다른 기기 버튼을 비활성으로 둡니다.",
    "나타나는 효과는 동작 줄이기에서 생략합니다.",
  ],
};
