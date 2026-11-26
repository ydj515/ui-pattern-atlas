import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const inputMaskPattern: Pattern = {
  slug: "input-mask",
  name: "Input Mask",
  nameKo: "입력 마스크",
  aliases: ["자동 하이픈", "전화번호 형식", "카드번호 입력", "masked input", "formatter"],
  category: "text-input",
  summary: "전화번호, 카드번호 자동 하이픈",
  description:
    "숫자만 입력해도 하이픈이나 띄어쓰기를 알맞은 자리에 넣어 주는 패턴입니다. 사용자는 형식을 신경 쓰지 않고, 저장되는 값은 숫자만 남아 서버에서 다루기 쉽습니다.",
  whenToUse: [
    "전화번호, 카드번호, 사업자등록번호처럼 형식이 고정된 번호",
    "자릿수가 많아 끊어 읽어야 실수가 줄 때",
    "붙여넣은 번호의 형식이 제각각일 때",
  ],
  whenNotToUse: [
    "나라마다 형식이 다른 국제 전화번호(국가 선택과 함께 쓰기)",
    "이름, 주소처럼 형식이 없는 글",
    "입력 중 커서가 튀면 안 되는 긴 텍스트",
  ],
  alternatives: [
    { name: "텍스트 필드", slug: "text-field", reason: "형식이 정해지지 않은 입력" },
    { name: "인증번호 입력", slug: "otp-input", reason: "짧은 코드를 칸별로 받을 때" },
  ],
  accessibility: [
    "라벨에 무엇을 넣는지 쓰고, 형식 예시는 placeholder와 안내 문구로 보여 줍니다.",
    'inputmode="numeric"과 autocomplete(tel, cc-number)로 키패드와 자동 채우기를 맞춥니다.',
    "구분자가 들어가도 커서가 방금 입력한 숫자 뒤에 머물러 이어서 쓸 수 있습니다.",
    "구분자를 지워도 숫자만 다시 계산하므로 Backspace가 막히지 않습니다.",
  ],
  tags: [...BASE_TAGS, "inputmode", "autocomplete"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/input-mask/InputMaskDemo").then((m) => m.InputMaskDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/input-mask/InputMaskThumbnail").then(
      (m) => m.InputMaskThumbnail,
    ),
  sources: [
    {
      fileName: "MaskedInput.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/input-mask/MaskedInput.tsx?raw"),
    },
    {
      fileName: "InputMaskDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/input-mask/InputMaskDemo.tsx?raw"),
    },
  ],
};
