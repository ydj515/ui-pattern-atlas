import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { LongPressThumbnail } from "@/entities/pattern/catalog/long-press/LongPressThumbnail";

export const longPressPattern: Pattern = {
  slug: "long-press",
  name: "Long Press",
  nameKo: "길게 누르기",
  aliases: ["꾹 누르기", "롱 프레스", "press and hold", "context menu"],
  category: "gesture",
  summary: "꾹 눌러 숨은 메뉴 열기",
  description:
    "항목을 0.5초쯤 누르고 있으면 답장, 복사 같은 숨은 동작이 열리는 패턴입니다. 누르는 동안 살짝 줄어들어 반응 중임을 보여 주고, 손가락이 움직이면 취소해 스크롤과 헷갈리지 않게 합니다.",
  whenToUse: [
    "메시지, 사진처럼 탭은 열기이고 부가 동작이 따로 있을 때",
    "자주 쓰지 않는 동작을 화면에서 숨길 때",
    "데스크톱의 오른쪽 클릭 메뉴에 해당하는 것이 필요할 때",
  ],
  whenNotToUse: [
    "주요 동작(눈에 보이는 버튼으로 두기)",
    "길게 누를 수 있다는 걸 알릴 방법이 없을 때",
    "누르고 끄는 다른 제스처와 같은 곳에 둘 때",
  ],
  alternatives: [
    { name: "드롭다운 메뉴", slug: "dropdown-menu", reason: "숨은 동작을 버튼으로 열 때" },
    { name: "컨텍스트 메뉴", slug: "context-menu", reason: "오른쪽 클릭과 함께 쓸 때" },
  ],
  accessibility: [
    "오른쪽 클릭, Shift+F10, 메뉴 키로도 같은 메뉴가 열립니다.",
    "버튼 이름에 길게 눌러 더 보기를 넣어 숨은 동작이 있음을 알립니다.",
    "메뉴가 열리면 첫 항목으로 포커스가 가고 Esc로 닫힙니다.",
    "8px 넘게 움직이면 취소되어 스크롤 중에 잘못 열리지 않습니다.",
  ],
  tags: [...BASE_TAGS, "React", "Tailwind CSS", "Pointer Events", "aria-haspopup"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/long-press/LongPressDemo").then((m) => m.LongPressDemo),
  Thumbnail: LongPressThumbnail,
  sources: [
    {
      fileName: "LongPress.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/long-press/LongPress.tsx?raw"),
    },
    {
      fileName: "LongPressDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/long-press/LongPressDemo.tsx?raw"),
    },
  ],
};
