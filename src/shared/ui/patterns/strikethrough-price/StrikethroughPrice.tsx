const DEFAULT_LABELS = {
  reference: "기준 가격",
  current: "적용 가격",
  regular: "판매가",
  condition: "조건",
};

interface StrikethroughPriceProps {
  readonly referencePrice?: string;
  readonly price: string;
  readonly condition?: string;
  readonly labels?: typeof DEFAULT_LABELS;
}

export function StrikethroughPrice({
  referencePrice,
  price,
  condition,
  labels = DEFAULT_LABELS,
}: StrikethroughPriceProps) {
  return (
    <dl className="grid gap-1.5 text-sm text-slate-700">
      {referencePrice ? (
        <div className="flex gap-2">
          <dt>{labels.reference}</dt>
          <dd>
            <s>{referencePrice}</s>
          </dd>
        </div>
      ) : null}
      <div className="flex gap-2">
        <dt>{referencePrice ? labels.current : labels.regular}</dt>
        <dd className="font-semibold text-slate-900">{price}</dd>
      </div>
      {condition ? (
        <div className="flex gap-2 text-xs">
          <dt>{labels.condition}</dt>
          <dd>{condition}</dd>
        </div>
      ) : null}
    </dl>
  );
}
