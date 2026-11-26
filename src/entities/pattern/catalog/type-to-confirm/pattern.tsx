import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const typeToConfirmPattern: Pattern = {
  slug: "type-to-confirm",

  name: "Type to Confirm",
  nameKo: "입력해서 확인",
  aliases: ["이름 입력 확인", "삭제 확인 입력", "type to delete", "confirm by typing"],
  category: "risky-actions",
  summary: "지울 대상의 이름을 입력해야 켜지는 삭제 버튼",
  description:
    "되돌릴 수 없는 삭제 앞에서 함께 사라지는 것을 보여 주고, 지울 대상의 이름을 그대로 입력해야 버튼이 켜지게 하는 확인입니다. 습관처럼 누르는 확인 버튼보다 한 번 더 읽고 생각하게 만듭니다.",
  tags: [...BASE_TAGS, "alertdialog", "disabled", "autocomplete=off"],
  loadGuide: () => import("@/entities/pattern/catalog/type-to-confirm/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/type-to-confirm/TypeToConfirmDemo").then(
      (m) => m.TypeToConfirmDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/type-to-confirm/TypeToConfirmThumbnail").then(
      (m) => m.TypeToConfirmThumbnail,
    ),
  sources: [
    {
      fileName: "TypeToConfirm.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/type-to-confirm/TypeToConfirm.tsx?raw"),
    },
    {
      fileName: "TypeToConfirmDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/type-to-confirm/TypeToConfirmDemo.tsx?raw"),
    },
  ],
};
