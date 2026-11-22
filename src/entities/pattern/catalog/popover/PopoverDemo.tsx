import { Popover } from "@/shared/ui/patterns/popover/Popover";

export function PopoverDemo() {
  return (
    <div className="flex flex-col items-center gap-2 pb-32">
      <p className="text-sm text-slate-700">
        이번 달 예상 요금 <strong className="font-semibold">12,400원</strong>
      </p>
      <Popover trigger="요금 계산 방식" title="요금은 이렇게 계산돼요">
        <ul className="list-disc space-y-1 pl-4">
          <li>기본료 9,900원</li>
          <li>추가 사용량 1GB당 500원</li>
        </ul>
        <button
          type="button"
          className="mt-2 font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600"
        >
          요금제 바꾸기
        </button>
      </Popover>
    </div>
  );
}
