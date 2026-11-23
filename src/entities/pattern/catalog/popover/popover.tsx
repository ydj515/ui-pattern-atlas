import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { PopoverThumbnail } from "@/entities/pattern/catalog/popover/PopoverThumbnail";

export const popoverPattern: Pattern = {
  slug: "popover",
  name: "Popover",
  nameKo: "팝오버",
  aliases: ["말풍선 패널", "플로팅 패널", "인포 박스", "floating panel"],
  category: "overlay",
  summary: "버튼 옆에 떠서 부가 정보나 간단한 조작을 담는 패널",
  description:
    "트리거 요소 근처에 작은 패널을 띄워 현재 맥락을 유지한 채 부가 설명이나 링크, 간단한 조작을 제공하는 패턴입니다. 모달과 달리 뒤의 화면을 계속 사용할 수 있습니다.",
  whenToUse: [
    "툴팁보다 긴 설명이나 링크, 버튼이 필요할 때",
    "현재 화면을 떠나지 않고 간단한 설정을 바꿀 때",
    "특정 요소에 대한 상세 정보를 필요할 때만 보여줄 때",
  ],
  whenNotToUse: [
    "반드시 응답을 받아야 하는 결정일 때",
    "패널 안에 긴 폼이나 스크롤이 필요한 콘텐츠를 넣을 때",
    "호버만으로 열려야 하는 짧은 라벨일 때",
  ],
  alternatives: [
    { name: "툴팁", slug: "tooltip", reason: "한 줄짜리 비대화형 설명" },
    { name: "모달 다이얼로그", slug: "modal-dialog", reason: "반드시 결정이 필요한 경우" },
    { name: "아코디언", slug: "accordion", reason: "항상 페이지 흐름 안에 보여야 하는 설명" },
  ],
  accessibility: [
    "트리거 버튼에 aria-expanded와 aria-controls를 설정해 열림 상태를 알립니다.",
    "열리면 패널로 포커스를 옮기고, Esc로 닫으면 트리거로 포커스를 되돌립니다.",
    "바깥 영역을 누르면 닫히지만 페이지의 나머지는 계속 조작할 수 있습니다.",
    '패널에는 role="dialog"와 제목을 연결한 접근 가능한 이름을 부여합니다.',
  ],
  tags: [...BASE_TAGS, "Non-modal"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/popover/PopoverDemo").then((m) => m.PopoverDemo),
  Thumbnail: PopoverThumbnail,
  sources: [
    {
      fileName: "Popover.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/popover/Popover.tsx?raw"),
    },
    {
      fileName: "PopoverDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/popover/PopoverDemo.tsx?raw"),
    },
  ],
};
