import { useState } from "react";
import { ThemeSwitcher, type ThemeChoice } from "@/shared/ui/patterns/theme-switcher/ThemeSwitcher";

export function ThemeSwitcherDemo() {
  const [theme, setTheme] = useState<ThemeChoice>("system");
  const dark = theme === "dark";
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <ThemeSwitcher
        value={theme}
        onChange={setTheme}
        systemTheme="light"
        labels={{
          legend: "화면 모드",
          system: "시스템 설정",
          light: "라이트",
          dark: "다크",
          now: (name) => `지금은 ${name}`,
        }}
      />
      <div
        aria-live="polite"
        className={`rounded-xl p-3 text-sm transition-colors ${dark ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"}`}
      >
        <p className="font-semibold">미리 보기</p>
        <p className={dark ? "text-slate-400" : "text-slate-500"}>
          {dark ? "다크 모드로 보여요" : "라이트 모드로 보여요"}
        </p>
      </div>
    </section>
  );
}
