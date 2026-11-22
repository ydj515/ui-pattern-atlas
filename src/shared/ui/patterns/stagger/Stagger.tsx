import { Children, type ReactNode } from "react";

export interface StaggerProps {
  readonly children: ReactNode;
  /** Gap between the start of each item, in ms. Keep the total under about 400 ms. */
  readonly gap?: number;
  readonly label?: string;
}

/**
 * List whose items fade up one after another when it appears, each starting `gap` ms
 * after the previous one. It uses CSS @starting-style, so it runs on mount; remount it
 * (change its key) to play again. Reduced motion shows all items at once.
 */
export function Stagger({ children, gap = 60, label }: StaggerProps) {
  return (
    <ul aria-label={label} className="grid gap-2">
      {Children.toArray(children).map((child, index) => (
        <li
          key={index}
          style={{ transitionDelay: `${index * gap}ms` }}
          className="transition duration-300 ease-out motion-reduce:transition-none starting:translate-y-2 starting:opacity-0"
        >
          {child}
        </li>
      ))}
    </ul>
  );
}
