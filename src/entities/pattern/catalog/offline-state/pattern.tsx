import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { OfflineStateThumbnail } from "@/entities/pattern/catalog/offline-state/OfflineStateThumbnail";

export const offlineStatePattern: Pattern = {
  slug: "offline-state",
  name: "Offline State",
  nameKo: "오프라인",
  aliases: ["연결 끊김", "네트워크 오류", "offline", "no connection"],
  category: "empty-error",
  summary: "연결이 끊겼을 때의 안내",
  description:
    "네트워크 연결이 끊겼을 때 무엇이 문제인지 알리고, 연결되면 저절로 다시 불러온다고 안내하는 패턴입니다. 사용자가 직접 다시 시도할 수 있는 버튼도 둡니다.",
  whenToUse: [
    "실시간 목록이나 피드처럼 네트워크가 있어야 보이는 내용",
    "지하철, 엘리베이터처럼 연결이 자주 끊기는 모바일 환경",
    "저장한 내용 일부는 계속 볼 수 있을 때 그 사실까지 알려 줄 때",
  ],
  whenNotToUse: [
    "서버 오류(연결은 되어 있으므로 오류 상태 사용)",
    "잠깐 끊겼다 바로 붙는 경우(조용히 다시 시도하기)",
    "입력 중인 폼을 지울 때(입력은 지우지 말고 위에 배너로 알리기)",
  ],
  alternatives: [
    { name: "오류 화면", slug: "error-state", reason: "서버나 요청 자체가 실패했을 때" },
    { name: "배너 알림", slug: "alert-banner", reason: "화면은 그대로 두고 연결 상태만 알릴 때" },
  ],
  accessibility: [
    'role="status"로 연결이 끊긴 사실을 포커스를 옮기지 않고 알립니다.',
    "useSyncExternalStore로 online, offline 이벤트를 구독해 연결되면 바로 내용을 다시 보여 줍니다.",
    "아이콘은 장식이라 aria-hidden으로 두고, 문구로 상황을 전합니다.",
    '다시 시도 결과("아직 연결되지 않았어요")도 글로 알려 줍니다.',
  ],
  tags: [...BASE_TAGS, "navigator.onLine", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/offline-state/OfflineStateDemo").then(
      (m) => m.OfflineStateDemo,
    ),
  Thumbnail: OfflineStateThumbnail,
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
