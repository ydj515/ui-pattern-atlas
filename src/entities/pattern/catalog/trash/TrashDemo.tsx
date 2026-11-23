import { useState } from "react";
import { Trash } from "@/shared/ui/patterns/trash/Trash";

const ITEMS = [
  { id: "notes", name: "회의록", daysLeft: 29 },
  { id: "places", name: "성수동 맛집 목록", daysLeft: 12 },
  { id: "checklist", name: "이사 체크리스트", daysLeft: 2 },
];

export function TrashDemo() {
  const [items, setItems] = useState(ITEMS);
  const [restored, setRestored] = useState<string | null>(null);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <Trash
        items={items}
        onRestore={(id) => {
          setRestored(items.find((item) => item.id === id)?.name ?? null);
          setItems((current) => current.filter((item) => item.id !== id));
        }}
        labels={{
          title: "휴지통",
          note: "휴지통의 항목은 30일 뒤 영구 삭제돼요",
          empty: "휴지통이 비어 있어요",
          daysLeft: (days) => `${days}일 뒤 영구 삭제`,
          restore: "복원",
          restoreName: (name) => `${name} 복원`,
        }}
      />
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {restored ? `${restored}을 원래 폴더로 되돌렸어요` : ""}
      </p>
    </section>
  );
}
