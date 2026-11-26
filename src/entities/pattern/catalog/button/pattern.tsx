import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const buttonPattern: Pattern = {
  slug: "button",
  name: "Button",
  nameKo: "버튼",
  aliases: ["주요 버튼", "보조 버튼", "텍스트 버튼", "primary button", "CTA"],
  category: "button",
  summary: "주요, 보조, 텍스트 버튼의 위계와 상태",
  description:
    "강조 정도가 다른 세 가지 버튼으로 한 화면의 행동에 순서를 매기는 패턴입니다. 가장 중요한 행동 하나만 주요 버튼으로 두고, 마우스를 올렸을 때, 누를 때, 키보드로 왔을 때 모습을 각각 다르게 보여 줍니다.",
  whenToUse: [
    "저장, 보내기처럼 화면에서 가장 중요한 행동",
    "대안 행동(나중에, 취소)을 함께 보여 줄 때",
    "누를 수 있다는 것을 분명히 보여 줘야 할 때",
  ],
  whenNotToUse: [
    "다른 페이지로 이동할 때(링크 사용)",
    "켜고 끄는 상태(토글 버튼이나 스위치 사용)",
    "한 영역에 주요 버튼이 여러 개 필요할 때(위계부터 정리하기)",
  ],
  alternatives: [
    { name: "아이콘 버튼", slug: "icon-button", reason: "자리가 좁고 아이콘이 뜻을 전할 때" },
    { name: "토글 버튼", slug: "toggle-button", reason: "눌린 상태가 유지돼야 할 때" },
  ],
  accessibility: [
    "기본 button 요소에 type을 명시해 폼 안에서 의도치 않게 제출되지 않게 합니다.",
    "키보드 포커스 링은 :focus-visible로만 보여 마우스 사용자에게 방해가 되지 않습니다.",
    "누를 때 살짝 줄어드는 효과는 동작 줄이기 설정에서 꺼집니다.",
    "글자 대비 4.5:1 이상, 높이 32~40px로 누르기 쉬운 크기를 유지합니다.",
  ],
  tags: [...BASE_TAGS, "focus-visible", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/button/ButtonDemo").then((m) => m.ButtonDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/button/ButtonThumbnail").then((m) => m.ButtonThumbnail),
  sources: [
    {
      fileName: "Button.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/button/Button.tsx?raw"),
    },
    {
      fileName: "ButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/button/ButtonDemo.tsx?raw"),
    },
  ],
};
