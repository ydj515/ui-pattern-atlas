import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { WheelPickerThumbnail } from "@/entities/pattern/catalog/wheel-picker/WheelPickerThumbnail";

export const wheelPickerPattern: Pattern = {
  slug: "wheel-picker",
  name: "Wheel Picker",
  nameKo: "휠 피커",
  aliases: ["스크롤 피커", "드럼 피커", "picker wheel", "scroll picker"],
  category: "special-input",
  summary: "세로 휠을 굴려 날짜나 시간을 선택",
  description:
    "세로로 굴러가는 열을 손가락으로 튕겨 가운데 칸의 값을 고르는 패턴입니다. 알람 시간처럼 몇 개의 열을 함께 맞추는 모바일 화면에서 익숙합니다.",
  whenToUse: [
    "알람, 타이머처럼 모바일에서 시간을 맞출 때",
    "열 두세 개를 함께 고를 때",
    "값이 순서대로 이어질 때",
  ],
  whenNotToUse: [
    "데스크톱 폼(셀렉트나 시간 선택이 더 빠릅니다)",
    "보기가 아주 많을 때(굴리기 오래 걸림)",
    "값에 순서가 없을 때",
  ],
  alternatives: [
    { name: "시간 선택", slug: "time-picker", reason: "데스크톱이나 폼 안에서" },
    { name: "셀렉트", slug: "select", reason: "열이 하나뿐일 때" },
  ],
  accessibility: [
    "각 열은 이름이 있는 listbox이고 ↑/↓로 값을 바꿀 수 있습니다.",
    "가운데 값은 aria-selected와 aria-activedescendant로 알립니다.",
    "CSS scroll snap으로 손을 떼면 칸에 맞춰 멈춥니다.",
    '고른 결과를 문장으로 보여 줍니다("오전 7:30에 알람이 울려요").',
  ],
  tags: [...BASE_TAGS, "Scroll snap", "listbox"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/wheel-picker/WheelPickerDemo").then(
      (m) => m.WheelPickerDemo,
    ),
  Thumbnail: WheelPickerThumbnail,
  sources: [
    {
      fileName: "WheelPicker.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/wheel-picker/WheelPicker.tsx?raw"),
    },
    {
      fileName: "WheelPickerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/wheel-picker/WheelPickerDemo.tsx?raw"),
    },
  ],
};
