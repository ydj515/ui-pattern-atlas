import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };
const LEVELS = [
  ["전체 공개", "누구나 프로필과 후기를 볼 수 있어요", "thumb-st-ps-pub"],
  ["팔로워만", "나를 팔로우한 사람만 볼 수 있어요", ""],
  ["나만 보기", "다른 사람에게 보이지 않아요", "thumb-st-ps-priv"],
] as const;

/** Same page as PrivacySettingsDemo: each visibility level says what it means; a copy of one's data can be requested. */
export function PrivacySettingsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7px]">프로필 공개 범위</b>
        {LEVELS.map(([label, description, motion]) => (
          <p
            key={label}
            className="relative mt-[2px] flex gap-[3px] rounded-[3px] border border-slate-200 px-[3px]"
          >
            {motion ? (
              <span
                className={`thumb-anim ${motion} absolute -inset-px rounded-[3px] border border-slate-900`}
                style={motion === "thumb-st-ps-priv" ? HIDDEN : undefined}
              />
            ) : null}
            <span className="relative mt-[1px] size-[5px] shrink-0 rounded-full border border-slate-400">
              {motion ? (
                <span
                  className={`thumb-anim ${motion} absolute inset-[1px] rounded-full bg-slate-900`}
                  style={motion === "thumb-st-ps-priv" ? HIDDEN : undefined}
                />
              ) : null}
            </span>
            <span>
              {label}
              <span className="block text-[4.5px] text-slate-500">{description}</span>
            </span>
          </p>
        ))}
        <span className="mt-[3px] block w-fit rounded-[3px] border border-slate-300 px-[3px]">
          내 데이터 내려받기 요청
        </span>
        <p className="thumb-anim thumb-st-ps-req mt-[1px] text-[5px] text-slate-600" style={HIDDEN}>
          요청을 받았어요. 준비되면 메일로 알려 드려요
        </p>
      </div>
      <ThumbCursor motion="thumb-st-ps-cursor" />
    </ThumbStage>
  );
}
