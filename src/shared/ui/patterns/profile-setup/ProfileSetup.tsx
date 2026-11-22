import { useId, useState, type ChangeEvent, type FormEvent } from "react";

export interface ProfileSetupProps {
  readonly onDone: (profile: { name: string; photo: string | null }) => void;
  readonly onSkip: () => void;
  readonly minLength?: number;
  readonly maxLength?: number;
  readonly placeholder?: string;
  readonly labels?: {
    readonly name: string;
    readonly photo: string;
    readonly done: string;
    readonly skip: string;
    readonly hint: (min: number, max: number) => string;
  };
}

const DEFAULT_LABELS = {
  name: "닉네임",
  photo: "사진 선택",
  done: "완료",
  skip: "나중에 하기",
  hint: (min: number, max: number) => `${min}~${max}자로 정해 주세요`,
};

/**
 * First profile step: a name and an optional photo. The photo shows the name's first
 * letter until one is chosen, the length rule is visible before typing, and 나중에 하기
 * lets people start without it.
 */
export function ProfileSetup({
  onDone,
  onSkip,
  minLength = 2,
  maxLength = 12,
  placeholder,
  labels = DEFAULT_LABELS,
}: ProfileSetupProps) {
  const id = useId();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const trimmed = name.trim();
  const valid = trimmed.length >= minLength && trimmed.length <= maxLength;

  function pick(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) setPhoto(URL.createObjectURL(file));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    setTouched(true);
    if (valid) onDone({ name: trimmed, photo });
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-full bg-slate-200 text-xl font-bold text-slate-600"
        >
          {photo ? (
            <img src={photo} alt="" className="size-full object-cover" />
          ) : (
            (trimmed[0] ?? "?")
          )}
        </span>
        <label className="cursor-pointer rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 focus-within:ring-2 focus-within:ring-blue-600 hover:bg-slate-50">
          {labels.photo}
          <input type="file" accept="image/*" onChange={pick} className="sr-only" />
        </label>
      </div>
      <div className="grid gap-1">
        <label htmlFor={id} className="text-sm font-medium text-slate-900">
          {labels.name}
        </label>
        <input
          id={id}
          value={name}
          placeholder={placeholder}
          maxLength={maxLength}
          aria-invalid={touched && !valid}
          aria-describedby={`${id}-hint`}
          onChange={(event) => setName(event.target.value)}
          onBlur={() => setTouched(true)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm aria-invalid:border-rose-500"
        />
        <p
          id={`${id}-hint`}
          className={`flex justify-between text-xs ${touched && !valid ? "text-rose-600" : "text-slate-500"}`}
        >
          <span>{labels.hint(minLength, maxLength)}</span>
          <span className="tabular-nums">
            {trimmed.length}/{maxLength}
          </span>
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onSkip}
          className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
        >
          {labels.skip}
        </button>
        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          {labels.done}
        </button>
      </div>
    </form>
  );
}
