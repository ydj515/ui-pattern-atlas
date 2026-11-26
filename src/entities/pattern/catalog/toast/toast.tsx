import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const toastPattern: Pattern = {
  slug: "toast",

  name: "Toast",
  nameKo: "토스트",
  aliases: ["스낵바", "snackbar", "알림 메시지", "완료 메시지", "notification"],
  category: "feedback",
  summary: "잠깐 나타났다 사라지는 처리 결과 메시지",
  description:
    "사용자의 행동 결과를 화면 하단이나 상단에 잠시 보여주고 자동으로 사라지는 패턴입니다. 작업 흐름을 방해하지 않으면서 결과를 확인시켜 줍니다. 되돌리기 같은 짧은 액션을 함께 제공할 수 있습니다(스낵바).",
  tags: [...BASE_TAGS, "aria-live", "Context API"],
  loadGuide: () => import("@/entities/pattern/catalog/toast/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/toast/ToastDemo").then((m) => m.ToastDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/toast/ToastThumbnail").then((m) => m.ToastThumbnail),
  sources: [
    {
      fileName: "Toast.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/toast/Toast.tsx?raw"),
    },
    {
      fileName: "ToastDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/toast/ToastDemo.tsx?raw"),
    },
  ],
};
