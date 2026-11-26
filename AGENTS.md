# Repository Guidelines

## Shared Development Standards

Use the original guides under `.dev-standards/standards/` selectively.
Guide paths in all sections below are relative to that directory; read only files that exist.

- Read `base.md` before modifying code, when present.
- Before starting change work or choosing a branch, read `workflows/branch.md`.
- For isolated or parallel work, worktree setup, or cleanup, read `workflows/worktree.md`.

Match guides to the affected module; do not load unrelated languages or frameworks.
Do not read every guide or the merged `.dev-standards/styleguide.md` by default.
Repository-specific instructions in this file take precedence over shared guides.

## Project Structure & Module Organization

Check the repository tree and module manifests to locate source code, tests, and
assets. Keep changes within the responsible module and follow existing boundaries.

- For module structure or dependency boundaries, read the applicable guide under `architectures/`.

## Build, Test, and Development Commands

Use build, test, and local development commands documented in the README,
package scripts, or build configuration. Explain each command's purpose before
running it; do not invent commands.

- For build or dependency configuration, read the applicable guide under `build-tools/`.
- For development runtime or environment changes, read the applicable guide under `runtime/`.

## Coding Style & Naming Conventions

Follow existing indentation, language conventions, and naming patterns in the
affected module. Use its configured formatter and linter with the relevant shared guides.

- For the language of the affected code, read its guide under `languages/`.
- For framework code, read the applicable guide under `frameworks/`.
- For tool configuration or tool-specific work, read the applicable guide under `tools/`.

## Testing Guidelines

Use the repository's test frameworks and test naming conventions. Run checks
appropriate to the change and follow configured coverage requirements. Report
actual results and any checks you could not run.

## Design System

`DESIGN.md` defines the site's colour, type, spacing, shape and component rules, and
`src/app/styles/global.css` holds the matching tokens. Read it before changing site chrome
styles. Use token names (`text-caption`, `bg-field`, `rounded-control`), not raw values; reuse
`src/shared/ui/primitives/` for buttons and links. `src/app/styles/designTokens.test.ts`
enforces this.

## Languages

The site has Korean pages at the existing addresses and English pages under `/en/`. Each
language gets its own router basename (`src/main.tsx`), so routes and `Link`s stay
language-neutral; switching languages is a full page load.

- Site copy lives in `src/shared/i18n/messages.ts`; read it with `useMessages()`. Add a key to
  both languages; the type makes English fill every Korean key, and
  `src/shared/i18n/locale.test.ts` fails on Korean left in the English copy.
- Catalog text for English (pattern summary, description and aliases; topic names and
  descriptions; comparison groups, descriptions and scenarios) lives in
  `src/entities/pattern/i18n/en/*.json` and loads only on English pages. Each pattern's English
  detail guidance is `src/entities/pattern/i18n/en/guides/<slug>.json`, loaded with its page.
  Adding a pattern, topic or comparison, or changing a Korean guide, means updating the English
  text too; `catalogText.test.ts` fails on anything missing, extra, empty, still in Korean, or
  out of step with the Korean guide item for item. Read it through `localizePattern`,
  `topicName` and the other helpers in `catalogText.ts`.
- Pattern thumbnails, demos and their source stay in Korean on English pages, with a note
  saying so. Do not translate them as part of site copy.
- Show a pattern's name with `patternHeadword` / `patternSecondaryName`: Korean pages show the
  Korean name with the English term beside it, English pages the English name once.

## UI Pattern Catalog Conventions

Each pattern lives in `src/entities/pattern/catalog/<slug>/` with a demo
(`<Name>Demo.tsx`), a catalog thumbnail (`<Name>Thumbnail.tsx`), its metadata (the entry
file: names, summary, description and tags for cards and search), and its detail-page
guidance (`guide.ts`: origin, when to use, alternatives, accessibility), and reuses the
component in `src/shared/ui/patterns/<slug>/`.

- The catalog thumbnail and the detail page demo must show the same use case. The
  looping thumbnail replays the demo's scenario: the same situation, the same copy,
  the same state rules, and the same order of user actions. Shorten nothing silently;
  if the copy is too long for the thumbnail, shorten it in the demo too.
- When the demo changes (copy, flow, or state rules), update the thumbnail and its
  keyframes in `src/entities/pattern/ui/thumbnail-motion.css` in the same change.
- `src/entities/pattern/catalog/catalog.test.ts` fails when a thumbnail shows Korean
  text that is not in its demo source. Do not weaken that check to make a change pass.
- Thumbnail coordinates are px on the unscaled 176×112 stage (`ThumbStage`); keep element
  positions and cursor targets in the keyframes in sync, and check click targets in a
  browser after changing either.
- Pattern metadata loads its assets lazily via dynamic `import()`: `loadThumbnail` for
  `<Name>Thumbnail.tsx`, `loadGuide` for `guide.ts`, `loadPreview` for `<Name>Demo.tsx`, and
  `sources[].load` (or `loadDemoSource` for concept entries) for `?raw` source text. Never
  statically import `<Name>Thumbnail.tsx`, `guide.ts`, `<Name>Demo.tsx`,
  `src/shared/ui/patterns/<slug>/`, or `?raw` sources into a catalog entry, or the demo and
  sources into `<Name>Thumbnail.tsx`, as that pulls them back into the initial catalog
  bundle; do not raise `build.chunkSizeWarningLimit` in `vite.config.ts` to hide app chunk
  warnings. `vite.config.ts` bundles thumbnails into one chunk per category, read from each
  entry's `category`.
- Catalog lists render thumbnails through `ThumbnailFrame` (`src/entities/pattern/ui/`), which
  loads a thumbnail when its card nears the viewport and keeps it mounted only while it is
  near. Do not render a list of thumbnails directly; hundreds of off-screen loops drop frames
  on slow phones. `ThumbnailFrame` imports `thumbnail-motion.css` statically so the keyframes
  arrive with the first CSS; loading them lazily left first-screen thumbnails blank on slow
  connections while the web fonts downloaded.
- Every component under `src/shared/ui/patterns/<slug>/` has a `*.stories.tsx` next to it
  covering its main states; `src/test/stories.test.tsx` renders all stories.
- Components under `src/shared/ui/patterns/` stay copy-paste ready: React and the default
  Tailwind palette only, no site tokens and no imports from the rest of the app.

## Commit & Pull Request Guidelines

- When drafting or revising a commit message, read `workflows/commit.md`.
- When drafting or revising a PR title or description, read `workflows/pr.md`.
