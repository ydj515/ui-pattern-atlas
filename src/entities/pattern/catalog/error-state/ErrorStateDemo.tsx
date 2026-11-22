import { useEffect, useRef, useState } from "react";

import { ErrorState } from "@/shared/ui/patterns/error-state/ErrorState";

export const PRODUCT_ERROR = {
  title: "상품을 불러오지 못했어요",
  description: "잠시 후 다시 시도해 주세요.",
  retry: "다시 시도",
  retrying: "불러오는 중…",
  resultTitle: "상품 목록",
  products: ["무선 이어폰", "니트 가디건"],
} as const;

export function ErrorStateDemo() {
  const [state, setState] = useState<"error" | "retrying" | "loaded">("error");
  const demoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const restoreFocus = useRef(false);

  useEffect(() => {
    if (state !== "retrying") return;
    const timer = window.setTimeout(() => {
      restoreFocus.current = demoRef.current?.contains(document.activeElement) ?? false;
      setState("loaded");
    }, 700);
    return () => window.clearTimeout(timer);
  }, [state]);

  useEffect(() => {
    if (state === "loaded" && restoreFocus.current) headingRef.current?.focus();
  }, [state]);

  return (
    <div ref={demoRef} className="w-full max-w-xs">
      {state === "loaded" ? (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 ref={headingRef} tabIndex={-1} className="text-sm font-semibold text-slate-900">
            {PRODUCT_ERROR.resultTitle}
          </h2>
          <ul className="mt-2 divide-y divide-slate-100 text-sm text-slate-700">
            {PRODUCT_ERROR.products.map((product) => (
              <li key={product} className="py-2">
                {product}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ErrorState
          title={PRODUCT_ERROR.title}
          description={PRODUCT_ERROR.description}
          retryLabel={PRODUCT_ERROR.retry}
          retryingLabel={PRODUCT_ERROR.retrying}
          retrying={state === "retrying"}
          onRetry={() => setState("retrying")}
        />
      )}
    </div>
  );
}
