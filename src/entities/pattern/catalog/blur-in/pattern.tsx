import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { BlurInThumbnail } from "@/entities/pattern/catalog/blur-in/BlurInThumbnail";

export const blurInPattern: Pattern = {
  slug: "blur-in",
  name: "Blur In",
  nameKo: "블러 인",
  aliases: ["흐림 효과", "초점 맞추기", "focus in", "blur reveal"],
  category: "text-motion",
  summary: "흐린 글자가 선명해짐",
  description:
    "흐리고 옅은 글자가 초점이 맞춰지듯 선명해지는 표현입니다. 짧은 문장을 차분하고 고급스럽게 보여 주며, blur 필터는 비용이 커서 제목 한 줄에만 씁니다.",
  whenToUse: [
    "오늘의 문장, 인용처럼 짧고 분위기가 중요한 글",
    "사진 위 큰 제목",
    "화면을 처음 열 때 한 번",
  ],
  whenNotToUse: [
    "넓은 영역이나 긴 본문(성능 부담)",
    "저사양 기기가 많은 서비스",
    "빠르게 읽어야 하는 안내",
  ],
  alternatives: [
    { name: "페이드 업", slug: "fade-up", reason: "더 가볍게 나타나게 할 때" },
    { name: "마스크 리빌", slug: "mask-reveal", reason: "줄이 가림에서 올라올 때" },
  ],
  accessibility: [
    "글은 처음부터 문서에 있어 화면 읽기는 기다리지 않습니다.",
    "동작 줄이기에서는 흐림 없이 바로 보여 줍니다.",
    "흐림은 700ms 안에 끝나 읽기를 오래 막지 않습니다.",
    "배경과 글자 대비는 최종 상태 기준 4.5:1 이상입니다.",
  ],
  tags: [...BASE_TAGS, "@starting-style", "CSS filter", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/blur-in/BlurInDemo").then((m) => m.BlurInDemo),
  Thumbnail: BlurInThumbnail,
  sources: [
    {
      fileName: "BlurIn.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/blur-in/BlurIn.tsx?raw"),
    },
    {
      fileName: "BlurInDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/blur-in/BlurInDemo.tsx?raw"),
    },
  ],
};
