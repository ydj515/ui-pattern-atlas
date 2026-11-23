import { useState } from "react";
import { ConnectedAccounts } from "@/shared/ui/patterns/connected-accounts/ConnectedAccounts";

const ACCOUNTS = [
  { id: "kakao", name: "카카오", connected: true, detail: "haneul@kakao.com" },
  { id: "naver", name: "네이버", connected: false },
  { id: "google", name: "구글", connected: false, detail: "haneul@gmail.com" },
  { id: "apple", name: "애플", connected: false },
];

export function ConnectedAccountsDemo() {
  const [accounts, setAccounts] = useState(ACCOUNTS);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <ConnectedAccounts
        accounts={accounts}
        hasPassword={false}
        onChange={(id, connected) =>
          setAccounts((current) =>
            current.map((account) => (account.id === id ? { ...account, connected } : account)),
          )
        }
        labels={{
          title: "연결된 계정",
          connect: (name) => `${name} 연결`,
          disconnect: (name) => `${name} 연결 해제`,
          connectShort: "연결",
          disconnectShort: "해제",
          lastOne: "로그인할 방법이 하나만 남아 해제할 수 없어요. 비밀번호를 먼저 만들어 주세요",
        }}
      />
    </section>
  );
}
