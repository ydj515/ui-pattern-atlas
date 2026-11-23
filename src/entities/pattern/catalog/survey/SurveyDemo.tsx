import { useState } from "react";

const SCALE = ["전혀 아니다", "아니다", "보통", "그렇다", "매우 그렇다"];
const TONES = ["bg-rose-500", "bg-rose-300", "bg-slate-300", "bg-blue-300", "bg-blue-600"];

const VERSIONS = {
  joined: {
    label: "한 문항",
    questions: [{ text: "배송이 빠르고 포장이 꼼꼼했나요?", shares: [8, 14, 40, 26, 12] }],
    note: "빠름과 꼼꼼함이 섞여 무엇이 문제인지 알 수 없어요",
  },
  split: {
    label: "나눈 문항",
    questions: [
      { text: "배송이 빨랐나요?", shares: [3, 6, 15, 44, 32] },
      { text: "포장이 꼼꼼했나요?", shares: [18, 30, 28, 16, 8] },
    ],
    note: "나눠 물으니 포장에 불만이 몰려 있어요",
  },
};

export function SurveyDemo() {
  const [version, setVersion] = useState<keyof typeof VERSIONS>("joined");
  const current = VERSIONS[version];
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">문항</legend>
        {(Object.keys(VERSIONS) as (keyof typeof VERSIONS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="survey-version"
              className="sr-only"
              checked={version === id}
              onChange={() => setVersion(id)}
            />
            {VERSIONS[id].label}
          </label>
        ))}
      </fieldset>
      <p className="text-xs text-slate-500">응답 320명</p>
      {current.questions.map((question) => (
        <figure key={question.text} className="grid gap-1.5">
          <figcaption className="text-sm text-slate-800">{question.text}</figcaption>
          <div aria-hidden="true" className="flex h-3 gap-[2px]">
            {question.shares.map((share, index) => (
              <span
                key={SCALE[index]}
                className={`first:rounded-l last:rounded-r ${TONES[index]}`}
                style={{ flexGrow: share, flexBasis: 0 }}
              />
            ))}
          </div>
          <p className="sr-only">
            {question.shares.map((share, index) => `${SCALE[index]} ${share}%`).join(", ")}
          </p>
          <p
            aria-hidden="true"
            className="flex justify-between text-xs text-slate-500 tabular-nums"
          >
            <span>아니다 {(question.shares[0] ?? 0) + (question.shares[1] ?? 0)}%</span>
            <span>그렇다 {(question.shares[3] ?? 0) + (question.shares[4] ?? 0)}%</span>
          </p>
        </figure>
      ))}
      <p role="status" className="text-xs text-slate-600">
        {current.note}
      </p>
    </section>
  );
}
