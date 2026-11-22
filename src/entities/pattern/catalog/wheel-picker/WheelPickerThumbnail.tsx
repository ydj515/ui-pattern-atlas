import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HOURS = Array.from({ length: 12 }, (_, index) => String(index + 1));
const MINUTES = Array.from({ length: 12 }, (_, index) => String(index * 5).padStart(2, "0"));

function Column({
  items,
  left,
  motion,
  shift,
}: {
  readonly items: readonly string[];
  readonly left: number;
  readonly motion: string;
  readonly shift: number;
}) {
  return (
    <div className="absolute top-[6px] h-[72px] w-[30px] overflow-hidden" style={{ left }}>
      <ul
        className={`${motion} absolute inset-x-0 top-0 text-center text-[7px] tabular-nums`}
        style={{ transform: `translateY(${shift}px)` }}
      >
        {items.map((item) => (
          <li key={item} className="h-[14px] leading-[14px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Same columns as WheelPickerDemo: flick the hour to 7 and the minutes to 30 → 오전 7:30. */
export function WheelPickerThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[6px] left-[38px] h-[72px] w-[100px] rounded-lg bg-white ring-1 ring-slate-200" />
      <span className="absolute top-[35px] left-[41px] h-[14px] w-[94px] rounded bg-slate-100" />
      <Column items={["오전", "오후"]} left={43} motion="" shift={29} />
      <Column items={HOURS} left={73} motion="thumb-anim thumb-wp-hour" shift={-55} />
      <Column items={MINUTES} left={103} motion="thumb-anim thumb-wp-minute" shift={-55} />
      <span className="absolute top-[6px] left-[38px] h-[22px] w-[100px] rounded-t-lg bg-gradient-to-b from-white to-white/0" />
      <span className="absolute top-[56px] left-[38px] h-[22px] w-[100px] rounded-b-lg bg-gradient-to-t from-white to-white/0" />
      <p className="thumb-anim thumb-wp-t0 absolute inset-x-0 top-[88px] text-center text-[6.5px] text-slate-700 opacity-0">
        오전 6:00에 알람이 울려요
      </p>
      <p className="thumb-anim thumb-wp-t1 absolute inset-x-0 top-[88px] text-center text-[6.5px] text-slate-700 opacity-0">
        오전 7:00에 알람이 울려요
      </p>
      <p className="thumb-anim thumb-wp-t2 absolute inset-x-0 top-[88px] text-center text-[6.5px] text-slate-700">
        오전 7:30에 알람이 울려요
      </p>
      <ThumbCursor motion="thumb-wp-cursor" />
    </ThumbStage>
  );
}
