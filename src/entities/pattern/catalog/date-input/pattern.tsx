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
  whenToUse: [
    "생년월일, 발급일처럼 먼 날짜",
    "사용자가 날짜를 이미 알고 있을 때",
    "키보드 입력이 빠른 데스크톱 폼",
  ],
  whenNotToUse: [
    "요일이 중요한 가까운 날짜(날짜 선택 사용)",
    "오늘, 내일처럼 몇 개로 충분할 때(빠른 날짜 선택 칩 사용)",
    "나라마다 날짜 순서가 다른 국제 서비스(형식을 분명히 보여 주기)",
  ],
  alternatives: [
    { name: "날짜 선택", slug: "date-picker", reason: "가까운 날짜를 달력에서 고를 때" },
    { name: "입력 마스크", slug: "input-mask", reason: "날짜가 아닌 번호 형식" },
  ],
  accessibility: [
    "형식(YYYY.MM.DD)은 placeholder뿐 아니라 안내 문구로 항상 보여 줍니다.",
    '포커스를 떠날 때 검사해 "없는 날짜예요" 같은 오류를 aria-invalid와 함께 알립니다.',
    'inputmode="numeric"과 autocomplete="bday"로 숫자 키패드와 자동 채우기를 씁니다.',
    "오류가 생긴 뒤에는 입력하는 동안 다시 검사합니다.",
  ],
  tags: [...BASE_TAGS, "inputmode", "Validation"],
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
