import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { LoadingOverlayThumbnail } from "@/entities/pattern/catalog/loading-overlay/LoadingOverlayThumbnail";

export const loadingOverlayPattern: Pattern = {
  slug: "loading-overlay",
  name: "Loading Overlay",
  nameKo: "로딩 오버레이",
  aliases: ["로딩 덮개", "저장 중 오버레이", "busy overlay", "blocking loader"],
  category: "loading",
  summary: "영역 전체를 막는 로딩",
  description:
    "저장하는 동안 해당 영역을 반투명하게 덮어 입력을 막는 패턴입니다. 중간에 값이 바뀌거나 버튼을 두 번 누르는 일을 막고, 무엇을 하는 중인지 함께 보여 줍니다.",
  whenToUse: [
    "저장 중에 값을 바꾸면 결과가 꼬이는 폼",
    "한 영역의 여러 조작을 동시에 막아야 할 때",
    "작업이 몇 초 안에 끝날 때",
  ],
  whenNotToUse: [
    "페이지 전체를 막는 경우(필요한 영역만 덮기)",
    "오래 걸리는 작업(진행 알림으로 다른 일을 하게 두기)",
    "버튼 하나만 막으면 되는 경우(버튼 비활성과 상태 문구로 충분)",
  ],
  alternatives: [
    { name: "진행 알림", slug: "progress-toast", reason: "작업 중에도 다른 일을 할 수 있을 때" },
    { name: "스피너", slug: "spinner", reason: "버튼이나 작은 영역의 상태만 보여 줄 때" },
  ],
  accessibility: [
    "덮인 내용에 inert를 걸어 클릭, 포커스, 보조 기술 접근을 모두 막습니다.",
    '영역에 aria-busy를 주고, "저장하는 중" 문구는 inert 바깥의 role="status"에 둡니다.',
    '끝나면 결과 문구("저장했어요")를 status로 알립니다.',
    "전환과 회전은 동작 줄이기 설정에서 꺼집니다.",
  ],
  tags: [...BASE_TAGS, "inert", "aria-busy"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/loading-overlay/LoadingOverlayDemo").then(
      (m) => m.LoadingOverlayDemo,
    ),
  Thumbnail: LoadingOverlayThumbnail,
  sources: [
    {
      fileName: "LoadingOverlay.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/loading-overlay/LoadingOverlay.tsx?raw"),
    },
    {
      fileName: "LoadingOverlayDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/loading-overlay/LoadingOverlayDemo.tsx?raw"),
    },
  ],
};
