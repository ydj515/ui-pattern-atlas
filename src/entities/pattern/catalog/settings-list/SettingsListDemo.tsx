import { useState } from "react";
import { SettingsList } from "@/shared/ui/patterns/settings-list/SettingsList";

const MESSAGES: Record<string, string> = {
  theme: "화면 모드를 고르는 화면을 열어요",
  text: "글자 크기를 고르는 화면을 열어요",
  logout: "로그아웃할지 묻는 창을 띄워요",
  delete: "회원 탈퇴 화면으로 이동해요",
};

export function SettingsListDemo() {
  const [push, setPush] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <SettingsList
        sections={[
          {
            title: "알림",
            rows: [
              { id: "push", label: "앱 푸시", kind: "switch", checked: push },
              {
                id: "marketing",
                label: "혜택 소식 받기",
                kind: "switch",
                checked: marketing,
                description: "쿠폰과 할인 소식을 보내 드려요",
              },
            ],
          },
          {
            title: "화면",
            rows: [
              { id: "theme", label: "화면 모드", kind: "value", value: "시스템 설정" },
              { id: "text", label: "글자 크기", kind: "value", value: "보통" },
            ],
          },
          {
            title: "계정",
            rows: [
              { id: "logout", label: "로그아웃", kind: "action" },
              { id: "delete", label: "회원 탈퇴", kind: "action", tone: "danger" },
            ],
          },
        ]}
        onToggle={(id, checked) => (id === "push" ? setPush(checked) : setMarketing(checked))}
        onOpen={(id) => setMessage(MESSAGES[id] ?? "")}
      />
      <p role="status" className="mt-2 min-h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
