import { useState } from "react";
import { Checkbox } from "@/shared/ui/patterns/checkbox/Checkbox";

const OPTIONS = ["공지사항", "이벤트 소식"];

export function CheckboxDemo() {
  const [selected, setSelected] = useState<readonly string[]>([]);
  const all = selected.length === OPTIONS.length;

  return (
    <fieldset className="grid w-full max-w-xs gap-3 rounded-xl bg-white p-4">
      <legend className="sr-only">수신할 소식</legend>
      <Checkbox
        label="전체 선택"
        checked={all}
        mixed={!all && selected.length > 0}
        onCheckedChange={(checked) => setSelected(checked ? OPTIONS : [])}
      />
      <div className="grid gap-3 border-t border-slate-200 pt-3">
        {OPTIONS.map((option) => (
          <Checkbox
            key={option}
            label={option}
            checked={selected.includes(option)}
            onCheckedChange={(checked) =>
              setSelected((current) =>
                checked ? [...current, option] : current.filter((item) => item !== option),
              )
            }
          />
        ))}
      </div>
    </fieldset>
  );
}
