import { useState } from "react";
import { ShareSheet } from "@/shared/ui/patterns/share-sheet/ShareSheet";

const TARGETS = [
  { id: "copy", label: "링크 복사", icon: <span className="text-sm">⧉</span> },
  { id: "message", label: "메시지", icon: <span className="text-sm">✉</span> },
  { id: "mail", label: "이메일", icon: <span className="text-sm">@</span> },
];
const RESULT: Record<string, string> = {
  copy: "링크를 복사했어요",
  message: "메시지 앱을 열어요",
  mail: "메일 앱을 열어요",
};

export function ShareSheetDemo() {
  const [platform, setPlatform] = useState<"ios" | "android">("ios");
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  return (
    <section className="grid w-72 gap-3 rounded-3xl border border-slate-200 bg-white p-5 pt-28">
      <fieldset className="flex gap-1 text-xs">
        <legend className="sr-only">아이콘 모양</legend>
        {(["ios", "android"] as const).map((value) => (
          <label
            key={value}
            className="cursor-pointer rounded-md border border-slate-200 px-2 py-1 has-checked:border-slate-900 has-checked:font-semibold"
          >
            <input
              type="radio"
              name="share-platform"
              className="sr-only"
              checked={platform === value}
              onChange={() => setPlatform(value)}
            />
            {value === "ios" ? "iOS" : "안드로이드"}
          </label>
        ))}
      </fieldset>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900">가을 산책 코스 5곳</h3>
        <ShareSheet
          title="가을 산책 코스 5곳"
          url="https://atlas.example/p/42"
          platform={platform}
          open={open}
          onOpenChange={setOpen}
          targets={TARGETS}
          shareLabel="공유"
          closeLabel="닫기"
          onTarget={(id) => {
            setOpen(false);
            setResult(RESULT[id] ?? "");
          }}
        />
      </div>
      <p role="status" className="h-4 text-xs text-slate-600">
        {result}
      </p>
    </section>
  );
}
