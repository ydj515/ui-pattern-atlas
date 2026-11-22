import { useState } from "react";

import { NotFoundPage } from "@/shared/ui/patterns/not-found-page/NotFoundPage";

const BROKEN_PATH = "/blog/ui-patern";

export function NotFoundPageDemo() {
  const [path, setPath] = useState(BROKEN_PATH);
  const [message, setMessage] = useState("");

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white">
      <p className="border-b border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs text-slate-500">
        {path}
      </p>
      {path === "/" ? (
        <div className="px-6 py-10 text-center">
          <p className="text-sm font-semibold text-slate-900">홈</p>
          <button
            type="button"
            onClick={() => setPath(BROKEN_PATH)}
            className="mt-3 text-xs font-medium text-blue-700 underline underline-offset-2"
          >
            없는 주소 열기
          </button>
        </div>
      ) : (
        <>
          <NotFoundPage
            title="페이지를 찾을 수 없어요"
            description="주소가 바뀌었거나 삭제된 페이지예요."
            searchPlaceholder="찾으려던 내용"
            searchLabel="검색"
            onSearch={(query) => setMessage(`‘${query}’ 검색 결과로 이동해요`)}
            homeAction={
              <button
                type="button"
                onClick={() => {
                  setMessage("");
                  setPath("/");
                }}
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                홈으로 가기
              </button>
            }
          />
          <p role="status" className="-mt-4 min-h-4 pb-3 text-center text-xs text-slate-500">
            {message}
          </p>
        </>
      )}
    </div>
  );
}
