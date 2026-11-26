import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const popoverPattern: Pattern = {
  slug: "popover",

  name: "Popover",
  nameKo: "팝오버",
  aliases: ["말풍선 패널", "플로팅 패널", "인포 박스", "floating panel"],
  category: "overlay",
  summary: "버튼 옆에 떠서 부가 정보나 간단한 조작을 담는 패널",
  description:
    "트리거 요소 근처에 작은 패널을 띄워 현재 맥락을 유지한 채 부가 설명이나 링크, 간단한 조작을 제공하는 패턴입니다. 모달과 달리 뒤의 화면을 계속 사용할 수 있습니다.",
  tags: [...BASE_TAGS, "Non-modal"],
  loadGuide: () => import("@/entities/pattern/catalog/popover/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/popover/PopoverDemo").then((m) => m.PopoverDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/popover/PopoverThumbnail").then((m) => m.PopoverThumbnail),
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
