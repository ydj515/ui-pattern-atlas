import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const addressFormPattern: Pattern = {
  slug: "address-form",

  name: "Address Form",
  nameKo: "배송지 입력",
  aliases: ["주소 입력", "우편번호 검색", "주소 찾기", "shipping address", "address lookup"],
  category: "checkout",
  summary: "검색해서 고르고 상세 주소만 입력",
  description:
    "도로명이나 건물 이름으로 주소를 검색해 목록에서 고르고, 상세 주소만 직접 입력하는 배송지 폼입니다. 주소를 고르면 상세 주소 칸으로 바로 포커스가 옮겨 가고, 기본 배송지로 저장할 수 있습니다.",
  tags: [...BASE_TAGS, "role=search", "autocomplete", "focus"],
  loadGuide: () => import("@/entities/pattern/catalog/address-form/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/address-form/AddressFormDemo").then(
      (m) => m.AddressFormDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/address-form/AddressFormThumbnail").then(
      (m) => m.AddressFormThumbnail,
    ),
  sources: [
    {
      fileName: "AddressForm.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/address-form/AddressForm.tsx?raw"),
    },
    {
      fileName: "AddressFormDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/address-form/AddressFormDemo.tsx?raw"),
    },
  ],
};
