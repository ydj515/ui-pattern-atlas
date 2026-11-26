import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const progressToastPattern: Pattern = {
  slug: "progress-toast",
  name: "Progress Toast",
  nameKo: "진행 알림",
  aliases: [
    "업로드 진행",
    "진행률 토스트",
    "다운로드 알림",
    "upload toast",
    "progress notification",
  ],
  category: "feedback",
  summary: "오래 걸리는 작업의 진행 알림",
  description:
    "업로드나 내보내기처럼 오래 걸리는 작업을 화면 구석의 토스트로 보여 주는 패턴입니다. 진행률을 확인하면서 다른 일을 계속할 수 있고, 필요하면 취소할 수 있습니다.",
  whenToUse: [
    "파일 업로드, 내보내기처럼 몇 초 이상 걸리는 작업",
    "작업이 끝날 때까지 다른 화면을 써도 될 때",
    "진행 중에 취소할 수 있어야 할 때",
  ],
  whenNotToUse: [
    "1초 안에 끝나는 작업(스피너나 버튼 상태로 충분)",
    "끝날 때까지 다른 조작을 막아야 하는 작업",
    "진행률을 알 수 없는 작업(스피너 사용)",
  ],
  alternatives: [
    { name: "프로그레스 바", slug: "progress-bar", reason: "작업 화면 안에서 진행률을 보여 줄 때" },
    { name: "토스트", slug: "toast", reason: "끝난 결과만 짧게 알릴 때" },
    { name: "스피너", slug: "spinner", reason: "진행률을 알 수 없을 때" },
  ],
  accessibility: [
    '문구는 role="status"에 있어 시작, 완료, 취소를 정중하게 읽어 줍니다.',
    '막대는 role="progressbar"와 aria-valuenow로 현재 값을 알립니다.',
    "취소 버튼은 진행 중에만 보이고, 작업이 끝나면 결과 문구로 바뀝니다.",
    "막대 움직임은 동작 줄이기 설정에서 전환 효과 없이 바로 바뀝니다.",
  ],
  tags: [...BASE_TAGS, "role=status", "progressbar"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/progress-toast/ProgressToastDemo").then(
      (m) => m.ProgressToastDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/progress-toast/ProgressToastThumbnail").then(
      (m) => m.ProgressToastThumbnail,
    ),
  sources: [
    {
      fileName: "ProgressToast.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/progress-toast/ProgressToast.tsx?raw"),
    },
    {
      fileName: "ProgressToastDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/progress-toast/ProgressToastDemo.tsx?raw"),
    },
  ],
};
