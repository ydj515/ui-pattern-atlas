import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TrashThumbnail } from "@/entities/pattern/catalog/trash/TrashThumbnail";

export const trashPattern: Pattern = {
  slug: "trash",
  name: "Trash",
  nameKo: "휴지통",
  aliases: ["휴지통 복원", "최근 삭제한 항목", "recycle bin", "recently deleted", "soft delete"],
  category: "risky-actions",
  summary: "지운 항목을 정해진 기간 동안 되살릴 수 있는 곳",
  description:
    "지운 항목을 바로 없애지 않고 정해진 기간 동안 모아 두는 목록입니다. 항목마다 영구 삭제까지 남은 날을 적고 곧 사라질 항목은 색으로 함께 알리며, 복원 한 번으로 원래 자리로 돌려놓습니다.",
  whenToUse: [
    "삭제를 묻지 않고 바로 처리하고 싶을 때",
    "실수로 지운 것을 나중에 찾을 수 있게 할 때",
    "보관 기간이 정해진 데이터",
  ],
  whenNotToUse: [
    "개인정보처럼 바로 지워야 하는 데이터",
    "임시 파일처럼 되살릴 일이 없는 항목",
    "남은 기간을 알리지 않고 조용히 비울 때",
  ],
  alternatives: [
    { name: "되돌리기", slug: "undo", reason: "지운 직전에만 되돌릴 때" },
    { name: "입력해서 확인", slug: "type-to-confirm", reason: "되돌릴 수 없는 삭제를 확인할 때" },
  ],
  accessibility: [
    "복원 버튼 이름에 항목 이름을 넣어 어느 줄인지 읽어 줍니다.",
    "남은 날은 색과 함께 글자로 적습니다.",
    '복원 결과는 role="status"로 읽어 줍니다.',
  ],
  tags: [...BASE_TAGS, "soft delete", "role=status"],
  loadPreview: () => import("@/entities/pattern/catalog/trash/TrashDemo").then((m) => m.TrashDemo),
  Thumbnail: TrashThumbnail,
  sources: [
    {
      fileName: "Trash.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/trash/Trash.tsx?raw"),
    },
    {
      fileName: "TrashDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/trash/TrashDemo.tsx?raw"),
    },
  ],
};
