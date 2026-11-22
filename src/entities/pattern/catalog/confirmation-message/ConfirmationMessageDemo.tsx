import { useRef, useState, type FormEvent } from "react";

import { ConfirmationMessage } from "@/shared/ui/patterns/confirmation-message/ConfirmationMessage";

export function ConfirmationMessageDemo() {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("배송지를 바꾸고 싶어요");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (text.trim()) setSent(true);
  }

  if (sent) {
    return (
      <div className="w-full max-w-xs">
        <ConfirmationMessage
          title="문의를 보냈어요"
          action={
            <button
              type="button"
              onClick={() => {
                setText("");
                setSent(false);
                requestAnimationFrame(() => textareaRef.current?.focus());
              }}
              className="text-sm font-medium text-slate-900 underline underline-offset-2"
            >
              새 문의 쓰기
            </button>
          }
        >
          접수 번호 Q-2048
          <br />
          영업일 1일 안에 이메일로 답해 드려요.
        </ConfirmationMessage>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-4"
    >
      <label htmlFor="confirmation-message-demo" className="text-sm font-semibold text-slate-900">
        문의 내용
      </label>
      <textarea
        ref={textareaRef}
        id="confirmation-message-demo"
        rows={3}
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="mt-2 block w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
      <button
        type="submit"
        className="mt-3 w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        보내기
      </button>
    </form>
  );
}
