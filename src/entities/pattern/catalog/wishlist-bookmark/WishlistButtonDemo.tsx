import { useState } from "react";
import { WishlistButton } from "@/shared/ui/patterns/wishlist-bookmark/WishlistButton";

const ITEMS = [
  { id: "shirt", name: "린넨 셔츠", price: "39,000원", tone: "from-sky-100 to-sky-200" },
  { id: "bag", name: "캔버스 백", price: "29,000원", tone: "from-amber-100 to-amber-200" },
];

export function WishlistButtonDemo() {
  const [saved, setSaved] = useState<ReadonlySet<string>>(new Set(["bag"]));
  const [message, setMessage] = useState("");

  function toggle(id: string, name: string, on: boolean) {
    setSaved((current) => {
      const next = new Set(current);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });
    setMessage(on ? `찜 목록에 담았어요: ${name}` : `찜 목록에서 뺐어요: ${name}`);
  }

  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-4">
      <header className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900">신상품</h3>
        <span className="text-xs text-slate-700 tabular-nums">찜 {saved.size}</span>
      </header>
      <ul className="grid grid-cols-2 gap-2">
        {ITEMS.map((item) => (
          <li key={item.id} className="relative">
            <span className={`block h-28 rounded-xl bg-gradient-to-br ${item.tone}`} />
            <span className="absolute top-2 right-2">
              <WishlistButton
                saved={saved.has(item.id)}
                itemName={item.name}
                onToggle={(on) => toggle(item.id, item.name, on)}
                addLabel="찜하기"
                removeLabel="찜 해제"
              />
            </span>
            <p className="mt-1 text-xs text-slate-800">{item.name}</p>
            <p className="text-xs font-semibold text-slate-900">{item.price}</p>
          </li>
        ))}
      </ul>
      <p role="status" className="mt-2 h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
