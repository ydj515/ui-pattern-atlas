import { useState } from "react";
import { LanguagePicker } from "@/shared/ui/patterns/language-picker/LanguagePicker";

const LANGUAGES = [
  { code: "ko", native: "한국어", local: "한국어" },
  { code: "en", native: "English", local: "영어" },
  { code: "ja", native: "日本語", local: "일본어" },
  { code: "zh", native: "中文", local: "중국어" },
  { code: "vi", native: "Tiếng Việt", local: "베트남어" },
  { code: "es", native: "Español", local: "스페인어" },
];

export function LanguagePickerDemo() {
  const [language, setLanguage] = useState("ko");
  const current = LANGUAGES.find((item) => item.code === language);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">언어</h3>
      <LanguagePicker
        languages={LANGUAGES}
        value={language}
        onChange={setLanguage}
        legend="언어"
        searchLabel="언어 찾기"
        emptyLabel="찾는 언어가 없어요"
        searchPlaceholder="일본어, English"
      />
      <p role="status" className="text-xs text-slate-600">
        지금 언어: {current?.native} ({current?.local})
      </p>
    </section>
  );
}
