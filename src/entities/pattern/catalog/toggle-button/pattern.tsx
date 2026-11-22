import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ToggleButtonThumbnail } from "@/entities/pattern/catalog/toggle-button/ToggleButtonThumbnail";

export const toggleButtonPattern: Pattern = {
  slug: "toggle-button",
  name: "Toggle Button",
  nameKo: "토글 버튼",
  aliases: ["눌림 버튼", "서식 버튼", "pressed button", "aria-pressed"],
  category: "button",
  summary: "선택 여부를 누른 뒤에도 유지",
  description:
    "누르면 켜지고 다시 누르면 꺼지는 버튼입니다. 굵게, 기울임처럼 여러 개를 함께 켤 수 있는 서식 도구에서 쓰며, 켜진 상태가 계속 보입니다.",
  whenToUse: [
    "글자 서식, 보기 옵션처럼 켜고 끄는 도구 버튼",
    "여러 개를 동시에 켤 수 있을 때",
    "툴바 안에서 아이콘으로 상태를 보여 줄 때",
  ],
  whenNotToUse: [
    "설정을 저장하는 켜기/끄기(스위치 사용)",
    "여러 개 중 하나만 고를 때(세그먼트 컨트롤 사용)",
    "누르면 바로 실행되는 행동(버튼 사용)",
  ],
  alternatives: [
    { name: "스위치", slug: "switch", reason: "설정을 켜고 끌 때" },
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "하나만 고를 때" },
  ],
  accessibility: [
    'aria-pressed로 눌림 상태를 알리고, 이름("굵게")은 상태에 따라 바꾸지 않습니다.',
    '관련 버튼을 role="toolbar"와 이름으로 묶습니다.',
    "눌린 상태는 배경색 대비로 분명히 보입니다.",
    "글자 하나짜리 버튼도 aria-label로 뜻을 전합니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "toolbar"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/toggle-button/ToggleButtonDemo").then(
      (m) => m.ToggleButtonDemo,
    ),
  Thumbnail: ToggleButtonThumbnail,
  sources: [
    {
      fileName: "ToggleButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/toggle-button/ToggleButton.tsx?raw"),
    },
    {
      fileName: "ToggleButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/toggle-button/ToggleButtonDemo.tsx?raw"),
    },
  ],
};
