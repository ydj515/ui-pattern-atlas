import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const avatarGroupPattern: Pattern = {
  slug: "avatar-group",
  name: "Avatar Group",
  nameKo: "아바타 그룹",
  aliases: ["참여자", "겹친 아바타", "avatar stack", "facepile"],
  category: "indicator",
  summary: "겹쳐 보이는 여러 사람",
  description:
    '여러 사람의 아바타를 겹쳐 놓고, 나머지는 "+3"처럼 숫자로 줄이는 패턴입니다. 좁은 자리에서도 누가 참여하는지 보여 줍니다.',
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
  tags: [...BASE_TAGS, "role=img", "Summary"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/avatar-group/AvatarGroupDemo").then(
      (m) => m.AvatarGroupDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/avatar-group/AvatarGroupThumbnail").then(
      (m) => m.AvatarGroupThumbnail,
    ),
  sources: [
    {
      fileName: "AvatarGroup.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/avatar-group/AvatarGroup.tsx?raw"),
    },
    {
      fileName: "AvatarGroupDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/avatar-group/AvatarGroupDemo.tsx?raw"),
    },
  ],
};
