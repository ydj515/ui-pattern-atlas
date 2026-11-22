import { PinchToZoom } from "@/shared/ui/patterns/pinch-to-zoom/PinchToZoom";

export function PinchToZoomDemo() {
  return (
    <section className="w-full max-w-sm">
      <h2 className="mb-2 text-sm font-semibold text-slate-900">매장 위치</h2>
      <PinchToZoom
        label="매장 위치 지도"
        zoomInLabel="확대"
        zoomOutLabel="축소"
        resetLabel="원래 크기"
      >
        <div className="relative h-56 bg-emerald-50">
          <span className="absolute inset-x-0 top-1/3 h-3 bg-white" />
          <span className="absolute inset-y-0 left-1/2 w-3 bg-white" />
          <span className="absolute top-[18%] left-[12%] h-12 w-20 rounded bg-emerald-200" />
          <span className="absolute right-[10%] bottom-[12%] h-16 w-24 rounded bg-sky-200" />
          <span className="absolute top-[42%] left-[56%] flex items-center gap-1 rounded-full bg-rose-600 px-2 py-0.5 text-xs font-semibold text-white">
            본점
          </span>
        </div>
      </PinchToZoom>
      <p className="mt-2 text-xs text-slate-600">두 손가락 벌리기, Ctrl + 휠, 두 번 클릭</p>
    </section>
  );
}
