import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { CountdownThumbnail } from "@/entities/pattern/catalog/countdown/CountdownThumbnail";

export const countdownPattern: Pattern = {
  slug: "countdown",
  name: "Countdown",
  nameKo: "마감 타이머",
  aliases: ["타임 세일 타이머", "남은 시간", "카운트다운", "deal timer", "countdown timer"],
  category: "pricing-display",
  summary: "실제 종료 시각까지 남은 시간",
  description:
    "정해진 종료 시각까지 남은 시간을 초 단위로 보여 주는 타이머입니다. 남은 시간과 함께 언제 끝나는지 날짜와 시각을 적고, 시간이 다 되면 처음으로 돌아가지 않고 끝났다고 알립니다.",
  whenToUse: [
    "타임 특가처럼 끝나는 시각이 정해진 혜택",
    "예매, 신청 마감이 가까울 때",
    "결제 대기 시간처럼 실제로 시간이 제한될 때",
  ],
  whenNotToUse: [
    "새로고침하면 다시 시작하는 가짜 마감(가짜 긴급함 참고)",
    "마감까지 며칠 이상 남았을 때(날짜만 표시)",
    "압박을 줄 이유가 없는 화면",
  ],
  alternatives: [
    {
      name: "가짜 긴급함",
      slug: "fake-urgency",
      reason: "다시 시작하는 타이머가 왜 문제인지 볼 때",
    },
    { name: "재고 표시", slug: "low-stock-indicator", reason: "시간 대신 수량이 제한될 때" },
  ],
  accessibility: [
    "매초 바뀌는 숫자는 aria-hidden으로 두고, 종료 시각은 글자로 읽어 줍니다.",
    '끝나면 role="status"로 한 번만 알립니다.',
    "남은 시간을 글자와 숫자로 보여 줘 색에 기대지 않습니다.",
  ],
  tags: [...BASE_TAGS, "setInterval", "Date", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/countdown/CountdownDemo").then((m) => m.CountdownDemo),
  Thumbnail: CountdownThumbnail,
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
