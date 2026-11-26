import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const commentThreadPattern: Pattern = {
  slug: "comment-thread",
  name: "Comment Thread",
  nameKo: "댓글 스레드",
  aliases: ["답글", "대댓글", "replies", "threaded comments"],
  category: "reaction-share",
  summary: "답글이 달리는 대화",
  description:
    "댓글 아래에 한 단계까지 답글을 들여 써 보여 주는 패턴입니다. 답글은 답글 2개 보기 뒤에 접어 두고, 답글 버튼을 누르면 그 댓글 바로 아래에 입력칸이 열립니다.",
  whenToUse: [
    "게시물, 문서의 댓글",
    "누가 누구에게 답했는지 알아야 할 때",
    "댓글이 많아 접어 둘 필요가 있을 때",
  ],
  whenNotToUse: [
    "실시간 대화(채팅 사용)",
    "답글의 답글이 깊어지는 토론(평평한 목록과 인용 사용)",
    "댓글이 거의 없는 화면",
  ],
  alternatives: [
    { name: "멘션", slug: "mention", reason: "답글 대신 사람을 부를 때" },
    { name: "아코디언", slug: "accordion", reason: "내용을 접고 펼칠 때" },
  ],
  accessibility: [
    "댓글마다 article이고 작성자 이름으로 이름을 붙입니다.",
    "답글 보기와 답글 버튼은 aria-expanded를 가집니다.",
    "답글 입력칸이 열리면 포커스가 갑니다.",
    "들여쓰기 외에 선으로도 답글을 구분합니다.",
  ],
  tags: [...BASE_TAGS, "article", "aria-expanded", "Nested list"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/comment-thread/CommentThreadDemo").then(
      (m) => m.CommentThreadDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/comment-thread/CommentThreadThumbnail").then(
      (m) => m.CommentThreadThumbnail,
    ),
  sources: [
    {
      fileName: "CommentThread.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/comment-thread/CommentThread.tsx?raw"),
    },
    {
      fileName: "CommentThreadDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/comment-thread/CommentThreadDemo.tsx?raw"),
    },
  ],
};
