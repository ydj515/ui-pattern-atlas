import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

export interface ChatMessage {
  readonly id: string;
  readonly role: "user" | "assistant";
  readonly content: ReactNode;
}

export interface ChatInterfaceProps {
  readonly label: string;
  readonly messages: readonly ChatMessage[];
  /** Input area, usually a PromptInput. */
  readonly composer: ReactNode;
  readonly newMessageLabel?: string;
  readonly height?: number;
}

/**
 * Conversation as a log: your messages on the right, the assistant's on the left. It
 * sticks to the newest message while you are at the bottom; if you scrolled up to
 * read, it stays put and offers a button to jump to the new message instead.
 */
export function ChatInterface({
  label,
  messages,
  composer,
  newMessageLabel = "새 메시지 보기",
  height = 320,
}: ChatInterfaceProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const atBottomRef = useRef(true);
  const [unseen, setUnseen] = useState(false);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (atBottomRef.current) list.scrollTop = list.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (!atBottomRef.current && messages.length) setUnseen(true);
  }, [messages.length]);

  function jump() {
    const list = listRef.current;
    if (list) list.scrollTo?.({ top: list.scrollHeight, behavior: "smooth" });
    setUnseen(false);
  }

  return (
    <section
      aria-label={label}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
      style={{ height }}
    >
      <div
        ref={listRef}
        role="log"
        aria-live="polite"
        tabIndex={0}
        onScroll={(event) => {
          const list = event.currentTarget;
          atBottomRef.current = list.scrollHeight - list.scrollTop - list.clientHeight < 24;
          if (atBottomRef.current) setUnseen(false);
        }}
        className="flex flex-1 flex-col gap-2 overflow-y-auto p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${message.role === "user" ? "self-end rounded-br-sm bg-slate-900 text-white" : "self-start rounded-bl-sm bg-white text-slate-900 shadow-sm"}`}
          >
            <span className="sr-only">{message.role === "user" ? "나: " : "답변: "}</span>
            {message.content}
          </div>
        ))}
      </div>
      {unseen ? (
        <button
          type="button"
          onClick={jump}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-3 py-1 text-xs text-white shadow"
        >
          {newMessageLabel}
        </button>
      ) : null}
      <div className="border-t border-slate-200 bg-white p-2">{composer}</div>
    </section>
  );
}
