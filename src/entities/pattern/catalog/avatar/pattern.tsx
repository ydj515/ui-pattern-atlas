import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { AvatarThumbnail } from "@/entities/pattern/catalog/avatar/AvatarThumbnail";

export const avatarPattern: Pattern = {
  slug: "avatar",
  name: "Avatar",
  nameKo: "아바타",
  aliases: ["프로필 사진", "사용자 이미지", "profile picture", "initials"],
  category: "indicator",
  summary: "사람을 나타내는 사진이나 이니셜",
  description:
    "사람을 작은 원 안의 사진으로 나타내고, 사진이 없거나 불러오지 못하면 이름의 첫 글자로 대신하는 패턴입니다. 같은 사람은 늘 같은 색으로 보입니다.",
  whenToUse: [
    "댓글, 담당자, 대화 상대처럼 사람이 등장하는 곳",
    "사진이 없는 사람도 구분해야 할 때",
    "여러 크기로 쓰일 때",
  ],
  whenNotToUse: [
    "사람이 아닌 대상(아이콘 사용)",
    "이름이 꼭 보여야 할 때(이름 글자와 함께 쓰기)",
    "사진이 신원 확인에 쓰일 때(더 크게 보여 주기)",
  ],
  alternatives: [
    { name: "아바타 그룹", slug: "avatar-group", reason: "여러 사람을 함께 보여 줄 때" },
    { name: "접속 상태", slug: "presence", reason: "온라인 여부까지 보여 줄 때" },
  ],
  accessibility: [
    "사진의 alt와 이니셜의 aria-label 모두 이름을 씁니다.",
    "사진을 불러오지 못하면 onError로 이니셜로 바꿔 깨진 이미지가 남지 않습니다.",
    "이니셜 글자는 aria-hidden이라 이름이 두 번 읽히지 않습니다.",
    "이름에서 색을 정해 같은 사람은 늘 같은 색입니다.",
  ],
  tags: [...BASE_TAGS, "Images", "Fallback"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/avatar/AvatarDemo").then((m) => m.AvatarDemo),
  Thumbnail: AvatarThumbnail,
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
