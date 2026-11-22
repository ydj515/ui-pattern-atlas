import { useState } from "react";
import { WrittenReview } from "@/shared/ui/patterns/written-review/WrittenReview";

const LABELS = {
  stars: "별점",
  body: "후기",
  submit: "후기 올리기",
  needStars: "별점을 골라 주세요",
  hint: (min: number) => `${min}자 이상 써 주세요`,
};

export function WrittenReviewDemo() {
  const [posted, setPosted] = useState<{ stars: number; body: string } | null>(null);
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="mb-3 text-base font-bold text-slate-900">린넨 셔츠 후기</h3>
      {posted ? (
        <div role="status" className="grid gap-2">
          <p className="text-sm font-semibold text-slate-900">후기를 올렸어요</p>
          <p className="rounded-lg bg-slate-50 px-3 py-2 text-sm">
            <span className="text-amber-500">{"★".repeat(posted.stars)}</span> {posted.body}
          </p>
          <button
            type="button"
            onClick={() => setPosted(null)}
            className="justify-self-start rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
          >
            처음부터
          </button>
        </div>
      ) : (
        <WrittenReview
          onSubmit={setPosted}
          minLength={10}
          placeholder="핏이 딱 좋고 색도 예뻐요"
          labels={LABELS}
        />
      )}
    </section>
  );
}
