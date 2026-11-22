import { useState } from "react";

import { TagInput } from "@/shared/ui/patterns/tag-input/TagInput";

export function TagInputDemo() {
  const [tags, setTags] = useState<readonly string[]>(["디자인"]);

  return (
    <div className="w-full max-w-xs space-y-1.5">
      <TagInput
        label="관심 분야"
        tags={tags}
        onChange={setTags}
        maxTags={5}
        removeLabel={(tag) => `${tag} 삭제`}
        announce={(tag, action) =>
          `${tag} 태그를 ${action === "added" ? "추가했어요" : "삭제했어요"}`
        }
      />
      <p className="text-xs text-slate-500">Enter나 쉼표로 추가해요. 예: 개발, 마케팅</p>
    </div>
  );
}
