import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const otpInputPattern: Pattern = {
  slug: "otp-input",

  name: "OTP Input",
  nameKo: "인증번호 입력",
  aliases: ["인증 코드", "PIN 입력", "one-time code", "verification code"],
  category: "text-input",
  summary: "칸이 나뉜 코드 입력",
  description:
    "문자나 메일로 받은 짧은 숫자 코드를 자리별 칸에 입력받는 패턴입니다. 입력하면 다음 칸으로 넘어가고, 붙여넣기나 문자 자동 채우기로 한 번에 채울 수 있습니다.",
  tags: [...BASE_TAGS, "autocomplete", "inputmode"],
  loadGuide: () => import("@/entities/pattern/catalog/otp-input/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/otp-input/OtpInputDemo").then((m) => m.OtpInputDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/otp-input/OtpInputThumbnail").then(
      (m) => m.OtpInputThumbnail,
    ),
  sources: [
    {
      fileName: "OtpInput.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/otp-input/OtpInput.tsx?raw"),
    },
    {
      fileName: "OtpInputDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/otp-input/OtpInputDemo.tsx?raw"),
    },
  ],
};
