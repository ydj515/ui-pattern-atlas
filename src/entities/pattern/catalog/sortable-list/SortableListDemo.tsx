import { useState } from "react";

import { SortableList, type SortableItem } from "@/shared/ui/patterns/sortable-list/SortableList";

const INITIAL: readonly SortableItem[] = [
  { id: "coffee", label: "커피 원두 사기" },
  { id: "mail", label: "메일 답장하기" },
  { id: "report", label: "보고서 마무리" },
  { id: "gym", label: "운동하기" },
];

export function SortableListDemo() {
  const [items, setItems] = useState(INITIAL);

  return (
    <div className="w-full max-w-xs space-y-2">
      <p className="text-sm font-semibold text-slate-900">오늘 할 일 순서</p>
      <SortableList
        label="오늘 할 일"
        items={items}
        onChange={setItems}
        handleLabel={(item) => `${item} 순서 바꾸기. 위아래 화살표로 옮겨요`}
        movedText={(item, position, total) => `${item}, ${total}개 중 ${position}번째`}
      />
    </div>
  );
}
