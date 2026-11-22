import { ImageGallery } from "@/shared/ui/patterns/image-gallery/ImageGallery";

const PHOTOS = [
  { id: "front", alt: "머그컵 정면", tone: "from-rose-200 to-rose-400", shape: "rounded-b-3xl" },
  {
    id: "side",
    alt: "머그컵 옆면과 손잡이",
    tone: "from-rose-200 to-rose-400",
    shape: "rounded-b-3xl rounded-r-full",
  },
  { id: "top", alt: "위에서 본 머그컵", tone: "from-rose-100 to-rose-300", shape: "rounded-full" },
  { id: "box", alt: "포장 상자", tone: "from-amber-100 to-amber-300", shape: "rounded-md" },
] as const;

export function ImageGalleryDemo() {
  return (
    <div className="w-60">
      <ImageGallery
        label="상품 사진"
        thumbLabel={(image, index, total) => `${index + 1} / ${total}, ${image.alt}`}
        images={PHOTOS.map((photo) => ({
          id: photo.id,
          alt: photo.alt,
          render: (size) => (
            <div className="grid size-full place-items-center bg-slate-50">
              <span
                className={`block bg-gradient-to-br ${photo.tone} ${photo.shape} ${size === "large" ? "size-28" : "size-8"}`}
              />
            </div>
          ),
        }))}
      />
    </div>
  );
}
