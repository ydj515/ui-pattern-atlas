import { useState } from "react";
import { TypeToConfirm } from "@/shared/ui/patterns/type-to-confirm/TypeToConfirm";

export function TypeToConfirmDemo() {
  const [deleted, setDeleted] = useState(false);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      {deleted ? (
        <p role="status" className="text-sm text-slate-700">
          봄 사진첩을 지웠어요
        </p>
      ) : (
        <TypeToConfirm
          target="봄 사진첩"
          consequences={["사진 128장이 함께 지워져요", "공유받은 3명도 더 볼 수 없어요"]}
          onConfirm={() => setDeleted(true)}
          labels={{
            title: "사진첩을 지울까요?",
            prompt: (target) => `지우려면 ${target}을 입력하세요`,
            confirm: "영구 삭제",
          }}
        />
      )}
    </section>
  );
}
