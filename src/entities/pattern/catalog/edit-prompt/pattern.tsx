import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { EditPromptThumbnail } from "@/entities/pattern/catalog/edit-prompt/EditPromptThumbnail";

export const editPromptPattern: Pattern = {
  slug: "edit-prompt",
  name: "Edit Prompt",
  nameKo: "고쳐 묻기",
  aliases: ["질문 수정", "메시지 편집", "edit message", "rewrite prompt"],
  category: "ai",
  summary: "보낸 질문을 고쳐 그 지점부터 다시 묻기",
  description:
    "이미 보낸 질문을 그 자리에서 고쳐 다시 묻는 패턴입니다. 수정을 누르면 말풍선이 입력칸으로 바뀌고, 보내면 그 질문 다음부터 새로 답하며 그 사실을 한 줄로 알립니다.",
  whenToUse: [
    "질문을 조금 바꿔 다시 묻고 싶을 때",
    "오타나 빠진 조건을 고칠 때",
    "대화의 앞부분을 바꿔 다른 방향으로 갈 때",
  ],
  whenNotToUse: [
    "질문은 그대로 두고 답만 다시 받을 때(답변 다시 생성 사용)",
    "다른 사람이 쓴 메시지",
    "수정 기록이 남아야 하는 업무 대화",
  ],
  alternatives: [
    { name: "답변 다시 생성", slug: "regenerate-response", reason: "같은 질문으로 다시 받을 때" },
    { name: "채팅 화면", slug: "chat-interface", reason: "질문과 답이 쌓이는 대화 전체" },
  ],
  accessibility: [
    "수정을 누르면 입력칸으로 포커스가 가고 원래 글이 선택됩니다.",
    "취소나 Esc로 원래 상태와 수정 버튼으로 돌아갑니다.",
    "다시 답했다는 사실은 role=status로 알립니다.",
    "입력칸에는 질문 수정이라는 이름이 있습니다.",
  ],
  tags: [...BASE_TAGS, "Inline edit", "Focus management", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/edit-prompt/EditPromptDemo").then((m) => m.EditPromptDemo),
  Thumbnail: EditPromptThumbnail,
  sources: [
    {
      fileName: "EditPrompt.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/edit-prompt/EditPrompt.tsx?raw"),
    },
    {
      fileName: "EditPromptDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/edit-prompt/EditPromptDemo.tsx?raw"),
    },
  ],
};
