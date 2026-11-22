import { useState } from "react";

import { Avatar } from "@/shared/ui/patterns/avatar/Avatar";

const PHOTO = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="#bfdbfe"/><circle cx="20" cy="16" r="7" fill="#fcd9b6"/><path d="M8 40c1-9 6-13 12-13s11 4 12 13Z" fill="#2563eb"/></svg>`,
)}`;

export function AvatarDemo() {
  const [broken, setBroken] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-end gap-3">
        <Avatar name="김하늘" src={broken ? "/broken-image.png" : PHOTO} size={48} />
        <Avatar name="이도윤" size={40} />
        <Avatar name="박서준" size={32} />
      </div>
      <button
        type="button"
        onClick={() => setBroken((value) => !value)}
        className="rounded-md border border-slate-300 px-3 py-1.5 text-xs"
      >
        {broken ? "사진 되돌리기" : "사진 불러오기 실패"}
      </button>
    </div>
  );
}
