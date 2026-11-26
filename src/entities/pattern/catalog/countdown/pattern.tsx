import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const countdownPattern: Pattern = {
  slug: "countdown",

  name: "Countdown",
  nameKo: "마감 타이머",
  aliases: ["타임 세일 타이머", "남은 시간", "카운트다운", "deal timer", "countdown timer"],
  category: "pricing-display",
  summary: "실제 종료 시각까지 남은 시간",
  description:
    "정해진 종료 시각까지 남은 시간을 초 단위로 보여 주는 타이머입니다. 남은 시간과 함께 언제 끝나는지 날짜와 시각을 적고, 시간이 다 되면 처음으로 돌아가지 않고 끝났다고 알립니다.",
  tags: [...BASE_TAGS, "setInterval", "Date", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/countdown/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/countdown/CountdownDemo").then((m) => m.CountdownDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/countdown/CountdownThumbnail").then(
      (m) => m.CountdownThumbnail,
    ),
  sources: [
    {
      fileName: "Countdown.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/countdown/Countdown.tsx?raw"),
    },
    {
      fileName: "CountdownDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/countdown/CountdownDemo.tsx?raw"),
    },
  ],
};
