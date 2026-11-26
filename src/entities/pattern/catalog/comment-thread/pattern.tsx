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
  tags: [...BASE_TAGS, "article", "aria-expanded", "Nested list"],
  loadGuide: () => import("@/entities/pattern/catalog/comment-thread/guide").then((m) => m.guide),
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
