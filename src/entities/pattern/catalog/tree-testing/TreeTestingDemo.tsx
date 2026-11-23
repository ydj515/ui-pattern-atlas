import { useState } from "react";

const TREE = [
  { name: "쇼핑", depth: 0 },
  { name: "마이페이지", depth: 0 },
  { name: "주문 내역", depth: 1 },
  { name: "반품 신청", depth: 2 },
  { name: "회원 정보", depth: 1 },
  { name: "고객센터", depth: 0 },
  { name: "자주 묻는 질문", depth: 1 },
  { name: "1:1 문의", depth: 1 },
];

const PATHS = {
  success: {
    label: "성공한 경로",
    nodes: ["마이페이지", "주문 내역", "반품 신청"],
    note: "62%가 마이페이지 → 주문 내역 → 반품 신청으로 찾았어요",
  },
  wrong: {
    label: "틀린 경로",
    nodes: ["고객센터", "자주 묻는 질문"],
    note: "30%가 고객센터 → 자주 묻는 질문에서 멈췄어요",
  },
};

export function TreeTestingDemo() {
  const [path, setPath] = useState<keyof typeof PATHS>("success");
  const current = PATHS[path];
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <p className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-800">
        과제: 주문한 운동화를 반품하려면 어디로 가나요?
      </p>
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">참가자 경로</legend>
        {(Object.keys(PATHS) as (keyof typeof PATHS)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="tree-path"
              className="sr-only"
              checked={path === id}
              onChange={() => setPath(id)}
            />
            {PATHS[id].label}
          </label>
        ))}
      </fieldset>
      <ul className="grid gap-0.5 text-sm">
        {TREE.map((node) => {
          const on = current.nodes.includes(node.name);
          return (
            <li
              key={node.name}
              style={{ paddingLeft: node.depth * 16 }}
              className={
                on
                  ? path === "success"
                    ? "font-semibold text-emerald-700"
                    : "font-semibold text-rose-700"
                  : "text-slate-500"
              }
            >
              {node.depth > 0 ? "└ " : ""}
              {node.name}
            </li>
          );
        })}
      </ul>
      <p role="status" className="text-xs text-slate-600">
        {current.note}
      </p>
    </section>
  );
}
