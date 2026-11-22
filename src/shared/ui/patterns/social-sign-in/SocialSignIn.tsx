import type { ReactNode } from "react";

export interface SignInProvider {
  readonly id: string;
  /** Full button text, e.g. "Google로 계속하기". */
  readonly label: string;
  readonly mark: ReactNode;
  readonly className: string;
}

export interface SocialSignInProps {
  readonly providers: readonly SignInProvider[];
  /** Provider whose sign-in is in progress. */
  readonly pending?: string | null;
  readonly onSelect: (id: string) => void;
  readonly pendingLabel?: string;
  readonly notice?: ReactNode;
}

/**
 * Stack of "continue with" buttons, one per account provider, each with the provider's
 * name in words. The chosen one shows that it is connecting and the rest wait, so a
 * second tap cannot start another sign-in.
 */
export function SocialSignIn({
  providers,
  pending = null,
  onSelect,
  pendingLabel = "연결하는 중",
  notice,
}: SocialSignInProps) {
  return (
    <div className="grid gap-2">
      {providers.map((provider) => (
        <button
          key={provider.id}
          type="button"
          disabled={pending !== null}
          aria-busy={pending === provider.id}
          onClick={() => onSelect(provider.id)}
          className={`relative flex h-11 items-center justify-center rounded-lg text-sm font-semibold disabled:cursor-not-allowed ${pending !== null && pending !== provider.id ? "opacity-50" : ""} ${provider.className}`}
        >
          <span aria-hidden="true" className="absolute left-4">
            {provider.mark}
          </span>
          {pending === provider.id ? pendingLabel : provider.label}
        </button>
      ))}
      {notice ? <p className="mt-1 text-center text-xs text-slate-500">{notice}</p> : null}
    </div>
  );
}
