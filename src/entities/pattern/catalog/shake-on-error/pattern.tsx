import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const shakeOnErrorPattern: Pattern = {
  slug: "shake-on-error",

  name: "Shake on Error",
  nameKo: "흔들림 오류",
  aliases: ["흔들기", "고개 젓기", "shake animation", "error shake"],
  category: "motion",
  summary: "틀린 입력을 좌우로 흔들어 알리기",
  description:
    "비밀번호가 틀렸을 때 입력란이 고개를 젓듯 좌우로 짧게 흔들리는 패턴입니다. 흔들림은 강조일 뿐이라 빨간 테두리와 오류 문구를 함께 보여 줍니다.",
  tags: [...BASE_TAGS, "Web Animations API", "aria-invalid", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/shake-on-error/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/shake-on-error/ShakeDemo").then((m) => m.ShakeDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/shake-on-error/ShakeThumbnail").then(
      (m) => m.ShakeThumbnail,
    ),
  sources: [
    {
      fileName: "Shake.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/shake-on-error/Shake.tsx?raw"),
    },
    {
      fileName: "ShakeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/shake-on-error/ShakeDemo.tsx?raw"),
    },
  ],
};
