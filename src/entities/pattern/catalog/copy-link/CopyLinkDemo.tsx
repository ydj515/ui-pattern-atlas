import { CopyLink } from "@/shared/ui/patterns/copy-link/CopyLink";

export function CopyLinkDemo() {
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">팀 초대</h3>
      <p className="text-sm text-slate-600">링크를 받은 사람은 7일 안에 들어올 수 있어요.</p>
      <CopyLink
        label="초대 링크"
        url="https://atlas.example/i/7KQ2"
        copyLabel="복사"
        copiedLabel="링크를 복사했어요"
      />
    </section>
  );
}
