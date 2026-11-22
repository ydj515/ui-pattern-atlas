import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same block as DisclosureDemo: open 환불은 언제 되나요? → the answer shows below. */
export function DisclosureThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[12px] left-[24px] text-[6.5px] text-slate-700">
        주문하신 상품은 내일 도착해요.
      </p>
      <div className="thumb-anim thumb-dc-closed absolute top-[26px] left-[24px] flex h-[18px] w-[128px] items-center justify-between rounded-md border border-slate-200 px-[8px] text-[7px] font-semibold opacity-0">
        환불은 언제 되나요?<span className="text-slate-500">▾</span>
      </div>
      <div className="thumb-anim thumb-dc-open absolute top-[26px] left-[24px] w-[128px] rounded-md border border-slate-200">
        <p className="flex h-[18px] items-center justify-between px-[8px] text-[7px] font-semibold">
          환불은 언제 되나요?<span className="rotate-180 text-slate-500">▾</span>
        </p>
        <p className="border-t border-slate-100 px-[8px] py-[5px] text-[6px] leading-[9px] text-slate-600">
          반품 상품이 창고에 도착하면 1~3일 안에 결제한 수단으로 돌려드려요. 카드는 카드사 사정에
          따라 며칠 더 걸릴 수 있어요.
        </p>
      </div>
      <ThumbCursor motion="thumb-dc-cursor" />
    </ThumbStage>
  );
}
