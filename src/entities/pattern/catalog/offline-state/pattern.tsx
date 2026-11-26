import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const offlineStatePattern: Pattern = {
  slug: "offline-state",

  name: "Offline State",
  nameKo: "오프라인",
  aliases: ["연결 끊김", "네트워크 오류", "offline", "no connection"],
  category: "empty-error",
  summary: "연결이 끊겼을 때의 안내",
  description:
    "네트워크 연결이 끊겼을 때 무엇이 문제인지 알리고, 연결되면 저절로 다시 불러온다고 안내하는 패턴입니다. 사용자가 직접 다시 시도할 수 있는 버튼도 둡니다.",
  tags: [...BASE_TAGS, "navigator.onLine", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/offline-state/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/offline-state/OfflineStateDemo").then(
      (m) => m.OfflineStateDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/offline-state/OfflineStateThumbnail").then(
      (m) => m.OfflineStateThumbnail,
    ),
  sources: [
    {
      fileName: "OfflineState.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/offline-state/OfflineState.tsx?raw"),
    },
    {
      fileName: "OfflineStateDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/offline-state/OfflineStateDemo.tsx?raw"),
    },
  ],
};
