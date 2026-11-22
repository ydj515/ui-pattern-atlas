import { useState } from "react";

import { PermissionDenied } from "@/shared/ui/patterns/permission-denied/PermissionDenied";

export function PermissionDeniedDemo() {
  const [requested, setRequested] = useState(false);

  return (
    <div className="w-full max-w-xs">
      <PermissionDenied
        title="이 문서를 볼 권한이 없어요"
        description="소유자 김하늘 님에게 권한을 요청할 수 있어요."
        account="sky@example.com 계정으로 로그인 중"
        requested={requested}
        onRequest={() => setRequested(true)}
        requestLabel="권한 요청"
        requestedLabel="요청함"
        requestedMessage="승인되면 메일로 알려 드려요."
      />
    </div>
  );
}
