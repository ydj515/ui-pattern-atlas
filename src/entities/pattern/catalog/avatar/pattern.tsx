import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const avatarPattern: Pattern = {
  slug: "avatar",

  name: "Avatar",
  nameKo: "아바타",
  aliases: ["프로필 사진", "사용자 이미지", "profile picture", "initials"],
  category: "indicator",
  summary: "사람을 나타내는 사진이나 이니셜",
  description:
    "사람을 작은 원 안의 사진으로 나타내고, 사진이 없거나 불러오지 못하면 이름의 첫 글자로 대신하는 패턴입니다. 같은 사람은 늘 같은 색으로 보입니다.",
  tags: [...BASE_TAGS, "Images", "Fallback"],
  loadGuide: () => import("@/entities/pattern/catalog/avatar/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/avatar/AvatarDemo").then((m) => m.AvatarDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/avatar/AvatarThumbnail").then((m) => m.AvatarThumbnail),
  sources: [
    {
      fileName: "Avatar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/avatar/Avatar.tsx?raw"),
    },
    {
      fileName: "AvatarDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/avatar/AvatarDemo.tsx?raw"),
    },
  ],
};
