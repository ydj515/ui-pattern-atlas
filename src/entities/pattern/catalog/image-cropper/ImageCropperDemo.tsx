import { useState } from "react";

import {
  cropStyle,
  ImageCropper,
  type Crop,
} from "@/shared/ui/patterns/image-cropper/ImageCropper";

// A stand-in photo; in a real app this is the file the user just chose.
export const PHOTO = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fde68a"/><circle cx="160" cy="40" r="18" fill="#fff7ed"/><path d="M0 150 60 110l40 25 50-40 50 35v70H0Z" fill="#86efac"/><circle cx="100" cy="88" r="26" fill="#78350f"/><circle cx="100" cy="92" r="20" fill="#fcd9b6"/><path d="M62 170c4-30 20-44 38-44s34 14 38 44Z" fill="#2563eb"/></svg>`,
)}`;
const FRAME = 200;

export function ImageCropperDemo() {
  const [crop, setCrop] = useState<Crop>({ x: 0, y: 0, zoom: 1.4 });

  return (
    <div className="flex items-start gap-5">
      <ImageCropper
        src={PHOTO}
        value={crop}
        onChange={setCrop}
        size={FRAME}
        frameLabel="사진 위치. 화살표 키로 옮겨요"
        zoomLabel="확대"
      />
      <div className="space-y-2 text-center">
        <p className="text-xs text-slate-500">미리 보기</p>
        {[64, 32].map((size) => (
          <div
            key={size}
            className="relative mx-auto overflow-hidden rounded-full bg-slate-200"
            style={{ width: size, height: size }}
          >
            <img
              src={PHOTO}
              alt=""
              className="absolute inset-0 size-full object-cover"
              style={cropStyle(crop, FRAME, size)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
