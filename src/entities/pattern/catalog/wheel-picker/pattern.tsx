import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const wheelPickerPattern: Pattern = {
  slug: "wheel-picker",

  name: "Wheel Picker",
  nameKo: "휠 피커",
  aliases: ["스크롤 피커", "드럼 피커", "picker wheel", "scroll picker"],
  category: "special-input",
  summary: "세로 휠을 굴려 날짜나 시간을 선택",
  description:
    "세로로 굴러가는 열을 손가락으로 튕겨 가운데 칸의 값을 고르는 패턴입니다. 알람 시간처럼 몇 개의 열을 함께 맞추는 모바일 화면에서 익숙합니다.",
  tags: [...BASE_TAGS, "Scroll snap", "listbox"],
  loadGuide: () => import("@/entities/pattern/catalog/wheel-picker/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/wheel-picker/WheelPickerDemo").then(
      (m) => m.WheelPickerDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/wheel-picker/WheelPickerThumbnail").then(
      (m) => m.WheelPickerThumbnail,
    ),
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
