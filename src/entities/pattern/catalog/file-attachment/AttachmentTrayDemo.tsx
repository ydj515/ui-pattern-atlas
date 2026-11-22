import { useEffect, useState, type ChangeEvent } from "react";
import {
  AttachmentTray,
  type Attachment,
} from "@/shared/ui/patterns/file-attachment/AttachmentTray";

const LIMIT = 10 * 1024 * 1024;
const START: readonly Attachment[] = [
  { id: "minutes", name: "회의록.pdf", size: "1.2MB", progress: 0.2 },
  { id: "photo", name: "사진.png", size: "14MB", progress: 0, error: "10MB를 넘어요" },
];

function sizeText(bytes: number) {
  return bytes > 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)}MB`
    : `${Math.ceil(bytes / 1024)}KB`;
}

export function AttachmentTrayDemo() {
  const [files, setFiles] = useState(START);
  const uploading = files.some((file) => file.progress < 1 && !file.error);

  useEffect(() => {
    if (!uploading) return;
    const timer = window.setInterval(
      () =>
        setFiles((list) =>
          list.map((file) =>
            file.error || file.progress >= 1
              ? file
              : { ...file, progress: Math.min(1, file.progress + 0.2) },
          ),
        ),
      300,
    );
    return () => window.clearInterval(timer);
  }, [uploading]);

  function add(event: ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(event.target.files ?? []);
    setFiles((list) => [
      ...list,
      ...picked.map((file, index) => ({
        id: `${file.name}-${Date.now()}-${index}`,
        name: file.name,
        size: sizeText(file.size),
        progress: 0,
        error: file.size > LIMIT ? "10MB를 넘어요" : undefined,
      })),
    ]);
    event.target.value = "";
  }

  const blocked = uploading || files.some((file) => file.error);
  return (
    <section className="grid w-80 gap-2 rounded-3xl border border-slate-200 bg-white p-3">
      <AttachmentTray
        files={files}
        onRemove={(id) => setFiles((list) => list.filter((file) => file.id !== id))}
        removeLabel={(name) => `${name} 빼기`}
        uploadingLabel="올리는 중"
      />
      <div className="flex items-center gap-2 rounded-2xl border border-slate-300 p-2">
        <label className="cursor-pointer rounded-lg px-2 py-1 text-xs text-slate-700 hover:bg-slate-100">
          파일 추가
          <input type="file" multiple onChange={add} className="sr-only" />
        </label>
        <span className="flex-1 text-sm text-slate-400">이 자료로 요약해 줘</span>
        <button
          type="button"
          disabled={blocked}
          className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white disabled:bg-slate-300"
        >
          보내기
        </button>
      </div>
      <p role="status" className="h-4 text-xs text-slate-600">
        {files.some((file) => file.error)
          ? "보낼 수 없는 파일을 빼 주세요"
          : uploading
            ? "파일을 올리는 중이에요"
            : ""}
      </p>
    </section>
  );
}
