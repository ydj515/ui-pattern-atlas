import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const inviteDialogPattern: Pattern = {
  slug: "invite-dialog",

  name: "Invite Dialog",
  nameKo: "초대하기",
  aliases: ["팀원 초대", "멤버 초대", "invite members", "email invite"],
  category: "reaction-share",
  summary: "이메일로 함께 쓸 사람 초대",
  description:
    "이메일 주소를 입력하고 Enter나 쉼표를 누르면 지울 수 있는 칩이 되는 초대 창입니다. 형식이 틀린 주소는 칩이 되지 않고 오류를 보여 주며, 보내기 버튼에 몇 명을 초대하는지 적습니다.",
  tags: [...BASE_TAGS, "Chips", "aria-invalid", "role=dialog"],
  loadGuide: () => import("@/entities/pattern/catalog/invite-dialog/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/invite-dialog/InviteDialogDemo").then(
      (m) => m.InviteDialogDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/invite-dialog/InviteDialogThumbnail").then(
      (m) => m.InviteDialogThumbnail,
    ),
  sources: [
    {
      fileName: "InviteDialog.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/invite-dialog/InviteDialog.tsx?raw"),
    },
    {
      fileName: "InviteDialogDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/invite-dialog/InviteDialogDemo.tsx?raw"),
    },
  ],
};
