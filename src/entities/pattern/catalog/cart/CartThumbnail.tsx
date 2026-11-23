import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

function Check({ off }: { readonly off?: string }) {
  return (
    <span className="relative inline-block size-[6px] rounded-[1.5px] border border-slate-400">
      <span
        className={`${off ? `thumb-anim ${off} ` : ""}absolute -inset-px rounded-[1.5px] bg-slate-900 text-center text-[4.5px] leading-[6px] text-white`}
      >
        ✓
      </span>
    </span>
  );
}

function Three({
  motion,
  values,
}: {
  readonly motion: string;
  readonly values: readonly string[];
}) {
  return (
    <span className="grid">
      {values.map((value, index) => (
        <span
          key={value}
          className={`thumb-anim ${motion}${index} col-start-1 row-start-1`}
          style={index === 0 ? undefined : HIDDEN}
        >
          {value}
        </span>
      ))}
    </span>
  );
}

/** Same cart as CartDemo: leaving 캔버스 백 out and adding a 행주 change only what is paid for. */
export function CartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">장바구니</b>
        <p className="mt-[2px] flex items-center gap-[3px] text-slate-700">
          <Check off="thumb-co-ct-all" />
          전체 선택
        </p>
        {[
          ["린넨 셔츠", "39,000원", "1", undefined],
          ["캔버스 백", "29,000원", "1", "thumb-co-ct-bag"],
        ].map(([name, price, quantity, off]) => (
          <p key={name} className="mt-[3px] flex items-center gap-[3px]">
            <Check off={off} />
            <span className="flex-1">
              {name} <span className="text-slate-500">{price}</span>
            </span>
            <span>− {quantity} +</span>
          </p>
        ))}
        <p className="mt-[3px] flex items-center gap-[3px]">
          <Check />
          <span className="flex-1">
            주방 행주 <Three motion="thumb-co-ct-tp" values={["24,000원", "36,000원"]} />
          </span>
          <span className="flex gap-[2px]">
            − <Three motion="thumb-co-ct-q" values={["2", "3"]} /> +
          </span>
        </p>
        <p className="mt-[4px] flex justify-between border-t border-slate-100 pt-[2px]">
          <span className="text-slate-600">주문 금액</span>
          <b>
            <Three motion="thumb-co-ct-t" values={["92,000원", "63,000원", "75,000원"]} />
          </b>
        </p>
        <span className="mt-[3px] block rounded-[3px] bg-slate-900 py-[2px] text-center font-semibold text-white">
          <Three motion="thumb-co-ct-btn" values={["3개 상품 주문하기", "2개 상품 주문하기"]} />
        </span>
      </div>
      <ThumbCursor motion="thumb-co-ct-cursor" />
    </ThumbStage>
  );
}
