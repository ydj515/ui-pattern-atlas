import { Parallax } from "@/shared/ui/patterns/parallax/Parallax";

export function ParallaxDemo() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200">
      <Parallax
        label="여름 캠핑"
        backgroundHeight={160}
        speed={0.5}
        background={
          <div className="relative h-full overflow-hidden bg-gradient-to-b from-sky-300 to-sky-100">
            <span className="absolute top-6 right-8 size-8 rounded-full bg-amber-200" />
            <span className="absolute -bottom-10 -left-6 h-28 w-48 rotate-12 rounded-[40%] bg-emerald-500" />
            <span className="absolute -right-10 -bottom-12 h-32 w-52 -rotate-12 rounded-[40%] bg-emerald-600" />
          </div>
        }
      >
        <article className="grid gap-3 bg-white p-4 text-sm text-slate-700">
          <h3 className="text-lg font-semibold text-slate-900">여름 캠핑</h3>
          <p>계곡 옆 자리를 미리 예약하면 한낮에도 시원해요.</p>
          <p>밤에는 기온이 떨어지니 얇은 겉옷을 챙기세요.</p>
          <p>쓰레기는 모두 되가져가 주세요.</p>
          <p>장작은 관리소에서 살 수 있어요.</p>
        </article>
      </Parallax>
    </div>
  );
}
