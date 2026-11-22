import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as EmptiedStateDemo: delete the last item → the cart is empty → 되돌리기. */
export function EmptiedStateThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-emp-cart absolute top-[8px] left-[24px] h-[50px] w-[128px] rounded-md border border-slate-200 opacity-0">
        <p className="absolute top-[5px] left-[8px] text-[7px] font-semibold">장바구니</p>
        <span className="absolute inset-x-0 top-[18px] h-px bg-slate-100" />
        <p className="absolute top-[23px] left-[8px] text-[7px]">무선 이어폰</p>
        <p className="absolute top-[33px] left-[8px] text-[6px] text-slate-500">89,000원</p>
        <span className="absolute top-[25px] left-[98px] grid h-[12px] w-[22px] place-items-center rounded border border-slate-300 text-[6px] font-medium text-slate-600">
          삭제
        </span>
      </div>

      <div className="thumb-anim thumb-emp-empty absolute top-[8px] left-[24px] h-[70px] w-[128px] rounded-md border border-dashed border-slate-300 text-center">
        <p className="absolute inset-x-0 top-[12px] text-[7.5px] font-semibold">
          장바구니가 비었어요
        </p>
        <p className="absolute inset-x-0 top-[24px] text-[6px] text-slate-500">
          방금 ‘무선 이어폰’을 뺐어요.
        </p>
        <span className="absolute top-[40px] left-[20px] grid h-[13px] w-[36px] place-items-center rounded border border-slate-300 text-[6px] font-medium">
          되돌리기
        </span>
        <span className="absolute top-[40px] left-[60px] grid h-[13px] w-[48px] place-items-center rounded bg-slate-900 text-[6px] font-semibold text-white">
          쇼핑 계속하기
        </span>
      </div>
      <ThumbCursor motion="thumb-emp-cursor" />
    </ThumbStage>
  );
}
