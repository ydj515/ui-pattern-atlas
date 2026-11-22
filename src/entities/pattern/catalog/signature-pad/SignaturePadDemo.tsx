import { useState } from "react";

import { SignaturePad } from "@/shared/ui/patterns/signature-pad/SignaturePad";

export function SignaturePadDemo() {
  const [signature, setSignature] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [useTyped, setUseTyped] = useState(false);
  const [saved, setSaved] = useState(false);
  const ready = useTyped ? typed.trim().length > 0 : signature !== null;

  if (saved) {
    return (
      <div className="w-full max-w-xs space-y-2 text-center">
        <p role="status" className="text-sm font-semibold text-slate-900">
          서명을 저장했어요
        </p>
        {useTyped ? (
          <p className="font-serif text-2xl text-slate-900 italic">{typed}</p>
        ) : (
          <img
            src={signature ?? ""}
            alt="저장한 서명"
            className="mx-auto h-20 rounded-lg border border-slate-200"
          />
        )}
        <button
          type="button"
          onClick={() => setSaved(false)}
          className="text-xs text-slate-500 underline"
        >
          다시 서명
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs space-y-3">
      {useTyped ? (
        <label className="block text-sm font-medium text-slate-800">
          이름 입력
          <input
            value={typed}
            onChange={(event) => setTyped(event.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3 py-2 font-serif text-lg italic"
          />
        </label>
      ) : (
        <SignaturePad
          label="서명"
          clearLabel="지우기"
          hint="칸 안에 서명해 주세요"
          onChange={setSignature}
        />
      )}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setUseTyped((value) => !value)}
          className="text-xs text-slate-500 underline"
        >
          {useTyped ? "직접 그리기" : "이름으로 대신하기"}
        </button>
        <button
          type="button"
          disabled={!ready}
          onClick={() => setSaved(true)}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:bg-slate-200 disabled:text-slate-500"
        >
          서명 완료
        </button>
      </div>
    </div>
  );
}
