import { useState, type FormEvent } from "react";
import { SendButton } from "@/shared/ui/patterns/send-animation/SendButton";

export function SendButtonDemo() {
  const [text, setText] = useState("");
  const [sent, setSent] = useState<readonly string[]>([]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const message = text.trim();
    if (!message) return;
    setSent((current) => [...current, message]);
    setText("");
  }

  return (
    <section className="flex h-72 w-72 flex-col rounded-3xl border border-slate-200 bg-slate-50">
      <ol
        aria-label="대화"
        className="flex flex-1 flex-col justify-end gap-2 overflow-hidden p-4 text-sm"
      >
        <li className="max-w-[75%] self-start rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-slate-900 shadow-sm">
          어디쯤이에요?
        </li>
        {sent.map((message, index) => (
          <li
            key={index}
            className="max-w-[75%] self-end rounded-2xl rounded-br-sm bg-blue-600 px-3 py-2 text-white transition duration-300 ease-out motion-reduce:transition-none starting:translate-y-3 starting:opacity-0"
          >
            {message}
          </li>
        ))}
      </ol>
      <form
        onSubmit={submit}
        className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
      >
        <input
          aria-label="메시지"
          value={text}
          placeholder="곧 도착해요"
          onChange={(event) => setText(event.target.value)}
          className="min-w-0 flex-1 rounded-full border border-slate-300 px-3 py-2 text-sm"
        />
        <SendButton label="보내기" disabled={!text.trim()} />
      </form>
    </section>
  );
}
