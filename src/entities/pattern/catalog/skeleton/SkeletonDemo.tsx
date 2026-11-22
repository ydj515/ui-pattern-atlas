import { useEffect, useRef, useState } from "react";

import { Skeleton, SkeletonRegion } from "@/shared/ui/patterns/skeleton/Skeleton";

const FAKE_LATENCY_MS = 1500;

function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3.5 w-28" />
        <Skeleton className="h-3 w-44" />
      </div>
    </div>
  );
}

export function SkeletonDemo() {
  const [loading, setLoading] = useState(true);
  const timerRef = useRef<number | undefined>(undefined);

  function load() {
    setLoading(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setLoading(false), FAKE_LATENCY_MS);
  }

  useEffect(() => {
    // Simulate the first request when the demo mounts.
    timerRef.current = window.setTimeout(() => setLoading(false), FAKE_LATENCY_MS);
    return () => window.clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <SkeletonRegion
          loading={loading}
          fallback={<ProfileSkeleton />}
          loadingLabel="프로필을 불러오는 중이에요"
        >
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="grid size-12 place-items-center rounded-full bg-amber-100 text-lg font-semibold text-amber-800"
            >
              김
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">김하늘</p>
              <p className="text-xs text-slate-500">프로덕트 디자이너 · 서울</p>
            </div>
          </div>
        </SkeletonRegion>
      </div>
      <button
        type="button"
        onClick={load}
        disabled={loading}
        className="w-full rounded-lg border border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
      >
        다시 불러오기
      </button>
    </div>
  );
}
