import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const tabsPattern: Pattern = {
  slug: "tabs",
  name: "Tabs",
  nameKo: "탭",
  aliases: ["탭 메뉴", "탭바", "tab bar", "tablist"],
  category: "disclosure",
  summary: "같은 화면 안에서 관련 콘텐츠를 나눠 전환하는 메뉴",
  description:
    "관련 있는 콘텐츠를 여러 패널로 나누고, 한 번에 하나의 패널만 보여주는 패턴입니다. 페이지를 이동하지 않고도 같은 수준의 정보 사이를 빠르게 전환할 수 있습니다.",
  whenToUse: [
    "상세 정보, 리뷰, 배송 안내처럼 같은 대상의 다른 측면을 나눌 때",
    "사용자가 한 번에 한 그룹의 정보만 보면 될 때",
    "탭이 2~6개 정도로 라벨이 짧을 때",
  ],
  whenNotToUse: [
    "사용자가 여러 패널의 내용을 동시에 비교해야 할 때",
    "순서대로 진행해야 하는 단계일 때",
    "탭 수가 많아 가로 스크롤이 길어질 때",
  ],
  alternatives: [
    {
      name: "세그먼트 컨트롤",
      slug: "segmented-control",
      reason: "같은 데이터의 보기 방식 전환",
    },
    { name: "아코디언", slug: "accordion", reason: "모바일에서 여러 섹션을 세로로 나열" },
  ],
  accessibility: [
    'role="tablist", "tab", "tabpanel"과 aria-selected, aria-controls로 관계를 연결합니다.',
    "roving tabIndex로 탭 목록은 Tab 키 한 번에 진입하고, 좌우 방향키로 이동합니다.",
    "Home/End 키로 첫 번째와 마지막 탭으로 이동합니다.",
    "패널에 tabIndex=0을 주어 키보드로 패널 내용에 바로 접근할 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadPreview: () => import("@/entities/pattern/catalog/tabs/TabsDemo").then((m) => m.TabsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/tabs/TabsThumbnail").then((m) => m.TabsThumbnail),
  sources: [
    {
      fileName: "Tabs.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tabs/Tabs.tsx?raw"),
    },
    {
      fileName: "TabsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tabs/TabsDemo.tsx?raw"),
    },
  ],
};
