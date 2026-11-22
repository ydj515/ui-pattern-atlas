import { useState } from "react";
import { LimitedAccess } from "@/shared/ui/patterns/limited-access/LimitedAccess";

const PHOTOS = [
  { id: "a", tone: "bg-sky-200" },
  { id: "b", tone: "bg-amber-200" },
  { id: "c", tone: "bg-rose-200" },
  { id: "d", tone: "bg-emerald-200" },
  { id: "e", tone: "bg-violet-200" },
  { id: "f", tone: "bg-orange-200" },
];

export function LimitedAccessDemo() {
  const [allowed, setAllowed] = useState<ReadonlySet<string>>(new Set(["a", "b", "c"]));
  const [picking, setPicking] = useState(false);

  function toggle(id: string) {
    setAllowed((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-4">
      <h3 className="mb-2 text-base font-bold text-slate-900">사진 고르기</h3>
      {picking ? (
        <fieldset className="grid gap-2">
          <legend className="mb-1 text-xs text-slate-600">이 앱에서 쓸 사진</legend>
          <div className="grid grid-cols-3 gap-1">
            {PHOTOS.map((photo, index) => (
              <label
                key={photo.id}
                className={`relative h-16 cursor-pointer rounded-md ${photo.tone} has-checked:ring-2 has-checked:ring-blue-600`}
              >
                <input
                  type="checkbox"
                  aria-label={`사진 ${index + 1}`}
                  checked={allowed.has(photo.id)}
                  onChange={() => toggle(photo.id)}
                  className="absolute top-1 right-1"
                />
              </label>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPicking(false)}
            className="rounded-lg bg-slate-900 py-1.5 text-sm font-semibold text-white"
          >
            완료
          </button>
        </fieldset>
      ) : (
        <LimitedAccess
          summary={`사진 ${allowed.size}장만 볼 수 있어요`}
          manageLabel="선택 변경"
          onManage={() => setPicking(true)}
        >
          <ul className="grid grid-cols-3 gap-1">
            {PHOTOS.filter((photo) => allowed.has(photo.id)).map((photo, index) => (
              <li key={photo.id}>
                <button
                  type="button"
                  aria-label={`사진 ${index + 1} 첨부`}
                  className={`block h-16 w-full rounded-md ${photo.tone}`}
                />
              </li>
            ))}
          </ul>
        </LimitedAccess>
      )}
    </section>
  );
}
