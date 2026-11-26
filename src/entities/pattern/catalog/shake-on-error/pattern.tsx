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
  whenToUse: [
    "비밀번호, 인증 번호처럼 틀리면 다시 입력해야 하는 칸",
    "제출 직후 오류를 바로 알려야 할 때",
    "오류 위치가 시선에서 가까울 때",
  ],
  whenNotToUse: [
    "여러 칸의 오류를 한꺼번에 알릴 때(오류 요약 사용)",
    "입력 중에 실시간으로 검사할 때(인라인 검증 사용)",
    "흔들림만 있고 오류 문구가 없을 때",
  ],
  alternatives: [
    { name: "인라인 오류", slug: "inline-validation", reason: "칸마다 바로 오류를 보여 줄 때" },
    { name: "오류 요약", slug: "error-summary", reason: "여러 오류를 한곳에 모을 때" },
  ],
  accessibility: [
    "aria-invalid와 aria-describedby로 오류 문구를 입력란에 연결합니다.",
    "오류 문구는 role=status라 화면 읽기에서도 들립니다.",
    "동작 줄이기에서는 흔들지 않고 색과 문구만 바꿉니다.",
    "색 외에 글자로도 오류를 알려 색을 구분하기 어려운 사람도 알 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "Web Animations API", "aria-invalid", "Reduced motion"],
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
