import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { MegaMenuThumbnail } from "@/entities/pattern/catalog/mega-menu/MegaMenuThumbnail";

export const megaMenuPattern: Pattern = {
  slug: "mega-menu",
  name: "Mega Menu",
  nameKo: "메가 메뉴",
  aliases: ["확장 메뉴", "드롭다운 내비게이션", "mega dropdown", "flyout menu"],
  category: "navigation",
  summary: "펼치면 여러 열이 나오는 메뉴",
  description:
    "상단 메뉴 항목을 누르면 여러 열로 정리한 하위 링크가 넓게 펼쳐지는 패턴입니다. 제품과 솔루션처럼 하위 페이지가 많은 사이트에서 한 번에 구조를 보여 줍니다.",
  whenToUse: [
    "하위 페이지가 많은 기업, 쇼핑 사이트",
    "하위 링크를 주제별 열로 묶을 수 있을 때",
    "링크마다 짧은 설명이 도움이 될 때",
  ],
  whenNotToUse: [
    "하위 페이지가 몇 개뿐일 때(드롭다운 메뉴로 충분)",
    "작은 화면(햄버거 메뉴 사용)",
    "마우스를 올리기만 해도 열리게 할 때(실수로 열려 방해됨)",
  ],
  alternatives: [
    { name: "상단 내비게이션", slug: "navbar", reason: "하위 메뉴가 없을 때" },
    { name: "드롭다운 메뉴", slug: "dropdown-menu", reason: "몇 개의 선택지만 있을 때" },
  ],
  accessibility: [
    "메뉴 항목은 aria-expanded 버튼(디스클로저)이고 ARIA menu 역할을 쓰지 않아, 안의 링크를 Tab으로 오갑니다.",
    "열은 이름이 있는 section으로 묶습니다.",
    "Esc를 누르면 닫히고 포커스가 항목 버튼으로 돌아옵니다.",
    "바깥을 누르면 닫힙니다.",
  ],
  tags: [...BASE_TAGS, "Disclosure", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/mega-menu/MegaMenuDemo").then((m) => m.MegaMenuDemo),
  Thumbnail: MegaMenuThumbnail,
  sources: [
    {
      fileName: "MegaMenu.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/mega-menu/MegaMenu.tsx?raw"),
    },
    {
      fileName: "MegaMenuDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/mega-menu/MegaMenuDemo.tsx?raw"),
    },
  ],
};
