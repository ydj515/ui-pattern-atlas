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
  tags: [...BASE_TAGS, "role=img", "Summary"],
  loadGuide: () => import("@/entities/pattern/catalog/avatar-group/guide").then((m) => m.guide),
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
