import { useState } from "react";
import { VersionHistory, type Version } from "@/shared/ui/patterns/version-history/VersionHistory";

const VERSIONS: readonly Version[] = [
  {
    id: "v3",
    time: "오늘 14:20",
    author: "하늘",
    summary: "숙소를 바꿈",
    body: "숙소: 성수동\n일정: 서울숲, 뚝섬",
  },
  {
    id: "v2",
    time: "오늘 11:05",
    author: "민준",
    summary: "서울숲 추가",
    body: "숙소: 을지로\n일정: 서울숲, 뚝섬",
  },
  {
    id: "v1",
    time: "어제 21:40",
    author: "하늘",
    summary: "처음 만듦",
    body: "숙소: 을지로\n일정: 뚝섬",
  },
];

export function VersionHistoryDemo() {
  const [versions, setVersions] = useState(VERSIONS);
  const [value, setValue] = useState("v3");
  const [message, setMessage] = useState("");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <VersionHistory
        versions={versions}
        value={value}
        onSelect={(id) => {
          setValue(id);
          setMessage("");
        }}
        onRestore={(id) => {
          const source = versions.find((version) => version.id === id);
          if (!source) return;
          const restored = {
            ...source,
            id: `restored-${versions.length}`,
            time: "방금",
            author: "나",
            summary: `${source.time} 버전으로 되돌림`,
          };
          setVersions([restored, ...versions]);
          setValue(restored.id);
          setMessage(`${source.time} 버전으로 되돌렸어요`);
        }}
        labels={{
          title: "버전 기록",
          current: "지금 버전",
          restore: "이 버전으로 되돌리기",
          note: "되돌려도 지금 내용은 기록에 남아요",
        }}
      />
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
