import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { FadeThumbnail } from "@/entities/pattern/catalog/fade/FadeThumbnail";

export const fadePattern: Pattern = {
  slug: "fade",
  name: "Fade",
  nameKo: "페이드",
  aliases: ["페이드 인", "페이드 아웃", "fade in", "fade out", "opacity transition"],
  category: "motion",
  summary: "투명도로 나타나고 사라지기",
  description:
    "투명도만 바꿔 요소가 부드럽게 나타나고 사라지는 가장 차분한 전환입니다. 나타날 때는 CSS @starting-style을 쓰고, 사라질 때는 전환이 끝난 뒤에 화면에서 뺍니다.",
  whenToUse: [
    "저장 완료 같은 짧은 안내",
    "위치는 그대로이고 내용만 바뀔 때",
    "동작 줄이기에서 다른 움직임 대신",
  ],
  whenNotToUse: [
    "어디서 왔는지 보여 줘야 할 때(슬라이드 사용)",
    "긴 페이드로 내용을 늦게 보여 줄 때",
    "깜빡이듯 반복되는 페이드",
  ],
  alternatives: [
    { name: "슬라이드", slug: "slide", reason: "나타나는 방향이 의미 있을 때" },
    { name: "토스트", slug: "toast", reason: "결과 알림 전체 패턴" },
  ],
  accessibility: [
    "안내는 role=status 영역 안에 있어 화면 읽기에서도 들립니다.",
    "사라지는 동안에는 aria-hidden으로 표시합니다.",
    "동작 줄이기에서는 전환 없이 바로 넣고 뺍니다.",
    "자동으로 사라지는 안내는 2초 이상 보여 줍니다.",
  ],
  tags: [...BASE_TAGS, "@starting-style", "CSS transition", "Reduced motion"],
  loadPreview: () => import("@/entities/pattern/catalog/fade/FadeDemo").then((m) => m.FadeDemo),
  Thumbnail: FadeThumbnail,
  sources: [
    {
      fileName: "Fade.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/fade/Fade.tsx?raw"),
    },
    {
      fileName: "FadeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/fade/FadeDemo.tsx?raw"),
    },
  ],
};
