import { type Pattern } from "@/entities/pattern/model/pattern";
import { BauhausThumbnail } from "@/entities/pattern/catalog/bauhaus/BauhausThumbnail";

export const bauhausPattern: Pattern = {
  slug: "bauhaus",
  kind: "concept",
  name: "Bauhaus",
  nameKo: "바우하우스",
  aliases: ["바우하우스 타이포", "기하학 타이포", "Bauhaus type"],
  category: "typography-style",
  summary: "원과 직선 등 기하학 형태를 활용한 글자",
  description:
    "원, 사각형, 삼각형 같은 기본 도형과 빨강, 파랑, 노랑 원색을 글자와 함께 배치하는 스타일입니다. 1920년대 독일 디자인 학교 바우하우스의 조형 원리에서 왔습니다.",
  origin:
    "1919년 독일 바이마르에 문을 연 미술·건축 학교 바우하우스에서 온 이름이에요. '집을 짓는다'는 뜻의 독일어로, 장식보다 기능과 기본 도형을 중시했어요.",
  whenToUse: [
    "전시, 문화 행사 포스터",
    "기하학적이고 정돈된 브랜드",
    "도형과 글자를 함께 쓰는 표지",
  ],
  whenNotToUse: ["도형이 글자를 가려 읽기 어려울 때", "본문 글", "원색이 브랜드와 맞지 않을 때"],
  alternatives: [
    { name: "스위스 스타일", slug: "swiss-style", reason: "그리드로 정돈한 정보" },
    { name: "아르데코", slug: "art-deco", reason: "장식적인 기하학 선" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Bauhaus"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/bauhaus/BauhausDemo").then((m) => m.BauhausDemo),
  Thumbnail: BauhausThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/bauhaus/BauhausDemo.tsx?raw"),
};
