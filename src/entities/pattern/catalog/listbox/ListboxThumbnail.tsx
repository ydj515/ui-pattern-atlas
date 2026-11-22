import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SOUNDS = [
  { label: "기본", description: "짧은 알림음" },
  { label: "맑은 종소리", description: "두 번 울려요" },
  { label: "짧은 진동", description: "소리 없이 진동만" },
  { label: "무음", description: "알림만 쌓여요" },
] as const;

/** Same flow as ListboxDemo: focus the list → ↓ ↓ moves the selection down. */
export function ListboxThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[5px] left-[24px] text-[7px] font-medium">알림 소리</p>
      <span className="absolute top-[16px] left-[24px] h-[72px] w-[128px] rounded-md border border-slate-200" />
      <span className="thumb-anim thumb-lb-focus absolute top-[15px] left-[23px] h-[74px] w-[130px] rounded-md ring-2 ring-blue-500/30" />
      {SOUNDS.map((sound, index) => (
        <div
          key={sound.label}
          className="absolute left-[26px] h-[17px] w-[124px]"
          style={{ top: 18 + index * 17 }}
        >
          {index < 3 ? (
            <span
              className={`thumb-anim thumb-lb-s${index} absolute inset-0 rounded bg-blue-50 ${index === 2 ? "" : "opacity-0"}`}
            >
              <span className="absolute top-[4px] right-[6px] text-[6.5px] text-blue-900">✓</span>
            </span>
          ) : null}
          <p className="absolute top-[1.5px] left-[6px] text-[6.5px] font-medium">{sound.label}</p>
          <p className="absolute top-[9.5px] left-[6px] text-[5px] text-slate-500">
            {sound.description}
          </p>
        </div>
      ))}
      <p className="absolute top-[93px] left-[24px] text-[6px] text-slate-500">
        목록을 누른 뒤 ↑ ↓ 키로도 고를 수 있어요
      </p>
      <span className="thumb-anim thumb-lb-key absolute top-[46px] left-[156px] grid size-[14px] place-items-center rounded-[3px] border border-slate-300 bg-white text-[8px] text-slate-600 shadow-sm opacity-0">
        ↓
      </span>
      <ThumbCursor motion="thumb-lb-cursor" />
    </ThumbStage>
  );
}
