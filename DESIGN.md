# Design System

UI Pattern Atlas is a dictionary of UI patterns. The site looks like one: ink on white
paper, serif headwords, and a single highlighter colour that marks what you selected or
searched for. The patterns themselves are the colourful part; the chrome stays quiet.

Tokens live in [`src/app/styles/global.css`](src/app/styles/global.css) (`@theme`). Use the
token names below in class names, never raw values. `src/app/styles/designTokens.test.ts`
fails on raw hex colours, default palette colours, default type steps and arbitrary
font sizes or radii in site chrome.

**Scope.** These tokens are for the site chrome only. Components in
`src/shared/ui/patterns/` and the catalog demos and thumbnails use the default Tailwind
palette so they can be copied into any project.

## Colour

Light and dark themes. The site follows the operating system until the visitor presses the
sun/moon toggle in the header; the choice is stored per browser and applied to `<html data-theme>` before first
paint (inline script in `index.html`). Only colour values change between themes, never class
names. Use the `dark:` variant only when a role genuinely needs a different utility.

| Token           | Light                   | Dark      | Role                                                   |
| --------------- | ----------------------- | --------- | ------------------------------------------------------ |
| `paper`         | `#ffffff`               | `#141517` | Page background, text on `ink`                         |
| `ink`           | `#1d1f23`               | `#e8e9eb` | Primary text, primary button, focus outline            |
| `graphite`      | `#5f6670`               | `#a2a8b1` | Secondary text, meta, inactive navigation (≥ 5.9:1)    |
| `subtle`        | `#8b919a`               | `#6f757e` | Placeholders and disabled text only                    |
| `rule`          | `#e3e5e8`               | `#2a2d31` | Dividers and section rules                             |
| `rule-strong`   | `#c4c9d0`               | `#43474e` | Input borders, resting link underline                  |
| `field`         | `#f1f2f4`               | `#1d1f22` | Card thumbnail surfaces, selected tabs                 |
| `field-hover`   | `#e8eaed`               | `#25282c` | `field` under the pointer                              |
| `marker`        | `#ffe45c`               | same      | Highlighter: selected category, search matches only    |
| `marker-ink`    | `#1d1f23`               | same      | Text on `marker`                                       |
| `positive`      | `#047857`               | `#34d399` | "When to use" marks                                    |
| `negative`      | `#be123c`               | `#fb7185` | "When not to use" marks                                |
| `canvas`        | `#f1f2f4`               | `#dfe2e6` | Live demo stage. Stays light: demos are light-only UIs |
| `canvas-raised` | `#ffffff`               | `#f5f6f7` | Hover on `canvas`                                      |
| `canvas-ink`    | `#1d1f23`               | same      | Text on `canvas`                                       |
| `canvas-muted`  | `#5f6670`               | same      | Secondary text on `canvas`                             |
| `scrim`         | `rgb(0 0 0 / .45)`      | same      | Backdrop behind modal UI (search palette)              |
| `code-bg`       | `#1e1e1e`               | same      | Code block surface (VS Code Dark+)                     |
| `code-fg`       | `#d4d4d4`               | same      | Plain code and code toolbar text                       |
| `code-muted`    | `#8b8b8b`               | same      | Secondary code toolbar text                            |
| `code-rule`     | `rgb(255 255 255 / .1)` | same      | Dividers and borders on `code-bg`                      |

Syntax colours come from the shiki Dark+ theme and are not tokens. The copy-paste
components and thumbnails are light-only samples; they keep their own palette in both themes.

## Typography

| Family  | Font                     | Use                                               |
| ------- | ------------------------ | ------------------------------------------------- |
| `sans`  | Pretendard Variable      | Everything except headwords and code              |
| `serif` | Noto Serif KR (600, 700) | Headwords: page titles, section and pattern names |
| `mono`  | System monospace         | Code only                                         |

Both web fonts are self-hosted from npm and split by `unicode-range`. Korean text wraps
between words (`word-break: keep-all`).

| Token             | Size / line height | Use                                    |
| ----------------- | ------------------ | -------------------------------------- |
| `text-display-lg` | 48 / 1.1           | Catalog title from `sm` up             |
| `text-display`    | 40 / 1.15          | Page titles                            |
| `text-title`      | 24 / 1.3           | Section and category headings          |
| `text-headword`   | 19 / 1.4           | Pattern names in cards and lists       |
| `text-lead`       | 17 / 1.75          | Intro paragraphs, pattern descriptions |
| `text-body`       | 16 / 1.75          | Body copy and guidance lists           |
| `text-body-sm`    | 15 / 1.6           | Card definitions, category tabs        |
| `text-caption`    | 14 / 1.5           | Meta, buttons, navigation              |
| `text-micro`      | 12 / 1.4           | Counts and keyboard hints              |
| `text-code`       | 13 / 1.85          | Code blocks                            |

Weights: 400 body, 500 emphasis, 600 headwords, 700 titles. Paragraphs fill the width of
their content column (about 57rem on the detail page, ~55 Korean characters per line), so
text lines up with the preview and code blocks beside it.

## Spacing and layout

- Tailwind's 4px spacing scale, nothing off-scale.
- Page container: `max-w-page` (72rem), gutters `px-4` / `sm:px-6`.
- Pattern detail sections use `space-y-12` between sections and `mt-5` to `mt-8` within each.
  The previous and next pattern links sit at opposite edges with outward-pointing chevrons.
- The live demo stage has a fixed height, `h-preview` (24rem), so a demo changing state never
  moves the page. Keep each demo's tallest state within 288px of content; taller content
  scrolls inside the stage.
- The catalog grid is 1 / 2 / 3 / 4 columns with `gap-x-6 gap-y-10`. Content is left aligned.

## Shape and depth

| Token             | Value | Use                               |
| ----------------- | ----- | --------------------------------- |
| `rounded-tag`     | 3px   | Highlighter marks, keyboard hints |
| `rounded-control` | 6px   | Buttons                           |
| `rounded-input`   | 10px  | Search input                      |
| `rounded-surface` | 12px  | Preview fields, code blocks       |
| `shadow-overlay`  | soft  | Floating UI only (skip link)      |

No shadows on cards or sections; hierarchy comes from rules, surfaces and type.

## Components

Shared chrome primitives live in `src/shared/ui/primitives/`.

- **Button** (`Button`, `buttonClassName`): `primary` is ink with paper text for the one main
  action on a screen; `quiet` is graphite text with a `field` hover for toolbar actions;
  `quietOnCanvas` is the same on the demo `canvas`; `icon` is a square icon-only button (always
  give it an `aria-label`). Router links that act as buttons use
  `buttonClassName`.
- **Links** (`textLinkClassName`): ink text, `rule-strong` underline that turns ink on hover.
  **Navigation links** (`navLinkClassName`): graphite, ink on hover, no underline.
- **Catalog navigation**: a left-aligned row under the centred search field shows All,
  Components, Design styles, UX psychology, and UI comparisons. Only the selected filter
  has a `marker` background. The full topic index sits at the right and remains reachable
  on narrow screens. Detail breadcrumbs link to both the parent category and the specific
  topic. A separate return link restores the catalog query and filters. The mobile header
  menu repeats the five categories in the same order, followed by the topic index, GitHub and
  the languages.
- **Search input**: `rounded-input`, `rule-strong` border, ink border and ring on focus.
- **Pattern card**: a `field` surface with the looping thumbnail, a serif headword, the English
  term in `graphite`, and a one-line definition. No border, no shadow; hover underlines the
  headword and darkens the field.
- **Copy page**: split button right of the detail page headword (`rule-strong` border,
  `rounded-control`, graphite text with a `field` hover). The main half copies the page as
  Markdown for LLMs; the chevron opens a menu (`rounded-surface`, `shadow-overlay`) with the same
  copy action and a plain-text Markdown view. Arrow keys move, Escape closes.
- **Code block**: `code-bg` surface with Dark+ syntax colours, file tabs above.
- **Storybook** (`mise run storybook`) shows the site primitives with a light/dark toolbar and
  every copy-paste pattern component.
- **Theme toggle**: one `icon` button in the header. The icon shows the current theme (sun or
  moon); the label says what pressing it does.
- **Language menu**: the last item in the desktop header, after a thin `rule` divider (on
  small screens the languages sit at the end of the header menu instead): the current
  language name and a chevron as a `quiet` button. It opens a small list (`rounded-surface`,
  `shadow-overlay`) linking the same page in each language, each name written in its own
  language. English pages add one `caption` line under the catalog suggestions and on the demo
  stage saying the demos use Korean UI copy.
- **Search**: the catalog opens with a centred search box and no visible title (the `h1` is
  screen-reader only). Other pages put a search button in the header that opens a command
  palette with ⌘K / Ctrl+K: type, ↑/↓, Enter to open.
- **Focus**: 2px `ink` outline with 2px offset on every focusable element.

## Imagery and icons

- Inline 20×20 solid SVG icons in `currentColor`, `aria-hidden`, next to a text label.
- No photos or illustrations. Each pattern is shown by its own looping thumbnail, which
  replays the same use case as its detail page demo (see `AGENTS.md`).
- Motion: only the thumbnails loop; they stop on their representative frame under
  `prefers-reduced-motion`.
  Product decision: the loops play continuously with no on-page pause control. This leaves
  WCAG 2.2.2 (Pause, Stop, Hide) unmet for the card previews; reduced motion is the only
  way to stop them. Revisit before claiming WCAG conformance.
