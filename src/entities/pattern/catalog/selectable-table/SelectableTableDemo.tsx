import { useState } from "react";

import { SelectableTable } from "@/shared/ui/patterns/selectable-table/SelectableTable";

const ORDERS = [
  { id: "A-1021", customer: "김하늘", status: "결제 완료" },
  { id: "A-1022", customer: "이도윤", status: "배송 중" },
  { id: "A-1023", customer: "박서준", status: "결제 완료" },
  { id: "A-1024", customer: "최유나", status: "배송 완료" },
] as const;

export function SelectableTableDemo() {
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set());
  const [archived, setArchived] = useState<readonly string[]>([]);
  const rows = ORDERS.filter((order) => !archived.includes(order.id));

  return (
    <div className="w-full max-w-sm">
      <SelectableTable
        caption="주문 목록"
        headers={["주문 번호", "고객", "상태"]}
        rows={rows}
        rowKey={(row) => row.id}
        renderCells={(row) => [row.id, row.customer, row.status]}
        selected={selected}
        onSelectedChange={setSelected}
        selectAllLabel="주문 모두 선택"
        selectRowLabel={(row) => `${row.id} 선택`}
        actions={
          <>
            <span className="font-medium text-blue-900">{selected.size}개 선택</span>
            <button
              type="button"
              onClick={() => {
                setArchived((current) => [...current, ...selected]);
                setSelected(new Set());
              }}
              className="ml-auto rounded-md bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white"
            >
              보관하기
            </button>
          </>
        }
      />
    </div>
  );
}
