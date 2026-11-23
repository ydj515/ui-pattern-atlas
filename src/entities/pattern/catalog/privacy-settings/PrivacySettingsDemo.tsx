import { useState } from "react";
import { PrivacySettings } from "@/shared/ui/patterns/privacy-settings/PrivacySettings";

export function PrivacySettingsDemo() {
  const [visibility, setVisibility] = useState("public");
  const [toggles, setToggles] = useState({ search: true, history: true });
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <PrivacySettings
        visibility={[
          { id: "public", label: "전체 공개", description: "누구나 프로필과 후기를 볼 수 있어요" },
          { id: "followers", label: "팔로워만", description: "나를 팔로우한 사람만 볼 수 있어요" },
          { id: "private", label: "나만 보기", description: "다른 사람에게 보이지 않아요" },
        ]}
        value={visibility}
        onVisibilityChange={setVisibility}
        toggles={[
          { id: "search", label: "검색에 내 프로필 보이기", checked: toggles.search },
          { id: "history", label: "본 상품 기록 저장", checked: toggles.history },
        ]}
        onToggle={(id, checked) => setToggles((current) => ({ ...current, [id]: checked }))}
        onRequestData={() => undefined}
        labels={{
          visibility: "프로필 공개 범위",
          data: "내 데이터",
          request: "내 데이터 내려받기 요청",
          requested: "요청을 받았어요. 준비되면 메일로 알려 드려요",
        }}
      />
    </section>
  );
}
