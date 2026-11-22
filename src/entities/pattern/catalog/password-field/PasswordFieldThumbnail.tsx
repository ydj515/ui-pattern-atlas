import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const RULES = [
  { label: "8자 이상", motion: "thumb-pw-full" },
  { label: "숫자 포함", motion: "thumb-pw-digit" },
  { label: "특수문자 포함", motion: "thumb-pw-full" },
] as const;

function Eye({ crossed }: { readonly crossed: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-[9px]"
    >
      <path d="M1.5 10S4.5 4 10 4s8.5 6 8.5 6-3 6-8.5 6-8.5-6-8.5-6Z" />
      <circle cx="10" cy="10" r="2.5" />
      {crossed ? <path d="M3 17 17 3" strokeLinecap="round" /> : null}
    </svg>
  );
}

/** Same flow as PasswordFieldDemo: the rules tick off while typing, then 비밀번호 보기. */
export function PasswordFieldThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[8px] left-[24px] text-[7px] font-medium">새 비밀번호</p>
      <span className="absolute top-[19px] left-[24px] h-[15px] w-[128px] rounded border border-slate-300" />
      {[
        { text: "•••", motion: "thumb-pw-v1" },
        { text: "•••••••", motion: "thumb-pw-v2" },
        { text: "••••••••", motion: "thumb-pw-v3" },
        { text: "sky2026!", motion: "thumb-pw-v4" },
      ].map((value) => (
        <p
          key={value.motion}
          className={`thumb-anim ${value.motion} absolute top-[22.5px] left-[30px] text-[6.5px] tracking-wide ${value.motion === "thumb-pw-v4" ? "" : "opacity-0"}`}
        >
          {value.text}
        </p>
      ))}
      <span className="absolute top-[22px] left-[138px] text-slate-500">
        <Eye crossed />
      </span>
      <span className="thumb-anim thumb-pw-v4 absolute top-[22px] left-[138px] bg-white text-blue-700">
        <Eye crossed={false} />
      </span>

      {RULES.map((rule, index) => (
        <div
          key={rule.label}
          className="absolute left-[24px] h-[9px] w-[100px] text-[6px]"
          style={{ top: 40 + index * 10 }}
        >
          <p className="absolute inset-0 text-slate-500">· {rule.label}</p>
          <p className={`thumb-anim ${rule.motion} absolute inset-0 bg-white text-emerald-700`}>
            ✓ {rule.label}
          </p>
        </div>
      ))}
      <ThumbCursor motion="thumb-pw-cursor" />
    </ThumbStage>
  );
}
