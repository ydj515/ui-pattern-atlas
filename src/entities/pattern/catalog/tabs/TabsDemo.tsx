import { Tabs } from "@/shared/ui/patterns/tabs/Tabs";

export function TabsDemo() {
  return (
    <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-4">
      <Tabs
        label="상품 정보"
        items={[
          {
            id: "detail",
            label: "상세 정보",
            content: (
              <p className="text-sm leading-6 text-slate-600">
                스테인리스 바스켓, 용량 5.5L, 최대 200℃까지 설정할 수 있어요.
              </p>
            ),
          },
          {
            id: "reviews",
            label: "리뷰 128",
            content: (
              <p className="text-sm leading-6 text-slate-600">
                ★ 4.7 · "세척이 쉬워요", "소음이 작아요"
              </p>
            ),
          },
          {
            id: "shipping",
            label: "배송/교환",
            content: (
              <p className="text-sm leading-6 text-slate-600">
                오늘 오후 2시 전 주문 시 내일 도착해요. 30일 안에 무료로 교환할 수 있어요.
              </p>
            ),
          },
        ]}
      />
    </div>
  );
}
