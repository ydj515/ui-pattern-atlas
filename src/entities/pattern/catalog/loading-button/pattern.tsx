import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const loadingButtonPattern: Pattern = {
  slug: "loading-button",

  name: "Loading Button",
  nameKo: "로딩 버튼",
  aliases: ["진행 버튼", "제출 중 버튼", "spinner button", "async button"],
  category: "button",
  summary: "누른 뒤 처리 중을 알리고 결과에 따라 성공, 실패로 전환",
  description:
    "버튼을 누르면 그 자리에서 처리 중임을 보여 주고, 끝나면 성공이나 실패로 바뀌는 패턴입니다. 결과를 버튼 안에서 바로 확인하고, 처리 중에는 두 번 눌리지 않습니다.",
  tags: [...BASE_TAGS, "aria-busy", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/loading-button/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/loading-button/LoadingButtonDemo").then(
      (m) => m.LoadingButtonDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/loading-button/LoadingButtonThumbnail").then(
      (m) => m.LoadingButtonThumbnail,
    ),
  sources: [
    {
      fileName: "LoadingButton.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/loading-button/LoadingButton.tsx?raw"),
    },
    {
      fileName: "LoadingButtonDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/loading-button/LoadingButtonDemo.tsx?raw"),
    },
  ],
};
