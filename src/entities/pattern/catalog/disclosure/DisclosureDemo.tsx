import { Disclosure } from "@/shared/ui/patterns/disclosure/Disclosure";

export function DisclosureDemo() {
  return (
    <div className="w-full max-w-xs space-y-3">
      <p className="text-sm text-slate-700">주문하신 상품은 내일 도착해요.</p>
      <Disclosure summary="환불은 언제 되나요?">
        반품 상품이 창고에 도착하면 1~3일 안에 결제한 수단으로 돌려드려요. 카드는 카드사 사정에 따라
        며칠 더 걸릴 수 있어요.
      </Disclosure>
    </div>
  );
}
