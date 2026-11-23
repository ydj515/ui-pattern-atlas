import { type Pattern } from "@/entities/pattern/model/pattern";
import { NaggingThumbnail } from "@/entities/pattern/catalog/nagging/NaggingThumbnail";

export const naggingPattern: Pattern = {
  slug: "nagging",
  kind: "concept",
  name: "Nagging",
  nameKo: "반복 요청",
  aliases: ["졸라대기", "반복 팝업", "persistent prompts", "nag screen"],
  category: "dark-patterns",
  summary: "닫아도 계속 뜨는 요청 (다크 패턴)",
  description:
    "사용자가 거절해도 알림 켜기, 앱 평가, 가입 요청을 화면마다 다시 띄워 결국 동의하게 만드는 다크 패턴입니다. 바른 방법은 한 번 묻고, 다시 묻지 않기를 고를 수 있게 하고 그 선택을 기억하는 것입니다.",
  whenToUse: [
    "권한, 평가, 업그레이드 요청의 빈도를 정할 때",
    "거절을 얼마 동안 기억할지 정할 때",
    "요청 팝업의 선택지를 검토할 때",
  ],
  whenNotToUse: [
    "나중에만 있고 거절이 없을 때",
    "닫을 때마다 다른 화면에서 다시 띄울 때",
    "거절 기록을 앱 업데이트마다 지울 때",
  ],
  alternatives: [
    { name: "권한 요청 안내", slug: "permission-priming", reason: "필요한 순간에 한 번 묻기" },
    { name: "컨펌셰이밍", slug: "confirmshaming", reason: "거절 문구로 압박할 때" },
  ],
  accessibility: [
    "요청은 대화상자로 열고 Esc로 닫을 수 있게 합니다.",
    "다시 묻지 않기를 실제 버튼으로 둡니다.",
    "닫은 뒤 포커스를 원래 자리로 돌려줍니다.",
    "갑자기 뜨는 팝업으로 작업을 끊지 않습니다.",
  ],
  tags: ["다크 패턴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/nagging/NaggingDemo").then((m) => m.NaggingDemo),
  Thumbnail: NaggingThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/nagging/NaggingDemo.tsx?raw"),
};
