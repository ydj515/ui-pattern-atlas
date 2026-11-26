import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const emailVerificationPattern: Pattern = {
  slug: "email-verification",

  name: "Email Verification",
  nameKo: "이메일 인증 안내",
  aliases: ["인증 메일", "메일 확인", "verify email", "confirmation email", "check your inbox"],
  category: "auth",
  summary: "메일을 보낸 곳과 다시 보내기를 알려 주는 대기 화면",
  description:
    "가입 뒤 인증 메일을 기다리는 화면입니다. 어느 주소로 보냈는지, 안 오면 무엇을 확인할지 알려 주고, 잠시 기다린 뒤 다시 보내거나 잘못 적은 주소를 고칠 수 있게 합니다.",
  tags: [...BASE_TAGS, "setInterval", "role=status"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/email-verification/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/email-verification/EmailVerificationDemo").then(
      (m) => m.EmailVerificationDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/email-verification/EmailVerificationThumbnail").then(
      (m) => m.EmailVerificationThumbnail,
    ),
  sources: [
    {
      fileName: "EmailVerification.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/email-verification/EmailVerification.tsx?raw"),
    },
    {
      fileName: "EmailVerificationDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/email-verification/EmailVerificationDemo.tsx?raw"),
    },
  ],
};
