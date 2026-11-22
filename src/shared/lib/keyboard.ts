/** True when the event happens inside a text field, so single-key shortcuts must not fire. */
export function isEditableTarget(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  );
}

/** ⌘K on Apple platforms, Ctrl+K elsewhere. */
export function isCommandK(event: KeyboardEvent): boolean {
  return (event.metaKey || event.ctrlKey) && !event.altKey && event.key.toLowerCase() === "k";
}

/** Label for the ⌘K shortcut on the visitor's platform. */
export function commandKLabel(): string {
  return /Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘K" : "Ctrl K";
}
