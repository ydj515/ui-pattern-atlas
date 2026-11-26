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
  whenToUse: [
    "저장, 결제처럼 응답을 기다려야 하는 행동",
    "같은 요청이 두 번 가면 안 될 때",
    "결과를 버튼 근처에서 바로 보여 주고 싶을 때",
  ],
  whenNotToUse: [
    "몇 초 이상 걸리는 작업(진행 알림 사용)",
    "결과가 화면 전체를 바꿀 때(이동한 화면에서 알리기)",
    "응답을 기다릴 필요 없는 가벼운 작업(낙관적 업데이트 사용)",
  ],
  alternatives: [
    { name: "진행 알림", slug: "progress-toast", reason: "오래 걸리는 작업" },
    { name: "낙관적 업데이트", slug: "optimistic-ui", reason: "결과를 먼저 보여 줘도 될 때" },
  ],
  accessibility: [
    "처리 중에는 disabled 대신 aria-disabled와 aria-busy를 써서 포커스가 버튼에 남습니다.",
    '상태 문구(저장하는 중, 저장했어요)를 role="status"로 알립니다.',
    "아이콘과 함께 글로 상태를 바꿔 색에만 의존하지 않습니다.",
    "최소 너비를 두어 상태가 바뀌어도 버튼 크기가 흔들리지 않습니다.",
  ],
  tags: [...BASE_TAGS, "aria-busy", "role=status"],
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
