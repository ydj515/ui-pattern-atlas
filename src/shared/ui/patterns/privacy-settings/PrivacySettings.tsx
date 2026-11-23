import { useId, useState } from "react";

export interface PrivacyOption {
  readonly id: string;
  readonly label: string;
  readonly description: string;
}

export interface PrivacyToggle {
  readonly id: string;
  readonly label: string;
  readonly checked: boolean;
}

export interface PrivacySettingsProps {
  readonly visibility: readonly PrivacyOption[];
  readonly value: string;
  readonly onVisibilityChange: (id: string) => void;
  readonly toggles: readonly PrivacyToggle[];
  readonly onToggle: (id: string, checked: boolean) => void;
  readonly onRequestData: () => void;
  readonly labels?: {
    readonly visibility: string;
    readonly data: string;
    readonly request: string;
    readonly requested: string;
  };
}

const DEFAULT_LABELS = {
  visibility: "프로필 공개 범위",
  data: "내 데이터",
  request: "내 데이터 내려받기 요청",
  requested: "요청을 받았어요. 준비되면 메일로 알려 드려요",
};

/**
 * Who can see what, and what is kept: visibility as radio cards that say what each
 * level means, switches for data use, and a way to get a copy of one's own data.
 */
export function PrivacySettings({
  visibility,
  value,
  onVisibilityChange,
  toggles,
  onToggle,
  onRequestData,
  labels = DEFAULT_LABELS,
}: PrivacySettingsProps) {
  const name = useId();
  const [requested, setRequested] = useState(false);
  return (
    <div className="grid gap-4 text-sm">
      <fieldset className="grid gap-1.5">
        <legend className="mb-1 font-semibold text-slate-900">{labels.visibility}</legend>
        {visibility.map((option) => (
          <label
            key={option.id}
            className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-200 px-3 py-2 has-checked:border-slate-900"
          >
            <input
              type="radio"
              name={name}
              checked={value === option.id}
              onChange={() => onVisibilityChange(option.id)}
              className="mt-0.5"
            />
            <span>
              <span className="block text-slate-900">{option.label}</span>
              <span className="text-xs text-slate-500">{option.description}</span>
            </span>
          </label>
        ))}
      </fieldset>
      <div className="grid gap-1.5">
        {toggles.map((toggle) => (
          <label key={toggle.id} className="flex items-center justify-between gap-3">
            <span className="text-slate-800">{toggle.label}</span>
            <input
              type="checkbox"
              role="switch"
              checked={toggle.checked}
              onChange={(event) => onToggle(toggle.id, event.target.checked)}
              className="size-4 accent-slate-900"
            />
          </label>
        ))}
      </div>
      <div className="grid gap-1 border-t border-slate-100 pt-3">
        <p className="font-semibold text-slate-900">{labels.data}</p>
        <button
          type="button"
          disabled={requested}
          onClick={() => {
            onRequestData();
            setRequested(true);
          }}
          className="justify-self-start rounded-lg border border-slate-300 px-3 py-1.5 disabled:text-slate-400"
        >
          {labels.request}
        </button>
        <p role="status" className="min-h-4 text-xs text-slate-600">
          {requested ? labels.requested : ""}
        </p>
      </div>
    </div>
  );
}
