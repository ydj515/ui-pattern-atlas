import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { IconButtonThumbnail } from "@/entities/pattern/catalog/icon-button/IconButtonThumbnail";

export const iconButtonPattern: Pattern = {
  slug: "icon-button",
  name: "Icon Button",
  nameKo: "아이콘 버튼",
  aliases: ["아이콘만 있는 버튼", "툴바 버튼", "icon-only button", "ghost button"],
  category: "button",
  summary: "글자 없이 아이콘만 있는 버튼",
  description:
    "글자 대신 아이콘만으로 행동을 나타내는 작은 버튼입니다. 이름을 보조 기술에 알리고, 마우스를 올리거나 키보드로 오면 같은 이름을 툴팁으로 보여 줍니다.",
  whenToUse: [
    "공유, 저장, 삭제처럼 아이콘이 널리 알려진 행동",
    "카드나 툴바처럼 자리가 좁을 때",
    "같은 행동이 목록마다 반복될 때",
  ],
  whenNotToUse: [
    "아이콘만으로 뜻이 분명하지 않을 때(글자 버튼 사용)",
    "화면의 가장 중요한 행동(글자가 있는 주요 버튼 사용)",
    "상태를 켜고 끌 때(토글 버튼 사용)",
  ],
  alternatives: [
    { name: "버튼", slug: "button", reason: "뜻을 글로 분명히 전해야 할 때" },
    { name: "툴팁", slug: "tooltip", reason: "버튼이 아닌 요소의 설명" },
  ],
  accessibility: [
    'aria-label로 이름을 주고, 같은 글을 role="tooltip"으로 aria-describedby에 연결합니다.',
    "툴팁은 hover와 키보드 포커스 모두에서 나타납니다.",
    "아이콘은 aria-hidden이고, 누르는 영역은 40×40px을 유지합니다.",
    "결과는 별도의 status 문구로 알립니다.",
  ],
  tags: [...BASE_TAGS, "aria-label", "Tooltip"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/icon-button/IconButtonDemo").then((m) => m.IconButtonDemo),
  Thumbnail: IconButtonThumbnail,
  sources: [
    {
      fileName: "IconButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/icon-button/IconButton.tsx?raw"),
    },
    {
      fileName: "IconButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/icon-button/IconButtonDemo.tsx?raw"),
    },
  ],
};
