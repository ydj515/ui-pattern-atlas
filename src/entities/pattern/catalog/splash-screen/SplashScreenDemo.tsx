import { useEffect, useState } from "react";
import { SplashScreen } from "@/shared/ui/patterns/splash-screen/SplashScreen";

function App({ onRestart }: { readonly onRestart: () => void }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <SplashScreen
      ready={ready}
      minMs={600}
      label="앱을 준비하는 중"
      logo={
        <span className="grid justify-items-center gap-2">
          <span className="size-12 rounded-2xl bg-amber-400" />
          <span className="text-lg font-bold">동네가게</span>
        </span>
      }
    >
      <div className="grid h-full content-start gap-3 bg-white p-4">
        <h3 className="text-base font-bold text-slate-900">오늘의 추천</h3>
        <span className="h-20 rounded-xl bg-amber-100" />
        <span className="h-20 rounded-xl bg-sky-100" />
        <button
          type="button"
          onClick={onRestart}
          className="justify-self-start rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
        >
          앱 다시 열기
        </button>
      </div>
    </SplashScreen>
  );
}

export function SplashScreenDemo() {
  const [run, setRun] = useState(0);
  return (
    <div className="h-72 w-48 overflow-hidden rounded-3xl border border-slate-200">
      <App key={run} onRestart={() => setRun((value) => value + 1)} />
    </div>
  );
}
