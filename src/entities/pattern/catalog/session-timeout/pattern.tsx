import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const sessionTimeoutPattern: Pattern = {
  slug: "session-timeout",
  name: "Session Timeout Warning",
  nameKo: "자동 로그아웃 안내",
  aliases: ["세션 만료", "로그인 연장", "session expiry", "idle timeout", "keep me signed in"],
  category: "leave-return",
  summary: "남은 시간을 알리고 한 번에 연장하게 하는 경고",
  description:
    "한동안 쓰지 않아 로그인이 끝나기 전에 남은 시간과 연장 버튼을 보여 주는 창입니다. 시간이 지나 로그아웃된 뒤에도 쓰던 내용을 저장해 두었는지 알리고, 다시 로그인하면 이어서 쓸 수 있게 합니다.",
  whenToUse: [
    "금융, 공공처럼 오래 비우면 로그아웃해야 하는 서비스",
    "긴 입력 중에 로그인이 끝날 수 있을 때",
    "공용 기기에서 쓰는 화면",
  ],
  whenNotToUse: [
    "로그인을 오래 유지해도 되는 서비스",
    "남은 시간 없이 갑자기 로그아웃할 때",
    "로그아웃하면서 쓰던 내용을 버릴 때",
  ],
  alternatives: [
    { name: "마감 타이머", slug: "countdown", reason: "남은 시간만 보여 줄 때" },
    { name: "얼럿 다이얼로그", slug: "alert-dialog", reason: "일반적인 경고 창" },
  ],
  accessibility: [
    'role="alertdialog"로 제목과 남은 시간을 이어 읽어 줍니다.',
    "WCAG 2.2.1에 따라 시간 제한을 연장할 방법을 줍니다.",
    "로그아웃되면 다시 로그인 버튼으로 포커스를 옮깁니다.",
  ],
  tags: [...BASE_TAGS, "alertdialog", "timeout", "WCAG 2.2.1"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/session-timeout/SessionTimeoutDemo").then(
      (m) => m.SessionTimeoutDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/session-timeout/SessionTimeoutThumbnail").then(
      (m) => m.SessionTimeoutThumbnail,
    ),
  sources: [
    {
      fileName: "SessionTimeout.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/session-timeout/SessionTimeout.tsx?raw"),
    },
    {
      fileName: "SessionTimeoutDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/session-timeout/SessionTimeoutDemo.tsx?raw"),
    },
  ],
};
