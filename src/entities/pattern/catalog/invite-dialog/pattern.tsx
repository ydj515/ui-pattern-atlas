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
  whenToUse: [
    "팀, 프로젝트에 사람을 데려올 때",
    "여러 명을 한 번에 초대할 때",
    "초대 링크와 함께 이메일 초대도 둘 때",
  ],
  whenNotToUse: [
    "링크만 주면 될 때(링크 복사 사용)",
    "연락처 전체를 가져와 대량으로 보낼 때",
    "초대받는 사람의 동의 없이 바로 추가할 때",
  ],
  alternatives: [
    { name: "링크 복사", slug: "copy-link", reason: "초대 링크를 나눠 줄 때" },
    { name: "태그 입력", slug: "tag-input", reason: "칩으로 값을 여러 개 넣는 입력" },
  ],
  accessibility: [
    "입력칸은 label과 연결되고 오류를 aria-describedby로 묶습니다.",
    "칩마다 이메일 이름이 들어간 빼기 버튼이 있습니다.",
    "Backspace로 마지막 칩을 지울 수 있습니다.",
    "보낼 사람이 없으면 버튼을 비활성으로 둡니다.",
  ],
  tags: [...BASE_TAGS, "Chips", "aria-invalid", "role=dialog"],
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
