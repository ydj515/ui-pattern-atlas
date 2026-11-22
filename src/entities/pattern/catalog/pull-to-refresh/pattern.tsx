import { BASE_TAGS, type Pattern } from "../../model/pattern";
import { PullToRefreshThumbnail } from "./PullToRefreshThumbnail";

export const pullToRefreshPattern: Pattern = {
  slug: "pull-to-refresh",

  name: "Pull to Refresh",
  nameKo: "당겨서 새로고침",
  aliases: ["Pull-to-refresh", "새로 고침", "당기기"],
  category: "gesture",
  summary: "목록 상단을 아래로 당겨 최신 항목을 요청",
  description:
    "스크롤 영역이 맨 위에 있을 때 아래로 당겼다가 놓으면 데이터를 다시 불러옵니다. 새로고침 버튼도 같은 요청을 실행할 수 있습니다.",
  whenToUse: ["최신 항목이 위에 쌓이는 뉴스나 알림 목록에서 수동으로 갱신할 때"],
  whenNotToUse: [
    "이미 내려간 스크롤 위치를 유지해야 하거나 새로고침 동작이 다른 제스처와 충돌할 때",
  ],
  alternatives: [
    { name: "스피너", slug: "spinner", reason: "제스처 없이 요청의 대기 상태만 알릴 때" },
  ],
  accessibility: [
    "새로고침 버튼으로 터치 제스처 없이 같은 작업을 실행합니다.",
    "진행과 실패를 라이브 영역에서 알려 줍니다.",
  ],
  tags: BASE_TAGS,
  loadPreview: () => import("./PullToRefreshDemo").then((m) => m.PullToRefreshDemo),
  Thumbnail: PullToRefreshThumbnail,
  sources: [
    {
      fileName: "PullToRefresh.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/pull-to-refresh/PullToRefresh.tsx?raw"),
    },
    {
      fileName: "PullToRefreshDemo.tsx",
      role: "Usage",
      load: () => import("./PullToRefreshDemo.tsx?raw"),
    },
  ],
};
