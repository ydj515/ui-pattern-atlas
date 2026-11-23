import { useState } from "react";
import { AddressForm } from "@/shared/ui/patterns/address-form/AddressForm";

const ADDRESSES = [
  { zip: "04768", road: "서울 성동구 뚝섬로 273 (서울숲)" },
  { zip: "04769", road: "서울 성동구 서울숲길 17" },
];

export function AddressFormDemo() {
  const [saved, setSaved] = useState("");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">배송지 입력</h3>
      <AddressForm
        searchPlaceholder="서울숲"
        detailPlaceholder="101동 1203호"
        searchAddress={(query) =>
          query && "서울숲".includes(query.replace(/\s/g, "")) ? ADDRESSES : []
        }
        onSave={(address) => setSaved(`배송지를 저장했어요: ${address.road} ${address.detail}`)}
        labels={{
          search: "주소 검색",
          searchButton: "검색",
          noResults: "찾는 주소가 없어요. 도로명이나 건물 이름으로 찾아보세요",
          picked: "선택한 주소",
          detail: "상세 주소",
          makeDefault: "기본 배송지로 저장",
          save: "배송지 저장",
        }}
      />
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {saved}
      </p>
    </section>
  );
}
