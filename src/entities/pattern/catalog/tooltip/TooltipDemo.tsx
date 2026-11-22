import { Tooltip } from "@/shared/ui/patterns/tooltip/Tooltip";

export function TooltipDemo() {
  return (
    <div className="flex items-center gap-2 pt-12">
      <span className="text-sm text-slate-700">연 이자율</span>
      <strong className="text-lg font-semibold text-slate-900">3.2%</strong>
      <Tooltip content="세금 15.4%를 떼기 전 금액 기준이에요">
        {(triggerProps) => (
          <button
            type="button"
            aria-label="연 이자율 안내"
            {...triggerProps}
            className="grid size-6 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM9 10a1 1 0 0 1 2 0v3.5a1 1 0 1 1-2 0V10Z"
              />
            </svg>
          </button>
        )}
      </Tooltip>
    </div>
  );
}
