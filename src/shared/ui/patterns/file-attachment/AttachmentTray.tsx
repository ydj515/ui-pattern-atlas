export interface Attachment {
  readonly id: string;
  readonly name: string;
  readonly size: string;
  /** 0–1 while uploading, 1 when ready. */
  readonly progress: number;
  readonly error?: string;
}

export interface AttachmentTrayProps {
  readonly files: readonly Attachment[];
  readonly onRemove: (id: string) => void;
  readonly removeLabel?: (name: string) => string;
  readonly uploadingLabel?: string;
}

/**
 * Files waiting to go with the next message, shown above the input as chips with name,
 * size and upload progress. Each can be removed before sending, and a file that cannot
 * be sent says why right on its chip.
 */
export function AttachmentTray({
  files,
  onRemove,
  removeLabel = (name) => `${name} 빼기`,
  uploadingLabel = "올리는 중",
}: AttachmentTrayProps) {
  if (files.length === 0) return null;
  return (
    <ul aria-label="첨부 파일" className="flex flex-wrap gap-2">
      {files.map((file) => (
        <li
          key={file.id}
          className={`relative flex w-44 items-center gap-2 overflow-hidden rounded-xl border px-2 py-1.5 ${file.error ? "border-rose-300 bg-rose-50" : "border-slate-200 bg-white"}`}
        >
          <span
            aria-hidden="true"
            className="grid size-7 shrink-0 place-items-center rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 uppercase"
          >
            {file.name.split(".").pop()}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-medium text-slate-900">{file.name}</span>
            <span
              className={`block text-[11px] ${file.error ? "text-rose-600" : "text-slate-500"}`}
            >
              {file.error ??
                (file.progress < 1
                  ? `${uploadingLabel} ${Math.round(file.progress * 100)}%`
                  : file.size)}
            </span>
          </span>
          <button
            type="button"
            aria-label={removeLabel(file.name)}
            onClick={() => onRemove(file.id)}
            className="grid size-6 shrink-0 place-items-center rounded-full text-slate-500 hover:bg-slate-200"
          >
            <span aria-hidden="true">×</span>
          </button>
          {file.progress < 1 && !file.error ? (
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-[width] motion-reduce:transition-none"
              style={{ width: `${file.progress * 100}%` }}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
