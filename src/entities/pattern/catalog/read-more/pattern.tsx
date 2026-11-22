import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ReadMoreThumbnail } from "@/entities/pattern/catalog/read-more/ReadMoreThumbnail";

export const readMorePattern: Pattern = {
  slug: "read-more",
  name: "Read More",
  nameKo: "더 보기 접기",
  aliases: ["더보기 텍스트", "말줄임 펼치기", "show more text", "truncate text"],
  category: "disclosure",
  summary: "긴 글을 줄였다가 펼치기",
  description:
    '긴 설명을 몇 줄만 보여 주고, "더 보기"를 누르면 그 자리에서 전체를 펼치는 패턴입니다. 목록이나 카드가 길어지지 않으면서도 필요한 사람은 끝까지 읽을 수 있습니다.',
  whenToUse: [
    "숙소 소개, 상품 설명, 후기처럼 길이가 제각각인 글",
    "카드나 목록에서 높이를 맞춰야 할 때",
    "대부분 앞부분만 읽어도 충분할 때",
  ],
  whenNotToUse: [
    "꼭 읽어야 하는 약관, 주의 사항(처음부터 다 보여 주기)",
    "몇 줄 안 되는 글",
    "제목 하나에 딸린 긴 답(디스클로저나 아코디언 사용)",
  ],
  alternatives: [
    { name: "디스클로저", slug: "disclosure", reason: "제목을 눌러 내용을 펼칠 때" },
    { name: "아코디언", slug: "accordion", reason: "여러 질문과 답을 접어 둘 때" },
  ],
  accessibility: [
    "버튼은 실제로 넘칠 때만 나타나고 aria-expanded와 aria-controls로 본문과 연결됩니다.",
    "버튼이 글 바로 뒤에 있어 펼친 뒤에도 포커스 위치가 이어집니다.",
    "줄인 글도 DOM에 모두 있어 스크린 리더는 전체를 읽을 수 있습니다.",
    "화면 크기가 바뀌면 다시 재서 버튼을 보여 주거나 숨깁니다.",
  ],
  tags: [...BASE_TAGS, "aria-expanded", "line-clamp"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/read-more/ReadMoreDemo").then((m) => m.ReadMoreDemo),
  Thumbnail: ReadMoreThumbnail,
  sources: [
    {
      fileName: "ReadMore.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/read-more/ReadMore.tsx?raw"),
    },
    {
      fileName: "ReadMoreDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/read-more/ReadMoreDemo.tsx?raw"),
    },
  ],
};
