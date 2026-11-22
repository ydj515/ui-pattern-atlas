import { useState } from "react";

import { EmptyState } from "@/shared/ui/patterns/empty-state/EmptyState";

export function EmptyStateDemo() {
  const [projects, setProjects] = useState<readonly string[]>([]);

  if (projects.length === 0) {
    return (
      <div className="w-full max-w-sm">
        <EmptyState
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2h7.5A2.5 2.5 0 0 1 21 9.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Z"
              />
            </svg>
          }
          title="아직 프로젝트가 없어요"
          description="첫 프로젝트를 만들고 팀원을 초대해 보세요."
          action={
            <button
              type="button"
              onClick={() => setProjects(["새 프로젝트"])}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              프로젝트 만들기
            </button>
          }
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm space-y-3">
      <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
        {projects.map((project) => (
          <li key={project} className="px-4 py-3 text-sm font-medium text-slate-800">
            {project}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setProjects([])}
        className="w-full text-center text-xs text-slate-500 underline underline-offset-2"
      >
        빈 상태로 되돌리기
      </button>
    </div>
  );
}
