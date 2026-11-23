/** Line icons shared by the comparison demos and their thumbnails (24px grid, currentColor). */
const PATHS = {
  kebab: "M12 5h.01M12 12h.01M12 19h.01",
  meatballs: "M5 12h.01M12 12h.01M19 12h.01",
  share: "M12 3v12M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6",
  export:
    "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6ZM14 3v6h6M12 18v-6M9 15l3 3 3-3",
  close: "M6 6l12 12M18 6 6 18",
  back: "M15 5l-7 7 7 7",
  refresh: "M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7",
  undo: "M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM20 20l-4-4",
  zoomIn: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM20 20l-4-4M11 8v6M8 11h6",
  edit: "M4 20h4L19 9l-4-4L4 16v4ZM14 6l4 4",
  compose: "M12 5v14M5 12h14",
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z",
  bookmark: "M6 3h12v18l-6-4-6 4V3Z",
  bell: "M6 16V11a6 6 0 1 1 12 0v5l2 2H4l2-2ZM10 21h4",
  star: "M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z",
  download: "M12 3v12M7 10l5 5 5-5M5 21h14",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  calendar: "M4 6h16v14H4V6ZM4 10h16M8 3v4M16 3v4",
  chevronDown: "M6 9l6 6 6-6",
  cart: "M3 4h2l2 12h11l2-8H6M9 20h.01M17 20h.01",
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  className = "size-5",
  filled = false,
}: {
  readonly name: IconName;
  readonly className?: string;
  readonly filled?: boolean;
}) {
  const dots = name === "kebab" || name === "meatballs";
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={dots ? 3.2 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
