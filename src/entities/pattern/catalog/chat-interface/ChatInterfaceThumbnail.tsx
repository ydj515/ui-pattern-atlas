import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same chat as ChatInterfaceDemo: type 예약 되는 곳만 알려 줘 → send → the answer arrives below. */
export function ChatInterfaceThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 bg-slate-50 text-[6.5px]">
        <p className="absolute top-[6px] right-[6px] rounded-[8px] rounded-br-[2px] bg-slate-900 px-[5px] py-[2px] text-white">
          주말 브런치 추천해 줘
        </p>
        <p className="absolute top-[20px] left-[6px] rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[2px] shadow-sm">
          서울숲 근처 세 곳을 골라 봤어요.
        </p>
        <p className="thumb-anim thumb-chat-mine absolute top-[36px] right-[6px] rounded-[8px] rounded-br-[2px] bg-slate-900 px-[5px] py-[2px] text-white">
          예약 되는 곳만 알려 줘
        </p>
        <p className="thumb-anim thumb-chat-reply absolute top-[50px] left-[6px] w-[110px] rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[2px] shadow-sm">
          좋아요. 예약이 되는 곳만 다시 골라 볼게요.
        </p>
        <div className="absolute inset-x-0 bottom-0 flex h-[20px] items-center gap-[4px] border-t border-slate-200 bg-white px-[5px]">
          <span className="relative h-[12px] flex-1 rounded-full border border-slate-300 px-[5px] leading-[11px]">
            <span className="thumb-anim thumb-chat-hint absolute text-slate-400">
              예약 되는 곳만 알려 줘
            </span>
            <span className="thumb-anim thumb-chat-text absolute" style={{ opacity: 0 }}>
              예약 되는 곳만 알려 줘
            </span>
          </span>
          <span className="rounded-full bg-slate-900 px-[5px] py-[1px] font-semibold text-white">
            보내기
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-chat-cursor" />
    </ThumbStage>
  );
}
