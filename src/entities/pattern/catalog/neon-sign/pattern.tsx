import { type Pattern } from "@/entities/pattern/model/pattern";
import { NeonSignThumbnail } from "@/entities/pattern/catalog/neon-sign/NeonSignThumbnail";

export const neonSignPattern: Pattern = {
  slug: "neon-sign",
  kind: "concept",
  name: "Neon Sign",
  nameKo: "네온 사인",
  aliases: ["네온", "네온 글자", "neon text", "glow text"],
  category: "typography-style",
  summary: "발광하는 튜브와 같은 외곽과 번짐",
  description:
    "어두운 바탕에서 글자 주변으로 빛이 여러 겹 번져 네온관처럼 보이게 하는 스타일입니다. 흰 중심과 분홍 빛 번짐을 겹칩니다.",
  whenToUse: ["바, 공연, 밤 분위기의 배너", "어두운 테마의 큰 제목", "짧은 문구"],
  whenNotToUse: ["밝은 배경", "본문", "빛 번짐으로 대비가 낮아질 때"],
  alternatives: [
    { name: "Y2K 크롬", slug: "chrome-typography", reason: "금속 광택" },
    { name: "아웃라인", slug: "outline", reason: "외곽선 강조" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Neon Sign"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/neon-sign/NeonSignDemo").then((m) => m.NeonSignDemo),
  Thumbnail: NeonSignThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/neon-sign/NeonSignDemo.tsx?raw"),
};
