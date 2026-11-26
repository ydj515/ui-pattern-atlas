import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const fileAttachmentPattern: Pattern = {
  slug: "file-attachment",

  name: "File Attachment",
  nameKo: "파일 첨부",
  aliases: ["첨부 파일", "파일 올리기", "attachments", "upload chips"],
  category: "ai",
  summary: "보낼 자료를 첨부하고 확인하거나 빼기",
  description:
    "질문과 함께 보낼 파일을 입력창 위에 칩으로 보여 주는 패턴입니다. 이름, 크기, 올리는 진행률이 보이고 보내기 전에 뺄 수 있으며, 보낼 수 없는 파일은 칩에서 바로 이유를 알려 줍니다.",
  tags: [...BASE_TAGS, "File input", "Progress", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/file-attachment/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/file-attachment/AttachmentTrayDemo").then(
      (m) => m.AttachmentTrayDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/file-attachment/AttachmentTrayThumbnail").then(
      (m) => m.AttachmentTrayThumbnail,
    ),
  sources: [
    {
      fileName: "AttachmentTray.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/file-attachment/AttachmentTray.tsx?raw"),
    },
    {
      fileName: "AttachmentTrayDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/file-attachment/AttachmentTrayDemo.tsx?raw"),
    },
  ],
};
