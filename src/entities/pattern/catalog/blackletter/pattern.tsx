import { type Pattern } from "@/entities/pattern/model/pattern";

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
  tags: ["글자 스타일", "Blackletter"],
  loadGuide: () => import("@/entities/pattern/catalog/blackletter/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/blackletter/BlackletterDemo").then((m) => m.BlackletterDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/blackletter/BlackletterThumbnail").then(
      (m) => m.BlackletterThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/blackletter/BlackletterDemo.tsx?raw"),
};
