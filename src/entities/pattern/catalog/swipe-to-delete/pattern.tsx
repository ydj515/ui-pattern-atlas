import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SwipeToDeleteThumbnail } from "@/entities/pattern/catalog/swipe-to-delete/SwipeToDeleteThumbnail";

export const swipeToDeletePattern: Pattern = {
  slug: "swipe-to-delete",
  name: "Swipe to Delete",
  nameKo: "스와이프 삭제",
  aliases: ["밀어서 삭제", "옆으로 밀기", "swipe action", "swipe to remove"],
  category: "gesture",
  summary: "행을 옆으로 밀어 지우기",
  description:
    "목록의 행을 왼쪽으로 밀면 뒤에 있던 삭제 버튼이 드러나고, 끝까지 길게 밀면 바로 지워지는 패턴입니다. 지운 직후 되돌리기를 보여 실수로 민 경우를 바로잡을 수 있게 합니다.",
  whenToUse: [
    "메일, 할 일처럼 항목을 자주 정리하는 모바일 목록",
    "행마다 삭제 버튼을 늘 보여 주기엔 자리가 좁을 때",
    "되돌리기를 함께 제공할 수 있을 때",
  ],
  whenNotToUse: [
    "되돌릴 수 없는 삭제(확인 대화상자 사용)",
    "마우스 중심의 데스크톱 표(행 끝의 버튼이나 선택 후 일괄 삭제)",
    "행 안에 가로로 스크롤되는 내용이 있을 때",
  ],
  alternatives: [
    { name: "실행 취소", slug: "undo", reason: "지운 뒤 바로 되돌릴 기회를 줄 때" },
    { name: "확인 대화상자", slug: "confirmation-dialog", reason: "되돌릴 수 없는 삭제일 때" },
  ],
  accessibility: [
    "삭제 버튼은 실제 button이라 Tab으로 가면 행이 밀리며 드러나 제스처 없이도 지울 수 있습니다.",
    "버튼 이름에 항목 이름을 넣어(회의록 정리 삭제) 화면 읽기 프로그램에서 무엇을 지우는지 알 수 있습니다.",
    "지운 결과와 되돌리기는 role=status로 알립니다.",
    "touch-action: pan-y로 세로 스크롤은 그대로 둡니다.",
  ],
  tags: [...BASE_TAGS, "React", "Tailwind CSS", "Pointer Events", "Undo"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/swipe-to-delete/SwipeToDeleteDemo").then(
      (m) => m.SwipeToDeleteDemo,
    ),
  Thumbnail: SwipeToDeleteThumbnail,
  sources: [
    {
      fileName: "SwipeToDelete.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/swipe-to-delete/SwipeToDelete.tsx?raw"),
    },
    {
      fileName: "SwipeToDeleteDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/swipe-to-delete/SwipeToDeleteDemo.tsx?raw"),
    },
  ],
};
