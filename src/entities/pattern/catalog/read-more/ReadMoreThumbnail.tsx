import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TEXT =
  "바다가 보이는 2층 독채예요. 거실 통창으로 해 뜨는 모습을 볼 수 있고, 걸어서 3분이면 해변에 닿아요. 주방에는 기본 양념과 커피 머신이 있어요. 체크인은 오후 3시, 체크아웃은 오전 11시이고 주차는 2대까지 가능해요.";

/** Same text as ReadMoreDemo: three lines and 더 보기 → the whole text and 접기. */
export function ReadMoreThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-rm-short absolute top-[8px] left-[24px] h-[64px] w-[128px] rounded-md border border-slate-200 opacity-0">
        <p className="absolute top-[6px] left-[8px] text-[7px] font-semibold">숙소 소개</p>
        <p className="absolute top-[18px] left-[8px] h-[27px] w-[112px] overflow-hidden text-[6px] leading-[9px] text-slate-700">
          {TEXT}
        </p>
        <p className="absolute top-[48px] left-[8px] text-[6.5px] font-medium underline">더 보기</p>
      </div>
      <div className="thumb-anim thumb-rm-long absolute top-[8px] left-[24px] h-[92px] w-[128px] rounded-md border border-slate-200">
        <p className="absolute top-[6px] left-[8px] text-[7px] font-semibold">숙소 소개</p>
        <p className="absolute top-[18px] left-[8px] w-[112px] text-[6px] leading-[9px] text-slate-700">
          {TEXT}
        </p>
        <p className="absolute top-[76px] left-[8px] text-[6.5px] font-medium underline">접기</p>
      </div>
      <ThumbCursor motion="thumb-rm-cursor" />
    </ThumbStage>
  );
}
