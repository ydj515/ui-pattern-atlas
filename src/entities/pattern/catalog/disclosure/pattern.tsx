import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const disclosurePattern: Pattern = {
  slug: "disclosure",

  name: "Disclosure",
  nameKo: "디스클로저",
  aliases: ["펼치기 접기", "토글 섹션", "details summary", "show hide"],
  category: "disclosure",
  summary: "한 덩어리만 펼치고 접기",
  description:
    "제목 하나를 눌러 그 아래 내용을 펼치고 접는 가장 단순한 패턴입니다. 자주 묻지는 않지만 궁금할 수 있는 정보를 접어 두어 화면을 가볍게 합니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "aria-expanded"],
  loadGuide: () => import("@/entities/pattern/catalog/disclosure/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/disclosure/DisclosureDemo").then((m) => m.DisclosureDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/disclosure/DisclosureThumbnail").then(
      (m) => m.DisclosureThumbnail,
    ),
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
