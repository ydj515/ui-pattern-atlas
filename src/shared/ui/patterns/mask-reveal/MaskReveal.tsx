export interface MaskRevealProps {
  readonly lines: readonly string[];
  readonly gap?: number;
  readonly className?: string;
}

/**
 * Lines that slide up from behind an invisible edge, as if a cover lifts: each line sits
 * in an overflow-hidden box and starts one line-height below it. Remount to replay; the
 * full text goes to screen readers, and reduced motion shows it at once.
 */
export function MaskReveal({ lines, gap = 120, className = "" }: MaskRevealProps) {
  return (
    <p className={className}>
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((line, index) => (
        <span key={line} aria-hidden="true" className="block overflow-hidden pb-[0.1em]">
          <span
            style={{ transitionDelay: `${index * gap}ms` }}
            className="block transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none starting:translate-y-[110%]"
          >
            {line}
          </span>
        </span>
      ))}
    </p>
  );
}
