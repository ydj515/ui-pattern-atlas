import { useState } from "react";
import { ProfileSetup } from "@/shared/ui/patterns/profile-setup/ProfileSetup";

const LABELS = {
  name: "닉네임",
  photo: "사진 선택",
  done: "완료",
  skip: "나중에 하기",
  hint: (min: number, max: number) => `${min}~${max}자로 정해 주세요`,
};

export function ProfileSetupDemo() {
  const [result, setResult] = useState<string | null>(null);
  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-5">
      {result === null ? (
        <>
          <h3 className="mb-4 text-base font-bold text-slate-900">프로필을 만들어요</h3>
          <ProfileSetup
            labels={LABELS}
            placeholder="하늘"
            onDone={(profile) => setResult(profile.name)}
            onSkip={() => setResult("")}
          />
        </>
      ) : (
        <div role="status" className="grid justify-items-center gap-3 py-10 text-center">
          <p className="text-base font-bold text-slate-900">
            {result ? <>{result} 님, 반가워요</> : "프로필은 나중에 만들 수 있어요"}
          </p>
          <button
            type="button"
            onClick={() => setResult(null)}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
          >
            처음부터
          </button>
        </div>
      )}
    </section>
  );
}
