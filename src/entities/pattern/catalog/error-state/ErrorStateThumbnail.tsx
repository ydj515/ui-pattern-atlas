import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PRODUCT_ERROR = {
  title: "상품을 불러오지 못했어요",
  description: "잠시 후 다시 시도해 주세요.",
  retry: "다시 시도",
  retrying: "불러오는 중…",
  resultTitle: "상품 목록",
  products: ["무선 이어폰", "니트 가디건"],
} as const;

export function ErrorStateThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-error-screen absolute inset-0 text-center">
        <span className="absolute top-[11px] left-[77px] grid size-[22px] place-items-center rounded-full bg-rose-100 font-bold text-rose-700">
          !
        </span>
        <p className="absolute inset-x-0 top-[39px] text-[9px] font-semibold">
          {PRODUCT_ERROR.title}
        </p>
        <p className="absolute inset-x-0 top-[54px] text-slate-600">{PRODUCT_ERROR.description}</p>
        <span className="absolute top-[73px] left-[54px] grid h-[18px] w-[68px] place-items-center rounded bg-slate-900 font-semibold text-white">
          <span className="thumb-anim thumb-error-retry">{PRODUCT_ERROR.retry}</span>
          <span className="thumb-anim thumb-error-retrying absolute">{PRODUCT_ERROR.retrying}</span>
        </span>
      </div>
      <div className="thumb-anim thumb-error-loaded absolute inset-x-[14px] top-[17px] rounded-md border border-slate-200 px-2.5 py-2">
        <p className="font-semibold">{PRODUCT_ERROR.resultTitle}</p>
        <ul className="mt-1 divide-y divide-slate-100 text-slate-700">
          {PRODUCT_ERROR.products.map((product) => (
            <li key={product} className="py-1">
              {product}
            </li>
          ))}
        </ul>
      </div>
      <ThumbCursor motion="thumb-error-cursor" />
    </ThumbStage>
  );
}
