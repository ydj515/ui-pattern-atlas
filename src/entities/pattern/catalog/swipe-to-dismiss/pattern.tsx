import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SwipeToDismissThumbnail } from "@/entities/pattern/catalog/swipe-to-dismiss/SwipeToDismissThumbnail";

export const swipeToDismissPattern: Pattern = {
  slug: "swipe-to-dismiss",
  name: "Swipe to Dismiss",
  nameKo: "끌어서 닫기",
  aliases: ["아래로 밀어 닫기", "시트 닫기", "drag to dismiss", "pull down to close"],
  category: "gesture",
  summary: "시트를 아래로 끌어 닫기",
  description:
    "바텀 시트의 손잡이를 아래로 끌면 시트가 손가락을 따라 내려가고, 일정 거리를 넘기면 닫히는 패턴입니다. 덜 끌고 놓으면 원래 자리로 돌아가 실수로 닫히지 않습니다.",
  whenToUse: [
    "공유, 옵션처럼 잠깐 띄우는 모바일 시트",
    "한 손으로 닫기 쉬워야 할 때",
    "닫아도 잃는 내용이 없을 때",
  ],
  whenNotToUse: [
    "작성 중인 내용이 있는 시트(닫기 전에 확인)",
    "시트 안에 세로 스크롤 목록이 길 때(손잡이에만 제스처)",
    "데스크톱 대화상자",
  ],
  alternatives: [
    { name: "바텀 시트", slug: "bottom-sheet", reason: "시트 자체의 구조와 높이" },
    { name: "모달 대화상자", slug: "modal-dialog", reason: "데스크톱이나 확인이 필요할 때" },
  ],
  accessibility: [
    "닫기 버튼과 Esc로도 닫을 수 있어 끌기가 유일한 방법이 아닙니다.",
    "닫히면 시트를 연 버튼으로 포커스를 돌려줍니다.",
    "끄는 영역은 손잡이로 한정해 시트 안의 스크롤을 막지 않습니다.",
    "동작 줄이기 설정에서는 되돌아가는 애니메이션을 끕니다.",
  ],
  tags: [...BASE_TAGS, "React", "Tailwind CSS", "Pointer Events", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/swipe-to-dismiss/SwipeToDismissDemo").then(
      (m) => m.SwipeToDismissDemo,
    ),
  Thumbnail: SwipeToDismissThumbnail,
  sources: [
    {
      fileName: "SwipeToDismiss.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/swipe-to-dismiss/SwipeToDismiss.tsx?raw"),
    },
    {
      fileName: "SwipeToDismissDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/swipe-to-dismiss/SwipeToDismissDemo.tsx?raw"),
    },
  ],
};
