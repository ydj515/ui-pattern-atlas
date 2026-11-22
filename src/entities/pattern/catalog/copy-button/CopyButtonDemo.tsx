import { CopyButton } from "@/shared/ui/patterns/copy-button/CopyButton";

const LINK = "https://atlas.example/invite/7KQ2";

export function CopyButtonDemo() {
  return (
    <div className="w-full max-w-xs">
      <label htmlFor="invite-link" className="text-sm font-medium text-slate-800">
        초대 링크
      </label>
      <div className="mt-1.5 flex gap-2">
        <input
          id="invite-link"
          readOnly
          value={LINK}
          onFocus={(event) => event.target.select()}
          className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-slate-50 px-3 text-sm text-slate-700"
        />
        <CopyButton text={LINK} label="복사" copiedLabel="복사됨" failedLabel="복사하지 못했어요" />
      </div>
    </div>
  );
}
