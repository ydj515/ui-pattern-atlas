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
  origin:
    "토스터에서 다 구운 빵이 톡 튀어 오르듯, 화면 가장자리에서 올라왔다가 사라지는 모습에서 붙은 이름이에요. 2000년대 초 마이크로소프트 MSN 메신저의 알림 창을 부르던 말로 알려져 있고, 2008년 안드로이드가 같은 이름의 Toast API를 내놓으며 널리 쓰이게 됐어요.",
  whenToUse: [
    "저장, 복사, 찜하기처럼 결과가 명확한 작업을 확인시켜 줄 때",
    "방금 한 작업을 되돌릴 기회를 짧게 제공할 때",
    "사용자가 다른 작업을 계속해도 되는 가벼운 알림일 때",
  ],
  whenNotToUse: [
    "놓치면 안 되는 오류나 경고일 때",
    "사용자의 결정이 필요한 상황일 때",
    "메시지가 길거나 여러 개의 액션이 필요할 때",
  ],
  alternatives: [
    { name: "배너 알림", slug: "alert-banner", reason: "사라지면 안 되는 중요한 안내" },
    { name: "모달 다이얼로그", slug: "modal-dialog", reason: "결정이 필요한 경우" },
    { name: "인라인 오류", slug: "inline-validation", reason: "특정 입력 필드의 오류" },
  ],
  accessibility: [
    '항상 마운트된 aria-live="polite" 영역에 메시지를 추가해 스크린 리더가 읽게 합니다.',
    "마우스를 올리거나 포커스하면 자동 닫힘 타이머가 멈춥니다(WCAG 2.2.1).",
    "되돌리기 액션은 다른 경로(예: 찜 버튼 재클릭)로도 수행할 수 있어야 합니다.",
    "색상만으로 성공/실패를 구분하지 않고 메시지 문구로 결과를 전달합니다.",
  ],
  tags: [...BASE_TAGS, "aria-live", "Context API"],
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
