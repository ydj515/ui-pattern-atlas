import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

function Btn({ on }: { readonly on: boolean }) {
  return on ? (
    <span className="rounded-[3px] border border-slate-300 px-[3px]">해제</span>
  ) : (
    <span className="rounded-[3px] bg-slate-900 px-[3px] text-white">연결</span>
  );
}

/** Same accounts as ConnectedAccountsDemo: the only sign-in cannot be removed until another is connected. */
export function ConnectedAccountsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">연결된 계정</b>
        <div className="mt-[3px] rounded-[4px] border border-slate-200">
          <p className="flex items-center justify-between border-b border-slate-100 px-[3px] py-[1px]">
            <span>
              카카오
              <span className="thumb-anim thumb-st-ca-kakao-from block text-[4.5px] text-slate-500">
                haneul@kakao.com
              </span>
            </span>
            <span className="grid justify-items-end">
              <span className="thumb-anim thumb-st-ca-lock col-start-1 row-start-1">
                <span className="opacity-40">
                  <Btn on />
                </span>
              </span>
              <span className="thumb-anim thumb-st-ca-free col-start-1 row-start-1" style={HIDDEN}>
                <Btn on />
              </span>
              <span
                className="thumb-anim thumb-st-ca-kakao-to col-start-1 row-start-1 bg-white"
                style={HIDDEN}
              >
                <Btn on={false} />
              </span>
            </span>
          </p>
          <p className="flex items-center justify-between border-b border-slate-100 px-[3px] py-[1px]">
            네이버
            <Btn on={false} />
          </p>
          <p className="flex items-center justify-between border-b border-slate-100 px-[3px] py-[1px]">
            <span>
              구글
              <span
                className="thumb-anim thumb-st-ca-google-to block text-[4.5px] text-slate-500"
                style={HIDDEN}
              >
                haneul@gmail.com
              </span>
            </span>
            <span className="grid justify-items-end">
              <span className="thumb-anim thumb-st-ca-google-from col-start-1 row-start-1">
                <Btn on={false} />
              </span>
              <span
                className="thumb-anim thumb-st-ca-google-to col-start-1 row-start-1"
                style={HIDDEN}
              >
                <Btn on />
              </span>
            </span>
          </p>
          <p className="flex items-center justify-between px-[3px] py-[1px]">
            애플
            <Btn on={false} />
          </p>
        </div>
        <p className="thumb-anim thumb-st-ca-lock mt-[2px] text-[5px] text-slate-500">
          로그인할 방법이 하나만 남아 해제할 수 없어요. 비밀번호를 먼저 만들어 주세요
        </p>
      </div>
      <ThumbCursor motion="thumb-st-ca-cursor" />
    </ThumbStage>
  );
}
