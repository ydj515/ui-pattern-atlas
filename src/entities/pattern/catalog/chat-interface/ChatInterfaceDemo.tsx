import { useState, type FormEvent } from "react";
import { ChatInterface, type ChatMessage } from "@/shared/ui/patterns/chat-interface/ChatInterface";

const START: readonly ChatMessage[] = [
  { id: "1", role: "user", content: "주말 브런치 추천해 줘" },
  { id: "2", role: "assistant", content: "서울숲 근처 세 곳을 골라 봤어요." },
];

export function ChatInterfaceDemo() {
  const [messages, setMessages] = useState(START);
  const [text, setText] = useState("");

  function send(event: FormEvent) {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;
    setMessages((current) => [
      ...current,
      { id: `u${current.length}`, role: "user", content: value },
    ]);
    setText("");
    window.setTimeout(
      () =>
        setMessages((current) => [
          ...current,
          {
            id: `a${current.length}`,
            role: "assistant",
            content: "좋아요. 예약이 되는 곳만 다시 골라 볼게요.",
          },
        ]),
      800,
    );
  }

  return (
    <div className="w-80">
      <ChatInterface
        label="브런치 상담"
        messages={messages}
        newMessageLabel="새 메시지 보기"
        height={280}
        composer={
          <form onSubmit={send} className="flex gap-2">
            <input
              aria-label="메시지"
              value={text}
              placeholder="예약 되는 곳만 알려 줘"
              onChange={(event) => setText(event.target.value)}
              className="min-w-0 flex-1 rounded-full border border-slate-300 px-3 py-1.5 text-sm"
            />
            <button
              type="submit"
              className="rounded-full bg-slate-900 px-3 text-sm font-semibold text-white"
            >
              보내기
            </button>
          </form>
        }
      />
    </div>
  );
}
