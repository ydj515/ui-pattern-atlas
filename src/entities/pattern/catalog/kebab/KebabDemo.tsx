import { useState } from "react";

const FILES = ["회의록.pdf", "예산표.xlsx", "사진.png"];

export function KebabDemo() {
  const [files, setFiles] = useState(FILES);
  const [open, setOpen] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-4">
      <h3 className="mb-2 text-sm font-bold text-slate-900">내 파일</h3>
      <ul className="divide-y divide-slate-100">
        {files.map((file) => (
          <li key={file} className="relative flex items-center justify-between py-2 text-sm">
            {file}
            <button
              type="button"
              aria-label={`${file} 더 보기`}
              aria-haspopup="menu"
              aria-expanded={open === file}
              onClick={() => setOpen(open === file ? null : file)}
              className="grid size-8 place-items-center rounded-lg hover:bg-slate-100"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-slate-700">
                <circle cx="12" cy="5" r="1.8" />
                <circle cx="12" cy="12" r="1.8" />
                <circle cx="12" cy="19" r="1.8" />
              </svg>
            </button>
            {open === file ? (
              <div
                role="menu"
                className="absolute top-9 right-0 z-10 grid w-32 rounded-xl bg-white p-1 shadow-lg ring-1 ring-slate-200"
              >
                <button
                  type="button"
                  role="menuitem"
                  autoFocus
                  onClick={() => {
                    setOpen(null);
                    setMessage(`이름 바꾸기: ${file}`);
                  }}
                  className="rounded-lg px-3 py-1.5 text-left hover:bg-slate-100"
                >
                  이름 바꾸기
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setOpen(null);
                    setFiles(files.filter((item) => item !== file));
                    setMessage(`삭제했어요: ${file}`);
                  }}
                  className="rounded-lg px-3 py-1.5 text-left text-rose-600 hover:bg-slate-100"
                >
                  삭제
                </button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      <p role="status" className="mt-2 h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
