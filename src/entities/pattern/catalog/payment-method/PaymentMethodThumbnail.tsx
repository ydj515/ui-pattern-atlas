import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

function Dot({ motion, base }: { readonly motion: string; readonly base?: boolean }) {
  return (
    <span className="relative inline-block size-[6px] rounded-full border border-slate-400">
      <span
        className={`thumb-anim ${motion} absolute inset-[1px] rounded-full bg-slate-900`}
        style={base ? undefined : HIDDEN}
      />
    </span>
  );
}

/** Same options as PaymentMethodDemo: choosing the card reveals instalments inside that card only. */
export function PaymentMethodThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">결제 수단</b>
        <div className="mt-[2px] rounded-[4px] border border-slate-200 px-[3px] py-[2px]">
          <p className="flex items-center gap-[3px] font-medium">
            <Dot motion="thumb-co-pm-card" />
            신용·체크카드
            <span
              className="thumb-anim thumb-co-pm-inst ml-auto text-[5.5px] font-normal text-slate-700"
              style={HIDDEN}
            >
              할부 <span className="rounded-[2px] border border-slate-300 px-[2px]">일시불 ▾</span>
            </span>
          </p>
        </div>
        <div className="relative mt-[2px] rounded-[4px] border border-slate-200 px-[3px] py-[2px]">
          <p className="flex items-center gap-[3px] font-medium">
            <Dot motion="thumb-co-pm-easy" base />
            간편결제
          </p>
          <p className="text-[5px] text-slate-500">등록한 계좌나 카드로 한 번에</p>
        </div>
        <p className="mt-[2px] flex items-center gap-[3px] rounded-[4px] border border-slate-200 px-[3px] py-[2px] font-medium">
          <Dot motion="thumb-co-pm-none" />
          계좌이체
        </p>
        <p className="mt-[2px] flex items-center gap-[3px] rounded-[4px] border border-slate-200 px-[3px] py-[2px] font-medium">
          <Dot motion="thumb-co-pm-none" />
          휴대폰 결제
        </p>
        <p className="mt-[3px] grid text-[5.5px] text-slate-600">
          <span className="thumb-anim thumb-co-pm-s-from col-start-1 row-start-1">
            {"간편결제"}로 결제해요
          </span>
          <span className="thumb-anim thumb-co-pm-s-to col-start-1 row-start-1" style={HIDDEN}>
            {"신용·체크카드 · 일시불"}로 결제해요
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-co-pm-cursor" />
    </ThumbStage>
  );
}
