import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const fileUploadPattern: Pattern = {
  slug: "file-upload",

  name: "File Upload",
  nameKo: "파일 업로드",
  aliases: ["드래그 앤 드롭", "첨부 파일", "dropzone", "file input"],
  category: "special-input",
  summary: "끌어다 놓는 업로드 영역",
  description:
    "파일을 끌어다 놓거나 버튼으로 골라 올리는 패턴입니다. 올릴 수 있는 형식과 크기를 미리 알리고, 맞지 않는 파일은 이유와 함께 거절하며, 올린 파일은 목록에서 지울 수 있습니다.",
  tags: [...BASE_TAGS, "Drag and drop", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/file-upload/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/file-upload/FileUploadDemo").then((m) => m.FileUploadDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/file-upload/FileUploadThumbnail").then(
      (m) => m.FileUploadThumbnail,
    ),
  sources: [
    {
      fileName: "FileUpload.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/file-upload/FileUpload.tsx?raw"),
    },
    {
      fileName: "FileUploadDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/file-upload/FileUploadDemo.tsx?raw"),
    },
  ],
};
