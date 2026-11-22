import { useState } from "react";
import { QrShare } from "@/shared/ui/patterns/qr-sharing/QrShare";

const URL = "https://atlas.example/i/7KQ2";

export function QrShareDemo() {
  const [open, setOpen] = useState(false);
  return (
    <section className="grid w-72 justify-items-center gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-center">
      <h3 className="text-base font-bold text-slate-900">토요일 독서 모임</h3>
      {open ? (
        <>
          <QrShare url={URL} label="모임 초대 QR 코드" size={144} />
          <p className="text-xs text-slate-600">카메라로 찍으면 초대 페이지가 열려요</p>
          <p className="text-xs break-all text-slate-500">{URL}</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
          >
            닫기
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
        >
          QR 코드로 초대하기
        </button>
      )}
    </section>
  );
}
