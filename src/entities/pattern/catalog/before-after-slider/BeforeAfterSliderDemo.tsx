import { BeforeAfterSlider } from "@/shared/ui/patterns/before-after-slider/BeforeAfterSlider";

function Room({ edited }: { readonly edited: boolean }) {
  return (
    <div className={`relative size-full ${edited ? "bg-amber-50" : "bg-slate-300"}`}>
      <span
        className={`absolute right-6 bottom-0 left-6 h-1/3 rounded-t-xl ${edited ? "bg-emerald-600" : "bg-slate-500"}`}
      />
      <span
        className={`absolute top-6 left-8 size-12 rounded-full ${edited ? "bg-amber-300" : "bg-slate-400"}`}
      />
      <span
        className={`absolute top-8 right-8 h-16 w-20 rounded ${edited ? "bg-sky-300" : "bg-slate-400"}`}
      />
    </div>
  );
}

export function BeforeAfterSliderDemo() {
  return (
    <div className="w-full max-w-xs">
      <BeforeAfterSlider
        label="보정 전후 비교"
        beforeLabel="보정 전"
        afterLabel="보정 후"
        before={<Room edited={false} />}
        after={<Room edited />}
      />
    </div>
  );
}
