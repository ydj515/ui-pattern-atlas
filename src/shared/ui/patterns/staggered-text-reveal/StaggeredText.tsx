export interface StaggeredTextProps {
  readonly lines: readonly string[];
  /** Reveal line by line or word by word. */
  readonly by?: "line" | "word";
  /** Gap between pieces in ms. */
  readonly gap?: number;
  readonly className?: string;
}

/**
 * Heading whose lines (or words) rise in one after another when it mounts. It uses CSS
 * @starting-style, so remount it to replay. Screen readers get the full text, and
 * reduced motion shows everything at once.
 */
export function StaggeredText({
  lines,
  by = "line",
  gap = 120,
  className = "",
}: StaggeredTextProps) {
  let piece = 0;
  return (
    <p className={className}>
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((line) => (
        <span key={line} aria-hidden="true" className="block">
          {(by === "line" ? [line] : line.split(" ")).map((part, index) => {
            const delay = piece++ * gap;
            return (
              <span key={index}>
                {index > 0 ? " " : null}
                <span
                  style={{ transitionDelay: `${delay}ms` }}
                  className="inline-block transition duration-500 ease-out motion-reduce:transition-none starting:translate-y-3 starting:opacity-0"
                >
                  {part}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}
