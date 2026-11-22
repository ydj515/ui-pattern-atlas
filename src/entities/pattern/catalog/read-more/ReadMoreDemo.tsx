import { ReadMore } from "@/shared/ui/patterns/read-more/ReadMore";

export function ReadMoreDemo() {
  return (
    <article className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-slate-900">숙소 소개</h3>
      <div className="mt-2">
        <ReadMore lines={3} moreLabel="더 보기" lessLabel="접기">
          바다가 보이는 2층 독채예요. 거실 통창으로 해 뜨는 모습을 볼 수 있고, 걸어서 3분이면 해변에
          닿아요. 주방에는 기본 양념과 커피 머신이 있어요. 체크인은 오후 3시, 체크아웃은 오전
          11시이고 주차는 2대까지 가능해요.
        </ReadMore>
      </div>
    </article>
  );
}
