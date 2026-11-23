import { VennDiagram } from "@/shared/ui/patterns/venn-diagram/VennDiagram";

export function VennDiagramDemo() {
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <VennDiagram
        title="마케팅 수신 동의"
        sets={[
          { key: "email", label: "이메일" },
          { key: "push", label: "앱 푸시" },
          { key: "sms", label: "문자" },
        ]}
        regions={[
          { sets: ["email"], value: 320 },
          { sets: ["push"], value: 280 },
          { sets: ["sms"], value: 150 },
          { sets: ["email", "push"], value: 120 },
          { sets: ["email", "sms"], value: 60 },
          { sets: ["push", "sms"], value: 90 },
          { sets: ["email", "push", "sms"], value: 40 },
        ]}
        format={(value) => `${value}명`}
        describe={(set, total, shared) => `${set} 동의 ${total}, 세 가지 모두 ${shared}`}
      />
    </section>
  );
}
