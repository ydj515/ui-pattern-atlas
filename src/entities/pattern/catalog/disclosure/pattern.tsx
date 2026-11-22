import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { DisclosureThumbnail } from "@/entities/pattern/catalog/disclosure/DisclosureThumbnail";

export const disclosurePattern: Pattern = {
  slug: "disclosure",
  name: "Disclosure",
  nameKo: "디스클로저",
  aliases: ["펼치기 접기", "토글 섹션", "details summary", "show hide"],
  category: "disclosure",
  summary: "한 덩어리만 펼치고 접기",
  description:
    "제목 하나를 눌러 그 아래 내용을 펼치고 접는 가장 단순한 패턴입니다. 자주 묻지는 않지만 궁금할 수 있는 정보를 접어 두어 화면을 가볍게 합니다.",
  whenToUse: [
    "부가 설명, 자세한 조건처럼 필요할 때만 보는 내용",
    "질문 하나와 답처럼 짝을 이룬 내용",
    "고급 설정을 숨겨 둘 때",
  ],
  whenNotToUse: [
    "같은 종류가 여러 개일 때(아코디언 사용)",
    "대부분이 꼭 봐야 하는 내용",
    "내용이 짧아 접을 필요가 없을 때",
  ],
  alternatives: [
    { name: "아코디언", slug: "accordion", reason: "여러 개를 묶어 접을 때" },
    { name: "더 보기 접기", slug: "read-more", reason: "긴 글의 뒷부분을 줄일 때" },
  ],
  accessibility: [
    "제목은 h3 안의 button이고 aria-expanded와 aria-controls를 가집니다.",
    "접힌 내용은 hidden이라 Tab과 스크린 리더에서 빠집니다.",
    "화살표 아이콘은 장식이라 aria-hidden입니다.",
    "HTML만 쓴다면 details와 summary가 같은 역할을 합니다.",
  ],
  tags: [...BASE_TAGS, "WAI-ARIA APG", "aria-expanded"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/disclosure/DisclosureDemo").then((m) => m.DisclosureDemo),
  Thumbnail: DisclosureThumbnail,
  sources: [
    {
      fileName: "Disclosure.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/disclosure/Disclosure.tsx?raw"),
    },
    {
      fileName: "DisclosureDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/disclosure/DisclosureDemo.tsx?raw"),
    },
  ],
};
