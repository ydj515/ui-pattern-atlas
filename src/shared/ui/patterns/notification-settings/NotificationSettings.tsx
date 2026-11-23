export interface NotificationTopic {
  readonly id: string;
  readonly label: string;
  /** Channels that cannot be turned off, e.g. order updates by push. */
  readonly required?: readonly string[];
}

export interface NotificationChannel {
  readonly id: string;
  readonly label: string;
}

export interface NotificationSettingsProps {
  readonly topics: readonly NotificationTopic[];
  readonly channels: readonly NotificationChannel[];
  /** Enabled pairs as "topic:channel". */
  readonly enabled: ReadonlySet<string>;
  readonly onChange: (enabled: ReadonlySet<string>) => void;
  readonly caption: string;
  readonly requiredNote?: string;
  readonly checkboxLabel?: (topic: string, channel: string) => string;
}

/**
 * What to be told about, by which channel: a small grid of checkboxes with topics as
 * rows and channels as columns. Notices that must reach the user are checked and
 * locked, and say why.
 */
export function NotificationSettings({
  topics,
  channels,
  enabled,
  onChange,
  caption,
  requiredNote = "필수 알림은 끌 수 없어요",
  checkboxLabel = (topic, channel) => `${topic} ${channel}`,
}: NotificationSettingsProps) {
  function toggle(key: string, on: boolean) {
    const next = new Set(enabled);
    if (on) next.add(key);
    else next.delete(key);
    onChange(next);
  }
  return (
    <div className="grid gap-2 text-sm">
      <table className="w-full text-left">
        <caption className="mb-2 text-left font-semibold text-slate-900">{caption}</caption>
        <thead>
          <tr className="text-xs text-slate-500">
            <th scope="col" className="font-normal" />
            {channels.map((channel) => (
              <th key={channel.id} scope="col" className="px-1 text-center font-normal">
                {channel.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {topics.map((topic) => (
            <tr key={topic.id} className="border-t border-slate-100">
              <th scope="row" className="py-2 font-normal text-slate-800">
                {topic.label}
              </th>
              {channels.map((channel) => {
                const key = `${topic.id}:${channel.id}`;
                const required = topic.required?.includes(channel.id) ?? false;
                return (
                  <td key={channel.id} className="text-center">
                    <input
                      type="checkbox"
                      aria-label={checkboxLabel(topic.label, channel.label)}
                      checked={required || enabled.has(key)}
                      disabled={required}
                      onChange={(event) => toggle(key, event.target.checked)}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-slate-500">{requiredNote}</p>
    </div>
  );
}
