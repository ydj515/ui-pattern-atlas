import { type Pattern } from "@/entities/pattern/model/pattern";
import { KebabThumbnail } from "@/entities/pattern/catalog/kebab/KebabThumbnail";

export const kebabPattern: Pattern = {
  slug: "kebab",
  kind: "concept",
  name: "Kebab ⋮",
  nameKo: "케밥",
  aliases: ["세로 점 세 개", "더보기 아이콘", "kebab menu", "vertical ellipsis"],
  category: "icon-names",
  summary: "세로 점 세 개, 항목별 더보기",
  description:
    "점 세 개를 세로로 놓은 아이콘으로, 꼬치에 꿴 케밥처럼 보여 붙은 이름입니다. 목록의 각 행 끝에 두고 그 항목에만 해당하는 이름 바꾸기, 삭제 같은 동작을 모아 둡니다.",
  whenToUse: [
    "목록이나 카드마다 부가 동작이 있을 때",
    "자주 쓰지 않는 동작을 숨길 때",
    "안드로이드 앱의 툴바",
  ],
  whenNotToUse: [
    "주요 동작(눈에 보이는 버튼으로 두기)",
    "동작이 하나뿐일 때(그 동작을 바로 버튼으로)",
    "가로 점 세 개와 섞어 쓸 때(한 서비스에서 하나로 통일)",
  ],
  alternatives: [
    { name: "미트볼", slug: "meatballs", reason: "가로 점 세 개로 된 더보기" },
    { name: "드롭다운 메뉴", slug: "dropdown-menu", reason: "메뉴 자체의 구조" },
  ],
  accessibility: [
    "버튼 이름에 항목 이름을 넣어(회의록.pdf 더 보기) 어느 행의 메뉴인지 알립니다.",
    "aria-haspopup=menu와 aria-expanded를 둡니다.",
    "메뉴가 열리면 첫 항목에 포커스가 갑니다.",
    "누르는 영역은 32px 이상으로 둡니다.",
  ],
  tags: ["아이콘 이름", "더보기"],
  loadPreview: () => import("@/entities/pattern/catalog/kebab/KebabDemo").then((m) => m.KebabDemo),
  Thumbnail: KebabThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/kebab/KebabDemo.tsx?raw"),
};
