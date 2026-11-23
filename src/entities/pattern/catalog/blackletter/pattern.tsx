import { type Pattern } from "@/entities/pattern/model/pattern";
import { BlackletterThumbnail } from "@/entities/pattern/catalog/blackletter/BlackletterThumbnail";

export const blackletterPattern: Pattern = {
  slug: "blackletter",
  kind: "concept",
  name: "Blackletter",
  nameKo: "블랙레터",
  aliases: ["고딕체", "프락투어", "blackletter", "Fraktur"],
  category: "typography-style",
  summary: "각진 획과 장식이 들어간 서체",
  description:
    "중세 유럽 필사본에서 온 각지고 장식적인 서체입니다. 한글에는 해당 형태가 없어 라틴 문구와 함께 쓰며, 이 예시는 유니코드 수학 프락투어 문자로 표현하고 화면 읽기용 이름을 따로 붙였습니다.",
  origin:
    "중세 유럽 필사본의 굵고 각진 글자로, 지면이 검게 보일 만큼 획이 빽빽해 블랙레터라고 불러요. 1450년대 구텐베르크 성경도 이 글자로 인쇄됐어요.",
  whenToUse: [
    "전통, 맥주, 신문 제호 같은 고전적인 로고",
    "음악(메탈) 앨범 표지",
    "라틴 문구 한두 단어",
  ],
  whenNotToUse: [
    "본문이나 한글 문장",
    "유니코드 장식 문자를 실제 글처럼 쓸 때(검색, 화면 읽기 문제)",
    "작은 크기",
  ],
  alternatives: [
    { name: "아르데코", slug: "art-deco", reason: "장식적인 고전 분위기" },
    { name: "에디토리얼", slug: "editorial-typography", reason: "세리프 제목" },
  ],
  accessibility: [
    "유니코드 장식 문자는 화면 읽기가 낱자로 읽으므로 role=img와 aria-label(Weekend Market)을 붙입니다.",
    "한글 문구를 함께 적어 뜻을 전합니다.",
    "장식 문자를 검색이나 복사가 필요한 글에 쓰지 않습니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Blackletter"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/blackletter/BlackletterDemo").then((m) => m.BlackletterDemo),
  Thumbnail: BlackletterThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/blackletter/BlackletterDemo.tsx?raw"),
};
