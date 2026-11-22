import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { AllCaughtUpThumbnail } from "@/entities/pattern/catalog/all-caught-up/AllCaughtUpThumbnail";

export const allCaughtUpPattern: Pattern = {
  slug: "all-caught-up",
  name: "All Caught Up",
  nameKo: "모두 완료",
  aliases: ["인박스 제로", "다 읽음", "할 일 없음", "inbox zero", "you're all set"],
  category: "empty-error",
  summary: "남은 할 일이나 새 알림이 없음을 안내",
  description:
    "알림이나 할 일을 모두 처리해 목록이 비었을 때, 무언가 빠졌다는 느낌 대신 끝냈다는 사실을 알려 주는 패턴입니다. 새 항목이 언제 어디에 나타나는지도 함께 안내합니다.",
  whenToUse: [
    "알림함, 받은편지함, 할 일 목록처럼 비우는 것이 목표인 목록",
    "사용자가 직접 처리해서 비운 경우",
    "새 항목이 생기는 시점을 알려 줄 수 있을 때",
  ],
  whenNotToUse: [
    "처음부터 항목이 없는 신규 사용자 화면(빈 상태 사용)",
    "방금 마지막 항목을 지워 되돌릴 기회가 필요할 때(삭제 직후 빈 화면 사용)",
    "불러오기에 실패해 비어 보이는 경우(오류 상태 사용)",
  ],
  alternatives: [
    { name: "빈 상태", slug: "empty-state", reason: "처음 써 보는 화면" },
    { name: "삭제 직후 빈 화면", slug: "emptied-state", reason: "마지막 항목을 지워서 비었을 때" },
  ],
  accessibility: [
    'role="status"로 목록이 다 비었다는 사실을 알립니다.',
    "체크 표시는 장식이라 aria-hidden으로 두고 제목으로 의미를 전합니다.",
    '확인 버튼 이름에 항목 제목을 넣어("배송이 시작됐어요 확인") 여러 버튼을 구분합니다.',
    "지난 알림 보기로 처리한 항목에 다시 돌아갈 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "role=status", "UX writing"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/all-caught-up/AllCaughtUpDemo").then(
      (m) => m.AllCaughtUpDemo,
    ),
  Thumbnail: AllCaughtUpThumbnail,
  sources: [
    {
      fileName: "AllCaughtUp.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/all-caught-up/AllCaughtUp.tsx?raw"),
    },
    {
      fileName: "AllCaughtUpDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/all-caught-up/AllCaughtUpDemo.tsx?raw"),
    },
  ],
};
