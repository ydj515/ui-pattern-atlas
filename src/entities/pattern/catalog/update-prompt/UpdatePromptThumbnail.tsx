import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

function Notes() {
  return (
    <ul className="list-disc pl-[8px] text-slate-600">
      <li>사진을 한 번에 20장까지 올려요</li>
      <li>다크 모드 글자가 더 또렷해져요</li>
    </ul>
  );
}

/** Same prompts as UpdatePromptDemo: an optional update can wait; a required one says why it cannot. */
export function UpdatePromptThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35] bg-slate-50">
        <p className="relative grid grid-cols-2 rounded-[4px] bg-slate-200 p-[1px] text-center text-[5.5px] text-slate-600">
          <span className="thumb-anim thumb-lr-up-seg absolute top-[1px] bottom-[1px] left-[1px] w-[calc(50%-1px)] rounded-[3px] bg-white" />
          <span className="relative py-[1px]">선택 업데이트</span>
          <span className="relative py-[1px]">필수 업데이트</span>
        </p>
        <div className="relative mt-[3px] h-[62px]">
          <div className="thumb-anim thumb-lr-up-opt absolute inset-0 grid content-start gap-[3px] rounded-[6px] border border-slate-200 bg-white p-[5px]">
            <b className="text-[7px]">새 버전(4.2)이 나왔어요</b>
            <Notes />
            <p className="mt-[2px] flex gap-[3px] text-center">
              <span className="rounded-[3px] border border-slate-300 px-[5px] py-[1px]">
                나중에
              </span>
              <span className="flex-1 rounded-[3px] bg-slate-900 py-[1px] text-white">
                업데이트
              </span>
            </p>
          </div>
          <div
            className="thumb-anim thumb-lr-up-req absolute inset-0 grid content-start gap-[1px] rounded-[6px] border border-slate-200 bg-white p-[4px]"
            style={HIDDEN}
          >
            <b className="text-[7px]">4.2 버전으로 업데이트해야 쓸 수 있어요</b>
            <p className="text-rose-700">
              보안 문제를 고친 버전이라 이전 버전으로는 로그인할 수 없어요
            </p>
            <Notes />
            <span className="rounded-[3px] bg-slate-900 py-[1px] text-center text-white">
              업데이트
            </span>
          </div>
        </div>
        <p
          className="thumb-anim thumb-lr-up-done mt-[2px] text-[5.5px] text-slate-600"
          style={HIDDEN}
        >
          앱 스토어로 이동해 업데이트해요
        </p>
      </div>
      <ThumbCursor motion="thumb-lr-up-cursor" />
    </ThumbStage>
  );
}
