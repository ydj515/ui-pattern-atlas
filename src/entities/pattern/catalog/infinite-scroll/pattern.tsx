import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { InfiniteScrollThumbnail } from "@/entities/pattern/catalog/infinite-scroll/InfiniteScrollThumbnail";

export const infiniteScrollPattern: Pattern = {
  slug: "infinite-scroll",
  name: "Infinite Scroll",
  nameKo: "무한 스크롤",
  aliases: ["자동 불러오기", "끝없는 스크롤", "endless scroll", "lazy list"],
  category: "navigation",
  summary: "끝에 닿으면 이어서 불러오기",
  description:
    "목록 끝에 가까워지면 다음 묶음을 자동으로 불러와 이어 붙이는 패턴입니다. 피드처럼 계속 훑어보는 화면에서 페이지를 넘기는 수고를 없앱니다.",
  origin:
    "끝없이(infinite) 이어 불러온다는 뜻 그대로예요. 2006년 에이자 래스킨(Aza Raskin)이 고안한 것으로 알려져 있어요.",
  whenToUse: [
    "SNS 피드, 사진처럼 계속 훑어보는 콘텐츠",
    "순서보다 발견이 중요한 목록",
    "모바일에서 페이지 버튼이 번거로울 때",
  ],
  whenNotToUse: [
    "특정 항목을 다시 찾아야 하는 목록(페이지네이션 사용)",
    "목록 아래에 꼭 봐야 할 바닥글이 있을 때(더 보기 버튼 사용)",
    "정렬, 비교가 중요한 검색 결과",
  ],
  alternatives: [
    { name: "더 보기 버튼", slug: "load-more", reason: "사용자가 원할 때만 불러올 때" },
    { name: "페이지네이션", slug: "pagination", reason: "위치를 기억해야 할 때" },
  ],
  accessibility: [
    '불러오는 중과 마지막 항목을 role="status"로 알립니다.',
    '같은 동작의 "더 불러오기" 버튼을 남겨 키보드 사용자와 자동 감지가 실패한 경우를 돕습니다.',
    "스크롤 영역은 이름이 있는 region이라 키보드로 스크롤할 수 있습니다.",
    "첫 묶음이 영역을 다 채우지 못하면 바로 이어서 불러옵니다.",
  ],
  tags: [...BASE_TAGS, "role=status", "Scroll"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/infinite-scroll/InfiniteScrollDemo").then(
      (m) => m.InfiniteScrollDemo,
    ),
  Thumbnail: InfiniteScrollThumbnail,
  sources: [
    {
      fileName: "InfiniteScroll.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/infinite-scroll/InfiniteScroll.tsx?raw"),
    },
    {
      fileName: "InfiniteScrollDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/infinite-scroll/InfiniteScrollDemo.tsx?raw"),
    },
  ],
};
