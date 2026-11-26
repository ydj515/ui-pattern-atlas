import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "프로젝트 참여자, 공유한 사람, 좋아요 누른 사람",
    "자리가 좁아 몇 명만 보여 줄 때",
    "인원수가 중요한 정보일 때",
  ],
  whenNotToUse: [
    "모든 사람을 확인해야 할 때(목록 사용)",
    "한 사람만 보여 줄 때(아바타 사용)",
    "각 사람을 눌러 들어가야 할 때(목록이 더 쉽습니다)",
  ],
  alternatives: [
    { name: "아바타", slug: "avatar", reason: "한 사람을 보여 줄 때" },
    { name: "리스트", slug: "list", reason: "모든 사람을 보여 줄 때" },
  ],
  accessibility: [
    '그룹 전체가 하나의 이름("김하늘, 이도윤, 박서준 외 2명")을 가진 이미지라 하나씩 읽히지 않습니다.',
    '"+N" 숫자도 이름에 포함됩니다.',
    "흰 테두리로 겹친 얼굴을 구분합니다.",
    '추가 버튼은 "참여자 추가" 이름을 가집니다.',
  ],
};
