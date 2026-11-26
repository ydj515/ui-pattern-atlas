import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const dateInputPattern: Pattern = {
  slug: "date-input",

  name: "Date Input",
  nameKo: "날짜 직접 입력",
  aliases: ["생년월일 입력", "날짜 형식 입력", "date field", "typed date"],
  category: "special-input",
  summary: "정해진 형식으로 날짜를 입력하고 확인",
  description:
    "YYYY.MM.DD 형식으로 숫자만 입력하면 점을 넣어 주고, 다 입력하면 실제로 있는 날짜인지 확인하는 패턴입니다. 생년월일처럼 먼 날짜는 달력을 넘기는 것보다 훨씬 빠릅니다.",
  tags: [...BASE_TAGS, "inputmode", "Validation"],
  loadGuide: () => import("@/entities/pattern/catalog/date-input/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/date-input/DateInputDemo").then((m) => m.DateInputDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/date-input/DateInputThumbnail").then(
      (m) => m.DateInputThumbnail,
    ),
  sources: [
    {
      fileName: "DateInput.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/date-input/DateInput.tsx?raw"),
    },
    {
      fileName: "DateInputDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/date-input/DateInputDemo.tsx?raw"),
    },
  ],
};
