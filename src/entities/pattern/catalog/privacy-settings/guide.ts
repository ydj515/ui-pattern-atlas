import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "프로필이나 게시물을 다른 사람이 볼 수 있을 때",
    "개인정보 처리 선택권을 줘야 할 때",
    "내 데이터를 내려받게 해야 할 때",
  ],
  whenNotToUse: [
    "공개 여부가 없는 개인용 서비스",
    "선택지 이름만 두고 뜻을 적지 않을 때",
    "공개 쪽 선택지를 미리 체크해 둘 때(미리 체크된 동의 참고)",
  ],
  alternatives: [
    {
      name: "미리 체크된 동의",
      slug: "pre-checked-opt-in",
      reason: "동의를 미리 체크해 두는 다크 패턴",
    },
    { name: "설정 목록", slug: "settings-list", reason: "스위치 몇 개로 충분할 때" },
  ],
  accessibility: [
    "공개 범위는 라디오 버튼이고 설명을 aria-describedby로 이어 읽습니다.",
    '세부 설정은 role="switch"입니다.',
    '요청 결과는 role="status"로 읽어 줍니다.',
  ],
};
