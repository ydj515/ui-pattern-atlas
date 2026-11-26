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
  tags: [...BASE_TAGS, "inputmode", "autocomplete"],
  loadGuide: () => import("@/entities/pattern/catalog/input-mask/guide").then((m) => m.guide),
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
