import { useEffect, useState } from "react";
import {
  NearbyShare,
  type NearbyDevice,
  type NearbyStatus,
} from "@/shared/ui/patterns/nearby-share/NearbyShare";

const FOUND: readonly NearbyDevice[] = [
  { id: "tablet", name: "하늘의 태블릿", kind: "tablet" },
  { id: "phone", name: "도윤의 휴대폰", kind: "phone" },
  { id: "laptop", name: "회의실 노트북", kind: "laptop" },
];

const LABELS = {
  searching: "주변 기기를 찾는 중",
  waiting: "수락을 기다리는 중",
  sent: "보냈어요",
  declined: "상대가 거절했어요",
};

export function NearbyShareDemo() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState<string | null>(null);
  const [status, setStatus] = useState<NearbyStatus>("idle");

  useEffect(() => {
    if (count >= FOUND.length) return;
    const timer = window.setTimeout(() => setCount((value) => value + 1), 700);
    return () => window.clearTimeout(timer);
  }, [count]);

  function pick(id: string) {
    setTarget(id);
    setStatus("waiting");
    window.setTimeout(() => setStatus(id === "laptop" ? "declined" : "sent"), 1200);
  }

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">사진 3장 보내기</h3>
      <NearbyShare
        title="근처 공유"
        devices={FOUND.slice(0, count)}
        searching={count < FOUND.length}
        target={target}
        status={status}
        onPick={pick}
        labels={LABELS}
      />
    </section>
  );
}
