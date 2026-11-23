import { useId } from "react";

export interface ConnectedAccount {
  readonly id: string;
  readonly name: string;
  readonly connected: boolean;
  /** e.g. the email shown by the provider. */
  readonly detail?: string;
}

export interface ConnectedAccountsProps {
  readonly accounts: readonly ConnectedAccount[];
  /** Whether a password is set; without one the last connection is the only way in. */
  readonly hasPassword: boolean;
  readonly onChange: (id: string, connected: boolean) => void;
  readonly labels?: {
    readonly title: string;
    readonly connect: (name: string) => string;
    readonly disconnect: (name: string) => string;
    readonly connectShort: string;
    readonly disconnectShort: string;
    readonly lastOne: string;
  };
}

const DEFAULT_LABELS = {
  title: "연결된 계정",
  connect: (name: string) => `${name} 연결`,
  disconnect: (name: string) => `${name} 연결 해제`,
  connectShort: "연결",
  disconnectShort: "해제",
  lastOne: "로그인할 방법이 하나만 남아 해제할 수 없어요. 비밀번호를 먼저 만들어 주세요",
};

/**
 * Sign-in providers linked to the account, each with connect or disconnect. The last
 * way to sign in cannot be removed, and the reason is written next to it.
 */
export function ConnectedAccounts({
  accounts,
  hasPassword,
  onChange,
  labels = DEFAULT_LABELS,
}: ConnectedAccountsProps) {
  const id = useId();
  const connected = accounts.filter((account) => account.connected).length;
  const locked = !hasPassword && connected === 1;
  return (
    <section className="grid gap-2 text-sm">
      <h3 className="font-semibold text-slate-900">{labels.title}</h3>
      <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200">
        {accounts.map((account) => {
          const lastOne = locked && account.connected;
          return (
            <li key={account.id} className="flex items-center gap-3 px-3 py-2.5">
              <span className="flex-1">
                <span className="block text-slate-900">{account.name}</span>
                {account.connected && account.detail ? (
                  <span className="text-xs text-slate-500">{account.detail}</span>
                ) : null}
              </span>
              <button
                type="button"
                aria-label={
                  account.connected ? labels.disconnect(account.name) : labels.connect(account.name)
                }
                aria-describedby={lastOne ? `${id}-last` : undefined}
                disabled={lastOne}
                onClick={() => onChange(account.id, !account.connected)}
                className={`rounded-lg px-3 py-1 text-xs font-medium disabled:opacity-40 ${account.connected ? "border border-slate-300 text-slate-700" : "bg-slate-900 text-white"}`}
              >
                {account.connected ? labels.disconnectShort : labels.connectShort}
              </button>
            </li>
          );
        })}
      </ul>
      {locked ? (
        <p id={`${id}-last`} className="text-xs text-slate-500">
          {labels.lastOne}
        </p>
      ) : null}
    </section>
  );
}
