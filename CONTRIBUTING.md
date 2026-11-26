# Contributing

Thanks for helping grow the atlas. Bug reports, new patterns, better guidance and
translation fixes are all welcome.

- **Found a bug or a missing pattern?** Open an issue with the
  [bug report or pattern request form](https://github.com/ydj515/ui-pattern-atlas/issues/new/choose).
- **Want to add a pattern?** Open a pattern request first, so we can agree on the name and the
  demo scenario before you build it.
- **Small fixes** (typos, wording, a broken style) can go straight to a pull request.

Issues and pull requests can be written in English or Korean. Project rules for people and
coding agents are in [`AGENTS.md`](AGENTS.md); the visual rules are in [`DESIGN.md`](DESIGN.md).

## Setup

Install [mise](https://mise.jdx.dev/); it installs the Node.js and pnpm versions pinned in
`mise.toml`. Then:

```sh
mise trust ./mise.toml
mise install
mise run dev
```

Every task installs dependencies from `pnpm-lock.yaml` first. Each task wraps the
`package.json` script of the same name, so `pnpm run <script>` works too.

| Task                       | Purpose                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| `mise run dev`             | Start the Vite dev server                                                                      |
| `mise run storybook`       | Start Storybook for site primitives and pattern components on port 6006                        |
| `mise run test`            | Run the test suite once (`mise run test:coverage` adds coverage thresholds)                    |
| `mise run format`          | Rewrite files with Prettier                                                                    |
| `mise run lint`            | Run ESLint                                                                                     |
| `mise run typecheck`       | Run `tsc --noEmit`                                                                             |
| `mise run build`           | Typecheck and build into `dist/`                                                               |
| `mise run preview`         | Build, then serve the production build                                                         |
| `mise run storybook:build` | Build the static Storybook into `storybook-static/`                                            |
| `mise run verify`          | Everything CI checks: format, lint, typecheck, coverage, app and Storybook builds (alias `ci`) |

## Project structure

Feature-Sliced Design: `app → pages → widgets → features → entities → shared`. Lower layers
must not import from higher layers.

```text
src/
├─ app/                         # router, layout, global styles and design tokens
├─ pages/                       # catalog, pattern detail, roadmap, ui-comparison, not found
├─ widgets/pattern-detail/      # detail layout, live preview, source viewer
├─ features/                    # search, copy page/code, theme and language switch
├─ entities/pattern/
│  ├─ model/                    # Pattern and category types
│  ├─ catalog/<slug>/           # entry, guidance, demo and thumbnail for each pattern
│  ├─ catalog/comparisons/      # paired demos for UI comparison pages
│  ├─ i18n/en/                  # English catalog text and guidance
│  └─ ui/                       # catalog card, breadcrumb, thumbnail stage and motion
└─ shared/
   ├─ i18n/                     # site copy in both languages
   ├─ ui/patterns/<slug>/       # the reusable, copy-paste components and their stories
   └─ ui/primitives/            # site chrome buttons and links
```

## Adding a pattern

Use an existing pattern such as `src/entities/pattern/catalog/toast/` as a template. The
pattern's Korean text is the source; English follows it.

1. **Write the component** in `src/shared/ui/patterns/<slug>/<Name>.tsx`. Keep it
   copy-paste ready: React and the default Tailwind palette only, no site design tokens
   (`paper`, `ink`, `field`, etc.) and no imports from the rest of the app.
2. **Add `<Name>.stories.tsx`** next to it, covering its main states, and interaction and
   accessibility tests for the component. (`src/test/stories.test.tsx` renders every story.)
3. **Add `<Name>Demo.tsx`** in `src/entities/pattern/catalog/<slug>/`: an interactive example
   with Korean UI copy. Keep its tallest state within 288px of content so it fits the
   fixed preview stage without shifting the page.
4. **Add `<Name>Thumbnail.tsx`** next to the demo, replaying **the same use case as the
   demo**: the same situation, the same Korean copy, the same state rules and the same order
   of user actions. If the copy is too long for the thumbnail, shorten it in the demo too.
   - Build it on the unscaled 176×112 `ThumbStage`, put its keyframes in
     `src/entities/pattern/ui/thumbnail-motion.css`, and stop animations on a representative
     frame under `prefers-reduced-motion`.
   - Check the cursor and click targets in a browser after changing either.
5. **Add `guide.ts`** next to the demo: where the name comes from (optional), when to use it,
   when not to, alternatives and accessibility notes, in Korean.
6. **Add the entry file `pattern.tsx`** exporting a `Pattern` with the names, category, summary,
   description and tags. Everything else loads **lazily via dynamic `import()`**, so it stays
   out of the first catalog bundle:
   - `loadGuide`, `loadPreview` and `loadThumbnail` for `guide.ts`, the demo and the thumbnail.
   - `sources`: a `"Component"` and a `"Usage"` entry, each with `load: () => import("...?raw")`.
   - Concept entries (`kind: "concept"`, such as UX psychology patterns with no component in
     `src/shared/ui/patterns/`) omit `sources` and set `loadDemoSource` to the demo's `?raw`.
   - Never import the demo, the thumbnail, `guide.ts`, the component or a `?raw` file
     statically into the entry file, and never import the demo into the thumbnail.
7. **Register it** in `src/entities/pattern/catalog/index.ts`, keeping `PATTERNS` in the
   category order of `PATTERN_CATEGORIES` (`src/entities/pattern/model/category.ts`). If it
   was a planned item in `src/entities/pattern/catalog/roadmapData.ts`, set its `priority` to
   `"완료"`.
8. **Add the English text**:
   - the summary, description and aliases under the slug in
     `src/entities/pattern/i18n/en/patterns.json`;
   - the guidance in `src/entities/pattern/i18n/en/guides/<slug>.json`, item for item with
     `guide.ts`.

   The thumbnail and demo stay in Korean on English pages.

9. Run `mise run verify`.

Several tests guard these rules, so a failing check usually points at the step that was
missed. `catalog.test.ts` fails when a thumbnail shows Korean text the demo does not, and
`catalogText.test.ts` when English text is missing, still Korean, or out of step with the
Korean guide. Fix the pattern rather than loosening the check.

## Changing site text

Text outside the patterns (menus, buttons, headings, empty states) lives in
`src/shared/i18n/messages.ts`. Add or change a key in both Korean and English. When you change
a pattern's Korean summary, description or guide, update its English text as well.

## Pull requests and CI

1. Fork the repository and create a topic branch from `main` (e.g., `feat/<slug>`,
   `fix/<topic>`, `docs/<topic>`).
2. Follow [`DESIGN.md`](DESIGN.md) when touching site chrome: use token names, not raw values.
   `src/app/styles/designTokens.test.ts` rejects raw hex colours, default Tailwind palette
   colours, and arbitrary font sizes or radii in site chrome files.
3. Write commit messages following Conventional Commits (`feat:`, `fix:`, `docs:`,
   `refactor:`, etc.).
4. Run `mise run verify` before opening the pull request, and fill in the pull request
   template.
5. [`ci.yml`](.github/workflows/ci.yml) runs `mise run verify` on every pull request against
   `main`. A maintainer reviews and merges it.

## Deployment

Merged changes deploy automatically: [`deploy-cloudflare.yml`](.github/workflows/deploy-cloudflare.yml)
publishes `main` to <https://ui-pattern-atlas.pages.dev/>, so a pull request needs no deploy
step. To check a production build locally, run `mise run preview`.
