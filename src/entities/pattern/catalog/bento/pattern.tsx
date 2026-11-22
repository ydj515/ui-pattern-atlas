import { type Pattern } from "@/entities/pattern/model/pattern";
import { BentoThumbnail } from "@/entities/pattern/catalog/bento/BentoThumbnail";

export const bentoPattern: Pattern = {
  slug: "bento",
  kind: "concept",
  name: "Bento",
  nameKo: "벤토",
  aliases: ["앱 목록 아이콘", "격자 아이콘", "bento menu", "app grid"],
  category: "icon-names",
  summary: "사각형 아홉 개 격자, 앱 목록",
  description:
    "작은 사각형 아홉 개를 3×3 격자로 놓은 아이콘으로, 칸이 나뉜 도시락(벤토)처럼 보여 붙은 이름입니다. 같은 회사의 다른 앱이나 서비스로 넘어가는 목록을 엽니다.",
  whenToUse: [
    "여러 앱을 함께 쓰는 업무 도구, 계정 서비스",
    "앱 사이를 오가는 전용 메뉴",
    "상단 오른쪽처럼 정해진 자리",
  ],
  whenNotToUse: [
    "한 앱 안의 메뉴(햄버거나 탭 사용)",
    "격자 보기 전환 버튼(뜻이 겹쳐 헷갈림)",
    "앱이 두세 개뿐일 때",
  ],
  alternatives: [
    { name: "와플", slug: "waffle", reason: "둥근 점 아홉 개로 된 앱 목록" },
    { name: "햄버거", slug: "hamburger", reason: "한 앱 안의 메뉴" },
  ],
  accessibility: [
    "아이콘 버튼에 앱 목록이라는 이름을 붙입니다.",
    "열린 목록은 role=dialog이고 Esc로 닫힙니다.",
    "앱마다 글자 이름을 함께 씁니다.",
    "열리면 첫 앱에 포커스가 갑니다.",
  ],
  tags: ["아이콘 이름", "앱 전환"],
  loadPreview: () => import("@/entities/pattern/catalog/bento/BentoDemo").then((m) => m.BentoDemo),
  Thumbnail: BentoThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/bento/BentoDemo.tsx?raw"),
};
