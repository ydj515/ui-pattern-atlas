import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "증빙, 이력서, 사진처럼 파일을 받아야 할 때",
    "여러 파일을 한 번에 올릴 때",
    "형식과 크기 제한이 있을 때",
  ],
  whenNotToUse: [
    "사진 한 장을 바로 자르거나 다듬어야 할 때(이미지 자르기와 함께 쓰기)",
    "아주 큰 파일(진행 알림과 이어 올리기가 필요)",
    "휴대폰에서 카메라 촬영이 주된 경우(capture 속성 고려)",
  ],
  alternatives: [
    {
      name: "진행 알림",
      slug: "progress-toast",
      reason: "올리는 데 오래 걸릴 때 진행률 보여 주기",
    },
  ],
  accessibility: [
    "끌어다 놓기 영역은 실제 file input을 감싼 label이라 키보드와 스크린 리더로 버튼처럼 씁니다.",
    "끌어다 놓을 때 테두리와 배경이 바뀌어 놓을 곳을 알려 줍니다.",
    '거절된 파일은 role="status"로 이유를 알립니다.',
    '목록의 삭제 버튼은 "영수증.jpg 삭제"처럼 파일 이름을 포함합니다.',
  ],
};
