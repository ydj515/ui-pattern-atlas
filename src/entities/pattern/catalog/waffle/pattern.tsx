import { type Pattern } from "@/entities/pattern/model/pattern";
import { WaffleThumbnail } from "@/entities/pattern/catalog/waffle/WaffleThumbnail";

export const wafflePattern: Pattern = {
  slug: "waffle",
  kind: "concept",
  name: "Waffle",
  nameKo: "와플",
  aliases: ["점 격자 아이콘", "앱 런처", "waffle menu", "app launcher"],
  category: "icon-names",
  summary: "둥근 점 아홉 개 격자, 앱 목록",
  description:
    "둥근 점 아홉 개를 3×3 격자로 놓은 아이콘으로, 와플의 오목한 칸처럼 보여 붙은 이름입니다. 벤토와 같이 여러 앱 사이를 오가는 목록을 열며, 서비스마다 둘 중 하나를 씁니다.",
  whenToUse: [
    "여러 앱을 묶은 서비스의 앱 전환",
    "왼쪽 위처럼 정해진 자리",
    "앱 이름과 아이콘을 함께 보여 줄 때",
  ],
  whenNotToUse: ["한 앱 안의 메뉴", "벤토와 함께 섞어 쓸 때", "앱이 두세 개뿐일 때"],
  alternatives: [
    { name: "벤토", slug: "bento", reason: "사각형 아홉 개로 된 앱 목록" },
    { name: "햄버거", slug: "hamburger", reason: "한 앱 안의 메뉴" },
  ],
  accessibility: [
    "아이콘 버튼에 앱 전환이라는 이름을 붙입니다.",
    "목록은 role=dialog이고 Esc로 닫힙니다.",
    "앱마다 글자 이름을 함께 씁니다.",
    "열리면 첫 앱에 포커스가 갑니다.",
  ],
  tags: ["아이콘 이름", "앱 전환"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/waffle/WaffleDemo").then((m) => m.WaffleDemo),
  Thumbnail: WaffleThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/waffle/WaffleDemo.tsx?raw"),
};
