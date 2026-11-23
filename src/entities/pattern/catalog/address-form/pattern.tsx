import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { AddressFormThumbnail } from "@/entities/pattern/catalog/address-form/AddressFormThumbnail";

export const addressFormPattern: Pattern = {
  slug: "address-form",
  name: "Address Form",
  nameKo: "배송지 입력",
  aliases: ["주소 입력", "우편번호 검색", "주소 찾기", "shipping address", "address lookup"],
  category: "checkout",
  summary: "검색해서 고르고 상세 주소만 입력",
  description:
    "도로명이나 건물 이름으로 주소를 검색해 목록에서 고르고, 상세 주소만 직접 입력하는 배송지 폼입니다. 주소를 고르면 상세 주소 칸으로 바로 포커스가 옮겨 가고, 기본 배송지로 저장할 수 있습니다.",
  whenToUse: [
    "택배 배송지를 받을 때",
    "오타 없는 정확한 주소가 필요할 때",
    "같은 주소를 다음에도 쓸 때",
  ],
  whenNotToUse: [
    "저장된 배송지 중 고르기만 할 때(목록 선택 사용)",
    "해외 주소처럼 형식이 다를 때",
    "지도에서 위치를 찍어야 할 때",
  ],
  alternatives: [
    { name: "콤보박스", slug: "combobox", reason: "목록에서 하나를 고르는 입력" },
    { name: "결제 금액 확인", slug: "checkout-summary", reason: "배송지 다음 결제 단계" },
  ],
  accessibility: [
    '검색 영역은 role="search"인 form입니다.',
    "검색 결과는 버튼 목록이라 키보드로 고를 수 있습니다.",
    "주소를 고르면 상세 주소 칸으로 포커스를 옮깁니다.",
  ],
  tags: [...BASE_TAGS, "role=search", "autocomplete", "focus"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/address-form/AddressFormDemo").then(
      (m) => m.AddressFormDemo,
    ),
  Thumbnail: AddressFormThumbnail,
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
