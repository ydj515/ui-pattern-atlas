import { type Pattern } from "@/entities/pattern/model/pattern";
import { CaretThumbnail } from "@/entities/pattern/catalog/caret/CaretThumbnail";

export const caretPattern: Pattern = {
  slug: "caret",
  kind: "concept",
  name: "Caret ▾",
  nameKo: "캐럿",
  aliases: ["작은 삼각형", "드롭다운 화살표", "caret down", "dropdown arrow"],
  category: "icon-names",
  summary: "작은 삼각형, 드롭다운",
  description:
    "꽉 찬 작은 삼각형으로, 글을 끼워 넣는 교정 기호 캐럿(^)에서 온 이름입니다. 버튼 글자 옆에 붙어 누르면 고를 수 있는 목록이 펼쳐진다는 것을 알려 줍니다.",
  whenToUse: [
    "정렬, 필터처럼 하나를 고르는 드롭다운 버튼",
    "선택한 값을 버튼 글자로 보여 줄 때",
    "표 머리의 정렬 방향",
  ],
  whenNotToUse: [
    "다음 화면으로 들어가는 행(쉐브론 사용)",
    "아코디언 펼침(쉐브론 회전이 흔함)",
    "아이콘만 있고 현재 값이 없을 때",
  ],
  alternatives: [
    { name: "쉐브론", slug: "chevron", reason: "다음 화면이나 펼침을 표시할 때" },
    { name: "셀렉트", slug: "select", reason: "고르기 입력 전체 패턴" },
  ],
  accessibility: [
    "버튼에 aria-haspopup과 aria-expanded를 둡니다.",
    "캐럿은 장식이라 aria-hidden입니다.",
    "선택한 값을 버튼 글자로 보여 줍니다.",
    "결과는 role=status로 알립니다.",
  ],
  tags: ["아이콘 이름", "드롭다운"],
  loadPreview: () => import("@/entities/pattern/catalog/caret/CaretDemo").then((m) => m.CaretDemo),
  Thumbnail: CaretThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/caret/CaretDemo.tsx?raw"),
};
