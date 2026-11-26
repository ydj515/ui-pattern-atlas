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
  whenToUse: [
    "협업 도구의 댓글, 메시지",
    "특정 사람에게 알림을 보내야 할 때",
    "참여자가 정해진 공간",
  ],
  whenNotToUse: [
    "받는 사람을 고르는 폼(보내기와 전달 사용)",
    "공개 게시판처럼 누구나 부를 수 있으면 곤란한 곳",
    "사람 수가 너무 많아 이름이 겹칠 때",
  ],
  alternatives: [
    { name: "콤보박스", slug: "combobox", reason: "입력하며 목록에서 값을 고를 때" },
    { name: "태그 입력", slug: "tag-input", reason: "값을 칩으로 모을 때" },
  ],
  accessibility: [
    "입력칸이 combobox이고 목록은 listbox입니다.",
    "방향키로 이동하고 Enter나 Tab으로 넣으며 Esc로 닫습니다.",
    "현재 항목은 aria-activedescendant로 알립니다.",
    "찾는 사람이 없으면 글로 알려 줍니다.",
  ],
  tags: [...BASE_TAGS, "combobox", "listbox", "aria-activedescendant"],
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
