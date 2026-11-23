import { useState } from "react";
import { UpdatePrompt } from "@/shared/ui/patterns/update-prompt/UpdatePrompt";

const KINDS = [
  ["optional", "선택 업데이트"],
  ["required", "필수 업데이트"],
] as const;

export function UpdatePromptDemo() {
  const [kind, setKind] = useState<"optional" | "required">("optional");
  const [message, setMessage] = useState("");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm">
      <div
        role="radiogroup"
        aria-label="업데이트 종류"
        className="grid grid-cols-2 rounded-lg bg-slate-200 p-0.5"
      >
        {KINDS.map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={kind === value}
            onClick={() => {
              setKind(value);
              setMessage("");
            }}
            className="rounded-md py-1 text-xs text-slate-600 aria-checked:bg-white aria-checked:font-medium aria-checked:text-slate-900"
          >
            {label}
          </button>
        ))}
      </div>
      {message ? null : (
        <UpdatePrompt
          kind={kind}
          version="4.2"
          notes={["사진을 한 번에 20장까지 올려요", "다크 모드 글자가 더 또렷해져요"]}
          onUpdate={() => setMessage("앱 스토어로 이동해 업데이트해요")}
          onLater={() => setMessage("설정 > 앱 정보에서 언제든 업데이트할 수 있어요")}
          labels={{
            optionalTitle: (version) => `새 버전(${version})이 나왔어요`,
            requiredTitle: (version) => `${version} 버전으로 업데이트해야 쓸 수 있어요`,
            requiredReason: "보안 문제를 고친 버전이라 이전 버전으로는 로그인할 수 없어요",
            update: "업데이트",
            later: "나중에",
          }}
        />
      )}
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
