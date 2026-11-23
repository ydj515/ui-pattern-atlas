import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { InlineValidationThumbnail } from "@/entities/pattern/catalog/inline-validation/InlineValidationThumbnail";

export const inlineValidationPattern: Pattern = {
  slug: "inline-validation",
  name: "Inline Validation",
  nameKo: "인라인 오류",
  aliases: [
    "입력 오류",
    "폼 검증",
    "에러 메시지",
    "form validation",
    "error message",
    "text field",
  ],
  category: "feedback",
  summary: "입력 필드 바로 아래에서 무엇이 잘못됐는지 알려주는 메시지",
  description:
    "입력값에 문제가 있을 때 해당 필드 바로 아래에 오류 이유와 고치는 방법을 보여주는 패턴입니다. 사용자가 어디를 고쳐야 하는지 즉시 알 수 있습니다.",
  whenToUse: [
    "이메일, 전화번호처럼 형식이 정해진 값을 입력받을 때",
    "제출 전에 필수 항목 누락을 알려줄 때",
    "비밀번호 규칙처럼 입력 조건을 미리 안내할 때",
  ],
  whenNotToUse: [
    "사용자가 입력을 마치기 전, 글자마다 오류를 띄울 때",
    "서버 장애처럼 특정 필드와 관련 없는 오류일 때",
    "오류 문구가 '잘못된 입력' 같이 해결 방법을 주지 못할 때",
  ],
  alternatives: [
    { name: "배너 알림", slug: "alert-banner", reason: "폼 전체 또는 시스템 오류" },
    { name: "토스트", slug: "toast", reason: "제출 성공 같은 결과 안내" },
  ],
  accessibility: [
    "<label>을 입력 필드와 연결하고 placeholder를 라벨 대신 쓰지 않습니다.",
    "오류 시 aria-invalid를 설정하고 aria-describedby로 안내 문구와 오류 문구를 연결합니다.",
    "오류 문구 영역을 aria-live로 두어 새 오류가 생기면 읽어줍니다.",
    "색상 외에 아이콘과 문장으로 오류를 표시하고, 고치는 방법을 함께 안내합니다.",
  ],
  tags: [...BASE_TAGS, "Forms", "aria-invalid"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/inline-validation/InlineValidationDemo").then(
      (m) => m.InlineValidationDemo,
    ),
  Thumbnail: InlineValidationThumbnail,
  sources: [
    {
      fileName: "TextField.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/inline-validation/TextField.tsx?raw"),
    },
    {
      fileName: "InlineValidationDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/inline-validation/InlineValidationDemo.tsx?raw"),
    },
  ],
};
