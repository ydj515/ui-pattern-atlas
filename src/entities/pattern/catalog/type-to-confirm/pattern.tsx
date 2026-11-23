import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TypeToConfirmThumbnail } from "@/entities/pattern/catalog/type-to-confirm/TypeToConfirmThumbnail";

export const typeToConfirmPattern: Pattern = {
  slug: "type-to-confirm",
  name: "Type to Confirm",
  nameKo: "입력해서 확인",
  aliases: ["이름 입력 확인", "삭제 확인 입력", "type to delete", "confirm by typing"],
  category: "risky-actions",
  summary: "지울 대상의 이름을 입력해야 켜지는 삭제 버튼",
  description:
    "되돌릴 수 없는 삭제 앞에서 함께 사라지는 것을 보여 주고, 지울 대상의 이름을 그대로 입력해야 버튼이 켜지게 하는 확인입니다. 습관처럼 누르는 확인 버튼보다 한 번 더 읽고 생각하게 만듭니다.",
  whenToUse: [
    "되돌릴 수 없는 삭제",
    "다른 사람에게도 영향이 가는 삭제",
    "비슷한 이름의 대상을 헷갈릴 수 있을 때",
  ],
  whenNotToUse: [
    "휴지통으로 옮기는 정도의 되돌릴 수 있는 삭제(휴지통 사용)",
    "자주 하는 가벼운 동작",
    "입력할 이름이 너무 길거나 외우기 어려울 때",
  ],
  alternatives: [
    {
      name: "확인 다이얼로그",
      slug: "confirmation-dialog",
      reason: "가벼운 확인 한 번으로 충분할 때",
    },
    { name: "길게 눌러 확인", slug: "hold-to-confirm", reason: "길게 눌러 확인할 때" },
    { name: "회원 탈퇴", slug: "account-deletion", reason: "계정 전체를 지울 때" },
  ],
  accessibility: [
    'role="alertdialog"로 제목과 사라지는 항목 목록을 이름과 설명으로 이어 둡니다.',
    "입력이 맞기 전에는 버튼이 disabled입니다.",
    "자동 완성과 맞춤법 검사를 꺼 입력이 바뀌지 않게 합니다.",
  ],
  tags: [...BASE_TAGS, "alertdialog", "disabled", "autocomplete=off"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/type-to-confirm/TypeToConfirmDemo").then(
      (m) => m.TypeToConfirmDemo,
    ),
  Thumbnail: TypeToConfirmThumbnail,
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
