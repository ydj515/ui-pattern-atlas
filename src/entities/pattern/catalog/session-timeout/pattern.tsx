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
  tags: [...BASE_TAGS, "alertdialog", "timeout", "WCAG 2.2.1"],
  loadGuide: () => import("@/entities/pattern/catalog/session-timeout/guide").then((m) => m.guide),
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
