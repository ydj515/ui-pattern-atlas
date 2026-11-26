import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const backNavigationPattern: Pattern = {
  slug: "back-navigation",
  name: "Back Navigation",
  nameKo: "뒤로 가기",
  aliases: ["목록으로", "스크롤 복원", "back button", "scroll restoration"],
  category: "navigation",
  summary: "이전 위치로 돌아가고 목록의 스크롤 위치를 복원",
  description:
    "상세 화면에서 목록으로 돌아올 때, 보던 스크롤 위치와 열었던 항목을 그대로 되살리는 패턴입니다. 다시 처음부터 찾지 않고 이어서 볼 수 있습니다.",
  whenToUse: [
    "목록에서 항목을 열고 돌아오기를 반복하는 화면",
    "목록이 길어 위치를 잃기 쉬울 때",
    "SPA에서 화면을 바꿔 그릴 때",
  ],
  whenNotToUse: [
    "돌아갈 곳이 여러 갈래라 이름을 붙이기 어려울 때(브라우저 뒤로 가기에 맡기기)",
    "목록 내용이 그사이 크게 바뀌는 경우(새로 고침 안내)",
    "한 화면짜리 흐름",
  ],
  alternatives: [{ name: "브레드크럼", slug: "breadcrumb", reason: "상위 단계로 올라갈 때" }],
  accessibility: [
    '뒤로 버튼은 "목록으로 돌아가기"처럼 어디로 가는지 이름에 담습니다.',
    "돌아오면 스크롤 위치를 되살리고 열었던 항목으로 포커스를 옮깁니다.",
    "브라우저 뒤로 가기와 같은 결과가 되도록 주소 기록과 함께 쓰는 것이 좋습니다.",
    "위치를 되살릴 때 화면이 움직이지 않게 preventScroll로 포커스합니다.",
  ],
  tags: [...BASE_TAGS, "Scroll restoration", "Focus management"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/back-navigation/BackNavigationDemo").then(
      (m) => m.BackNavigationDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/back-navigation/BackNavigationThumbnail").then(
      (m) => m.BackNavigationThumbnail,
    ),
  sources: [
    {
      fileName: "BackNavigation.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/back-navigation/BackNavigation.tsx?raw"),
    },
    {
      fileName: "BackNavigationDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/back-navigation/BackNavigationDemo.tsx?raw"),
    },
  ],
};
