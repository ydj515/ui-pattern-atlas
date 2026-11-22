import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const DOT = { 정상: "bg-emerald-500", 지연: "bg-amber-500", 장애: "bg-rose-600" } as const;

function Status({
  label,
  top,
  motion = "",
}: {
  readonly label: keyof typeof DOT;
  readonly top: number;
  readonly motion?: string;
}) {
  return (
    <span
      className={`absolute right-[8px] flex items-center gap-[3px] bg-white text-[6px] text-slate-700 ${motion}`}
      style={{ top }}
    >
      <span className={`size-[4px] rounded-full ${DOT[label]}`} />
      {label}
    </span>
  );
}

/** Same services as StatusDotDemo: 새로 고침 → 결제 recovers, 메일 발송 goes down. */
export function StatusDotThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[24px] h-[68px] w-[128px] rounded-md border border-slate-200 text-[6.5px]">
        {["API", "결제", "메일 발송"].map((name, index) => (
          <p key={name} className="absolute left-[8px]" style={{ top: 5 + index * 17 }}>
            {name}
          </p>
        ))}
        <Status label="정상" top={6} />
        <Status label="지연" top={23} motion="thumb-anim thumb-sd-before opacity-0" />
        <Status label="정상" top={40} motion="thumb-anim thumb-sd-before opacity-0" />
        <Status label="정상" top={23} motion="thumb-anim thumb-sd-after" />
        <Status label="장애" top={40} motion="thumb-anim thumb-sd-after" />
        <p className="absolute inset-x-0 top-[54px] h-[14px] border-t border-slate-100 text-center text-[5.5px] leading-[14px] text-slate-600">
          새로 고침
        </p>
      </div>
      <ThumbCursor motion="thumb-sd-cursor" />
    </ThumbStage>
  );
}
