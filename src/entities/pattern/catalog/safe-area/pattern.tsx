import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SafeAreaThumbnail } from "@/entities/pattern/catalog/safe-area/SafeAreaThumbnail";

export const safeAreaPattern: Pattern = {
  slug: "safe-area",
  name: "Safe Area",
  nameKo: "안전 영역",
  aliases: ["노치 여백", "홈 바 여백", "safe area insets", "viewport-fit"],
  category: "layout",
  summary: "노치와 홈 바를 피하는 여백",
  description:
    "휴대폰의 노치, 둥근 모서리, 홈 표시줄에 내용이 가리지 않도록 env(safe-area-inset-*)만큼 여백을 주는 패턴입니다.",
  whenToUse: [
    "화면 끝까지 쓰는 모바일 웹, PWA",
    "위아래에 고정된 헤더와 입력창이 있을 때",
    "가로 모드에서 옆 노치를 피해야 할 때",
  ],
  whenNotToUse: [
    "데스크톱 전용 화면",
    "브라우저 주소창이 늘 보이는 일반 페이지(이미 안전합니다)",
    "모든 요소에 무조건 적용할 때(필요한 가장자리에만)",
  ],
  alternatives: [
    {
      name: "하단 고정 버튼",
      slug: "sticky-action-bar",
      reason: "아래 여백을 함께 처리하는 버튼 막대",
    },
  ],
  accessibility: [
    "viewport 메타에 viewport-fit=cover를 넣어야 값이 채워집니다.",
    "max()로 최소 여백을 둬 노치가 없는 기기에서도 답답하지 않게 합니다.",
    "필요한 가장자리에만 여백을 줘 내용 공간을 아낍니다.",
    "가로 모드에서는 left와 right 여백도 확인합니다.",
  ],
  tags: [...BASE_TAGS, "env()", "Mobile"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/safe-area/SafeAreaDemo").then((m) => m.SafeAreaDemo),
  Thumbnail: SafeAreaThumbnail,
  sources: [
    {
      fileName: "SafeArea.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/safe-area/SafeArea.tsx?raw"),
    },
    {
      fileName: "SafeAreaDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/safe-area/SafeAreaDemo.tsx?raw"),
    },
  ],
};
