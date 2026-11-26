import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const loadingOverlayPattern: Pattern = {
  slug: "loading-overlay",

  name: "Loading Overlay",
  nameKo: "로딩 오버레이",
  aliases: ["로딩 덮개", "저장 중 오버레이", "busy overlay", "blocking loader"],
  category: "loading",
  summary: "영역 전체를 막는 로딩",
  description:
    "저장하는 동안 해당 영역을 반투명하게 덮어 입력을 막는 패턴입니다. 중간에 값이 바뀌거나 버튼을 두 번 누르는 일을 막고, 무엇을 하는 중인지 함께 보여 줍니다.",
  tags: [...BASE_TAGS, "inert", "aria-busy"],
  loadGuide: () => import("@/entities/pattern/catalog/loading-overlay/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/loading-overlay/LoadingOverlayDemo").then(
      (m) => m.LoadingOverlayDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/loading-overlay/LoadingOverlayThumbnail").then(
      (m) => m.LoadingOverlayThumbnail,
    ),
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
