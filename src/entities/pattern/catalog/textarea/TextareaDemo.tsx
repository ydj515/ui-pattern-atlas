import { useState } from "react";

import { AutoTextarea } from "@/shared/ui/patterns/textarea/AutoTextarea";

export function TextareaDemo() {
  const [review, setReview] = useState("배송이 빨랐어요.\n포장도 꼼꼼했어요.\n다음에도 살게요.");

  return (
    <div className="w-full max-w-xs">
      <AutoTextarea
        label="후기"
        placeholder="어떤 점이 좋았나요?"
        maxLength={100}
        minRows={1}
        value={review}
        onChange={setReview}
      />
    </div>
  );
}
