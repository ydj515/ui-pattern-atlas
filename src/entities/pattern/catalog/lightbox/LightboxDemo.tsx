import { useState } from "react";

import { Lightbox } from "@/shared/ui/patterns/lightbox/Lightbox";

const PHOTOS = [
  { id: "river", caption: "서울 한강", tone: "from-sky-300 to-cyan-600" },
  { id: "forest", caption: "서울숲 길", tone: "from-emerald-300 to-green-700" },
  { id: "sunset", caption: "한강 노을", tone: "from-amber-300 to-rose-500" },
  { id: "mountain", caption: "인왕산 능선", tone: "from-lime-200 to-emerald-500" },
] as const;

export function LightboxDemo() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-xs">
      <ul className="grid grid-cols-2 gap-2">
        {PHOTOS.map((photo, photoIndex) => (
          <li key={photo.id}>
            <button
              type="button"
              aria-label={`${photo.caption} 크게 보기`}
              onClick={() => setIndex(photoIndex)}
              className={`block aspect-[4/3] w-full rounded-lg bg-gradient-to-br ${photo.tone} hover:opacity-90 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none`}
            />
          </li>
        ))}
      </ul>
      <Lightbox
        index={index}
        onIndexChange={setIndex}
        closeLabel="닫기"
        prevLabel="이전 사진"
        nextLabel="다음 사진"
        counter={(current, total) => `${current + 1} / ${total}`}
        items={PHOTOS.map((photo) => ({
          id: photo.id,
          caption: photo.caption,
          content: <div className={`size-full bg-gradient-to-br ${photo.tone}`} />,
        }))}
      />
    </div>
  );
}
