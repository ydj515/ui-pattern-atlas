import { useState } from "react";

import { MaskedInput } from "@/shared/ui/patterns/input-mask/MaskedInput";

export function InputMaskDemo() {
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState("");

  return (
    <div className="w-full max-w-xs space-y-3">
      <MaskedInput
        label="휴대폰 번호"
        mask="000-0000-0000"
        placeholder="010-0000-0000"
        autoComplete="tel-national"
        value={phone}
        onChange={setPhone}
      />
      <MaskedInput
        label="카드 번호"
        mask="0000 0000 0000 0000"
        placeholder="0000 0000 0000 0000"
        autoComplete="cc-number"
        value={card}
        onChange={setCard}
      />
      <p className="text-xs text-slate-500">저장되는 값: {phone || "-"}</p>
    </div>
  );
}
