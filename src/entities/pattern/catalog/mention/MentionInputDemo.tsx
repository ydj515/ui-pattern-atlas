import { useState, type FormEvent } from "react";
import { MentionInput } from "@/shared/ui/patterns/mention/MentionInput";

const PEOPLE = [
  { id: "sky", name: "하늘" },
  { id: "hajun", name: "하준" },
  { id: "doyun", name: "도윤" },
  { id: "seoyeon", name: "서연" },
];

export function MentionInputDemo() {
  const [text, setText] = useState("");
  const [posted, setPosted] = useState<string | null>(null);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!text.trim()) return;
    setPosted(text.trim());
    setText("");
  }

  return (
    <form
      onSubmit={submit}
      className="grid w-80 gap-2 rounded-3xl border border-slate-200 bg-white p-5"
    >
      <MentionInput
        label="댓글"
        people={PEOPLE}
        value={text}
        onChange={setText}
        placeholder="@로 사람을 불러요"
        emptyLabel="찾는 사람이 없어요"
      />
      <button
        type="submit"
        className="justify-self-end rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
      >
        등록
      </button>
      {posted ? (
        <p className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-800">
          {posted.split(/(@\S+)/).map((part, index) =>
            part.startsWith("@") ? (
              <b key={index} className="text-blue-700">
                {part}
              </b>
            ) : (
              part
            ),
          )}
        </p>
      ) : null}
    </form>
  );
}
