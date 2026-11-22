import { useState } from "react";
import {
  SharedElement,
  withViewTransition,
} from "@/shared/ui/patterns/shared-element-transition/SharedElement";

const PHOTOS = [
  { id: "seoul", title: "서울", tone: "from-emerald-300 to-sky-400" },
  { id: "busan", title: "부산", tone: "from-sky-300 to-indigo-400" },
  { id: "gangneung", title: "강릉", tone: "from-amber-200 to-rose-300" },
];

export function SharedElementDemo() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [lastId, setLastId] = useState<string | null>(null);
  const photo = PHOTOS.find((item) => item.id === openId);

  return (
    <section className="h-72 w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white p-3">
      {photo ? (
        <div>
          <SharedElement
            name={`photo-${photo.id}`}
            className={`h-40 rounded-xl bg-gradient-to-br ${photo.tone}`}
          >
            {null}
          </SharedElement>
          <div className="mt-3 flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900">{photo.title}</h3>
            <button
              type="button"
              autoFocus
              onClick={() => withViewTransition(() => setOpenId(null))}
              className="rounded-lg border border-slate-200 px-3 py-1 text-sm"
            >
              닫기
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="mb-2 text-sm font-semibold text-slate-900">여행 사진</h3>
          <ul className="grid grid-cols-3 gap-2">
            {PHOTOS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  autoFocus={lastId === item.id}
                  onClick={() =>
                    withViewTransition(() => {
                      setLastId(item.id);
                      setOpenId(item.id);
                    })
                  }
                  className="block w-full text-left text-xs text-slate-700"
                >
                  <SharedElement
                    name={`photo-${item.id}`}
                    className={`mb-1 h-16 rounded-lg bg-gradient-to-br ${item.tone}`}
                  >
                    {null}
                  </SharedElement>
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
