import { useState } from "react";
import { PullToRefresh } from "@/shared/ui/patterns/pull-to-refresh/PullToRefresh";

const INITIAL_NEWS = ["배송 일정 안내", "서비스 점검 안내", "이번 주 새 기능"];
const REFRESH_COPY = {
  button: "새로고침",
  pull: "아래로 당기기",
  release: "놓아서 새로고침",
  loading: "새 소식을 불러오는 중",
  success: "새로고침을 완료했어요",
  error: "새로고침에 실패했어요. 다시 시도해 주세요.",
};

export function PullToRefreshDemo() {
  const [items, setItems] = useState<readonly string[]>(INITIAL_NEWS);
  const [fail, setFail] = useState(false);

  async function refresh(signal: AbortSignal) {
    await new Promise<void>((resolve) => window.setTimeout(resolve, 800));
    if (signal.aborted) return;
    if (fail) throw new Error("Request failed");
    setItems((current) =>
      current.includes("새 공지가 올라왔어요") ? current : ["새 공지가 올라왔어요", ...current],
    );
  }

  return (
    <section className="w-full max-w-sm">
      <h2 className="mb-2 text-sm font-semibold text-slate-900">소식</h2>
      <PullToRefresh onRefresh={refresh} labels={REFRESH_COPY}>
        <ul className="divide-y divide-slate-100 bg-white px-3 text-sm">
          {items.map((item) => (
            <li key={item} className="py-2">
              {item}
            </li>
          ))}
        </ul>
      </PullToRefresh>
      <label className="mt-2 flex items-center gap-2 text-xs text-slate-700">
        <input
          type="checkbox"
          checked={fail}
          onChange={(event) => setFail(event.currentTarget.checked)}
        />
        요청 실패 재현
      </label>
    </section>
  );
}
