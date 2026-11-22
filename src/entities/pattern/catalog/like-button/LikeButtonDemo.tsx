import { useState } from "react";
import { LikeButton } from "@/shared/ui/patterns/like-button/LikeButton";

export function LikeButtonDemo() {
  const [liked, setLiked] = useState(false);
  return (
    <article className="w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="h-36 bg-gradient-to-br from-amber-100 to-orange-200" />
      <div className="p-4">
        <p className="text-sm text-slate-800">새로 연 빵집 다녀왔어요</p>
        <div className="mt-2 -ml-3">
          <LikeButton
            liked={liked}
            count={128 + (liked ? 1 : 0)}
            onToggle={setLiked}
            label="좋아요"
          />
        </div>
      </div>
    </article>
  );
}
