import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const mentionPattern: Pattern = {
  slug: "mention",

  name: "Mention",
  nameKo: "멘션",
  aliases: ["@ 언급", "사람 태그", "at mention", "user mention"],
  category: "reaction-share",
  summary: "@로 사람 부르기",
  description:
    "댓글에 @를 입력하면 이름이 맞는 사람 목록이 뜨고, 골라서 @이름을 넣는 입력입니다. 목록이 떠 있는 동안에도 포커스는 입력칸에 남아 계속 쓸 수 있습니다.",
  tags: [...BASE_TAGS, "combobox", "listbox", "aria-activedescendant"],
  loadGuide: () => import("@/entities/pattern/catalog/mention/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/mention/MentionInputDemo").then((m) => m.MentionInputDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/mention/MentionInputThumbnail").then(
      (m) => m.MentionInputThumbnail,
    ),
  sources: [
    {
      fileName: "MentionInput.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/mention/MentionInput.tsx?raw"),
    },
    {
      fileName: "MentionInputDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/mention/MentionInputDemo.tsx?raw"),
    },
  ],
};
