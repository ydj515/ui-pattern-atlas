import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ORDERS = [
  ["A-1021", "김하늘", "결제 완료"],
  ["A-1022", "이도윤", "배송 중"],
  ["A-1023", "박서준", "결제 완료"],
  ["A-1024", "최유나", "배송 완료"],
] as const;

function Box({
  checked,
  className = "",
}: {
  readonly checked?: boolean;
  readonly className?: string;
}) {
  return (
    <span
      className={`absolute top-[3.5px] left-[6px] grid size-[6px] place-items-center rounded-[1.5px] ${checked ? "bg-blue-600 text-[4px] text-white" : "border border-slate-400"} ${className}`}
    >
      {checked ? "✓" : ""}
    </span>
  );
}

function Row({ order, top }: { readonly order: (typeof ORDERS)[number]; readonly top: number }) {
  return (
    <p
      className="absolute inset-x-0 h-[13px] border-b border-slate-100 text-[6px] leading-[13px]"
      style={{ top }}
    >
      <Box />
      <span className="absolute left-[18px] font-medium">{order[0]}</span>
      <span className="absolute left-[56px]">{order[1]}</span>
      <span className="absolute left-[92px] text-slate-600">{order[2]}</span>
    </p>
  );
}

/** Same flow as SelectableTableDemo: check two orders → 2개 선택 → 보관하기. */
export function SelectableTableThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[14px] h-[86px] w-[148px] overflow-hidden rounded-md border border-slate-200">
        <div className="thumb-anim thumb-stbl-bar1 absolute inset-x-0 top-0 h-[14px] bg-blue-50 px-[6px] text-[6px] leading-[14px] font-medium text-blue-900 opacity-0">
          1개 선택
        </div>
        <div className="thumb-anim thumb-stbl-bar2 absolute inset-x-0 top-0 h-[14px] bg-blue-50 px-[6px] text-[6px] leading-[14px] font-medium text-blue-900 opacity-0">
          2개 선택
          <span className="absolute top-[2px] right-[6px] grid h-[10px] w-[28px] place-items-center rounded-[2px] bg-slate-900 text-[5px] font-semibold text-white">
            보관하기
          </span>
        </div>
        <p className="absolute inset-x-0 top-[14px] h-[13px] border-y border-slate-200 bg-slate-50 text-[5.5px] leading-[12px] text-slate-600">
          <Box />
          <span className="absolute left-[18px]">주문 번호</span>
          <span className="absolute left-[56px]">고객</span>
          <span className="absolute left-[92px]">상태</span>
        </p>
        <div className="thumb-anim thumb-stbl-before opacity-0">
          {ORDERS.map((order, index) => (
            <Row key={order[0]} order={order} top={27 + index * 13} />
          ))}
          <span className="thumb-anim thumb-stbl-c1 absolute inset-x-0 top-[27px] h-[13px] bg-blue-600/10">
            <Box checked />
          </span>
          <span className="thumb-anim thumb-stbl-c3 absolute inset-x-0 top-[53px] h-[13px] bg-blue-600/10">
            <Box checked />
          </span>
        </div>
        <div className="thumb-anim thumb-stbl-after">
          <Row order={ORDERS[1]} top={27} />
          <Row order={ORDERS[3]} top={40} />
        </div>
      </div>
      <ThumbCursor motion="thumb-stbl-cursor" />
    </ThumbStage>
  );
}
