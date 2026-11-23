import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { StoriesThumbnail } from "@/entities/pattern/catalog/stories/StoriesThumbnail";

export const storiesPattern: Pattern = {
  slug: "stories",
  name: "Stories",
  nameKo: "스토리",
  aliases: ["인스타 스토리", "풀스크린 콘텐츠", "story viewer", "tap through"],
  category: "card-gallery",
  summary: "눌러 넘기는 전체 화면 콘텐츠",
  description:
    "짧은 콘텐츠를 화면 가득 하나씩 보여 주고, 시간이 지나거나 옆을 누르면 넘어가는 패턴입니다. 위쪽 막대로 몇 개 중 어디를 보는지 알려 줍니다.",
  origin:
    "2013년 스냅챗이 처음 선보이고, 2016년 인스타그램이 같은 이름으로 들여오며 널리 퍼진 형식이에요.",
  whenToUse: [
    "짧은 소식, 오늘의 메뉴처럼 가볍게 넘겨 보는 콘텐츠",
    "모바일 앱",
    "콘텐츠가 몇 개 안 될 때",
  ],
  whenNotToUse: [
    "읽는 데 시간이 걸리는 글(자동 넘김이 방해)",
    "다시 찾아봐야 하는 정보",
    "데스크톱 화면",
  ],
  alternatives: [{ name: "캐러셀", slug: "carousel", reason: "페이지 안에서 넘길 때" }],
  accessibility: [
    "앞뒤 이동, 일시 정지, 닫기가 모두 이름이 있는 버튼입니다.",
    "일시 정지 버튼과 길게 누르기로 자동 넘김을 멈출 수 있습니다(WCAG 2.2.2).",
    "동작 줄이기 설정에서는 자동으로 넘기지 않습니다.",
    "스토리 제목은 aria-live로 바뀔 때 읽어 줍니다.",
  ],
  tags: [...BASE_TAGS, "Mobile", "WCAG 2.2.2"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/stories/StoriesDemo").then((m) => m.StoriesDemo),
  Thumbnail: StoriesThumbnail,
  sources: [
    {
      fileName: "Stories.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/stories/Stories.tsx?raw"),
    },
    {
      fileName: "StoriesDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/stories/StoriesDemo.tsx?raw"),
    },
  ],
};
