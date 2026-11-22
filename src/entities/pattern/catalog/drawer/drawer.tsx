import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { DrawerThumbnail } from "@/entities/pattern/catalog/drawer/DrawerThumbnail";

export const drawerPattern: Pattern = {
  slug: "drawer",
  name: "Drawer",
  nameKo: "드로어",
  aliases: ["사이드 패널", "슬라이드 패널", "side sheet", "off-canvas", "필터 패널"],
  category: "overlay",
  summary: "화면 가장자리에서 밀려 나오는 작업 패널",
  description:
    "화면 가장자리에서 패널을 열어, 지금 보고 있는 화면을 유지한 채 필터나 상세 정보, 비교적 긴 입력을 처리하는 패턴입니다.",
  whenToUse: [
    "필터, 설정처럼 여러 항목을 조정한 뒤 한 번에 적용할 때",
    "목록을 유지한 채 선택한 항목의 상세 정보를 보여줄 때",
    "모달에 담기에는 긴 입력 폼이 필요할 때",
  ],
  whenNotToUse: [
    "예/아니오 같은 단순한 확인만 필요할 때",
    "사용자가 패널과 본문을 동시에 계속 조작해야 할 때",
    "주요 내비게이션을 모바일 외 환경에서도 숨겨 버릴 때",
  ],
  alternatives: [
    { name: "Modal Dialog", slug: "modal-dialog", reason: "짧고 중요한 결정" },
    { name: "Accordion", slug: "accordion", reason: "페이지 안에서 펼쳐 보는 설정" },
    { name: "Bottom Sheet", reason: "모바일에서 한 손으로 다루는 선택지" },
  ],
  accessibility: [
    "모달 <dialog>로 열어 포커스를 패널 안에 가두고 배경을 inert 상태로 만듭니다.",
    "명확한 닫기 버튼(aria-label)과 Esc 키, 배경 클릭으로 닫을 수 있습니다.",
    "제목을 aria-labelledby로 연결해 스크린 리더가 패널의 목적을 읽습니다.",
    "적용 전까지는 임시 값을 사용해, 닫으면 변경 사항이 취소된다는 점을 명확히 합니다.",
  ],
  tags: [...BASE_TAGS, "dialog element"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/drawer/DrawerDemo").then((m) => m.DrawerDemo),
  Thumbnail: DrawerThumbnail,
  sources: [
    {
      fileName: "Drawer.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/drawer/Drawer.tsx?raw"),
    },
    {
      fileName: "DrawerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/drawer/DrawerDemo.tsx?raw"),
    },
  ],
};
