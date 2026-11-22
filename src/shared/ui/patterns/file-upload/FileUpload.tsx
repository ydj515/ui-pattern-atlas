import { useId, useState, type DragEvent } from "react";

export interface FileUploadProps {
  readonly label: string;
  readonly files: readonly File[];
  readonly onChange: (files: readonly File[]) => void;
  /** Same format as the input's accept attribute, e.g. "image/*". */
  readonly accept?: string;
  readonly maxSizeMb?: number;
  readonly hint?: string;
  readonly dropLabel?: string;
  readonly browseLabel?: string;
  /** Message for a rejected file. */
  readonly rejectText?: (file: File) => string;
}

const formatSize = (bytes: number) =>
  bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))}KB`
    : `${(bytes / 1024 / 1024).toFixed(1)}MB`;

function matchesAccept(file: File, accept?: string) {
  if (!accept) return true;
  return accept.split(",").some((rule) => {
    const pattern = rule.trim();
    if (pattern.endsWith("/*")) return file.type.startsWith(pattern.slice(0, -1));
    if (pattern.startsWith(".")) return file.name.toLowerCase().endsWith(pattern.toLowerCase());
    return file.type === pattern;
  });
}

/**
 * Drop zone that also works as a regular file button. Dragging over it highlights it,
 * rejected files (type or size) get a message, and every added file can be removed.
 * The visible label wraps a real file input, so keyboard and screen reader users use it
 * like any button.
 */
export function FileUpload({
  label,
  files,
  onChange,
  accept,
  maxSizeMb = 5,
  hint,
  dropLabel = "여기로 끌어다 놓거나",
  browseLabel = "파일 고르기",
  rejectText = (file) => `${file.name}은(는) 올릴 수 없어요`,
}: FileUploadProps) {
  const id = useId();
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<readonly string[]>([]);

  function add(list: FileList | null) {
    if (!list) return;
    const accepted: File[] = [];
    const rejected: string[] = [];
    for (const file of Array.from(list)) {
      if (matchesAccept(file, accept) && file.size <= maxSizeMb * 1024 * 1024) accepted.push(file);
      else rejected.push(rejectText(file));
    }
    setErrors(rejected);
    if (accepted.length > 0) onChange([...files, ...accepted]);
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDragging(false);
    add(event.dataTransfer.files);
  }

  return (
    <div>
      <span className="text-sm font-medium text-slate-800">{label}</span>
      <label
        htmlFor={id}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`mt-1.5 flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed px-4 py-6 text-center text-sm transition-colors has-focus-visible:ring-2 has-focus-visible:ring-blue-600/30 ${
          dragging ? "border-blue-600 bg-blue-50" : "border-slate-300 bg-white hover:bg-slate-50"
        }`}
      >
        <span className="text-slate-600">{dropLabel}</span>
        <span className="mt-1 font-semibold text-blue-700 underline underline-offset-2">
          {browseLabel}
        </span>
        {hint ? <span className="mt-2 text-xs text-slate-500">{hint}</span> : null}
        <input
          id={id}
          type="file"
          multiple
          accept={accept}
          aria-label={`${label} ${browseLabel}`}
          onChange={(event) => {
            add(event.target.files);
            event.target.value = "";
          }}
          className="sr-only"
        />
      </label>
      <div role="status" className="mt-2 text-xs text-rose-600">
        {errors.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </div>
      {files.length > 0 ? (
        <ul className="mt-2 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white text-sm">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center justify-between gap-3 px-3 py-2"
            >
              <span className="min-w-0 truncate text-slate-800">{file.name}</span>
              <span className="flex shrink-0 items-center gap-2 text-xs text-slate-500">
                {formatSize(file.size)}
                <button
                  type="button"
                  aria-label={`${file.name} 삭제`}
                  onClick={() => onChange(files.filter((_, itemIndex) => itemIndex !== index))}
                  className="grid size-6 place-items-center rounded-full hover:bg-slate-100 hover:text-slate-800"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
