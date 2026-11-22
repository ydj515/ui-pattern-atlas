# Contributing

Thanks for helping grow the atlas. This page covers local setup, the project layout,
how to add or update a pattern, and the pull request workflow. Project rules for people
and coding agents are in [`AGENTS.md`](AGENTS.md); the visual rules are in
[`DESIGN.md`](DESIGN.md).

## Setup

Tool versions are pinned in `mise.toml` and `mise.lock` (Node.js 24.22.3, pnpm 11.28.12).
With [mise](https://mise.jdx.dev/) installed:

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
| `mise run build`           | Typecheck and build into `dist/`                                                               |
| `mise run storybook:build` | Build the static Storybook into `storybook-static/`                                            |
| `mise run preview`         | Build, then serve the production build                                                         |
| `mise run format`          | Rewrite files with Prettier                                                                    |
| `mise run format-check`    | Check formatting without modifying files                                                       |
| `mise run lint`            | Run ESLint                                                                                     |
| `mise run typecheck`       | Run `tsc --noEmit`                                                                             |
| `mise run test`            | Run the test suite once (`mise run test:coverage` adds coverage thresholds)                    |
| `mise run verify`          | Everything CI checks: format, lint, typecheck, coverage, app and Storybook builds (alias `ci`) |

Run `mise run verify` before opening a pull request.

## Project structure

Feature-Sliced Design: `app → pages → widgets → features → entities → shared`. Lower layers
must not import from higher layers.

```text
src/
├─ app/                         # router, layout, global styles and design tokens
├─ pages/                       # catalog, pattern detail, roadmap, ui-comparison, not found
├─ widgets/pattern-detail/      # detail layout, live preview, source viewer
├─ features/                    # search, category filter, copy page/code, theme switch
├─ entities/pattern/
│  ├─ model/                    # Pattern and category types
│  ├─ catalog/<slug>/           # guidance, demo and thumbnail for each pattern
│  ├─ catalog/comparisons/      # paired demos for UI comparison pages
│  └─ ui/                       # catalog card, breadcrumb, thumbnail stage and motion
└─ shared/
   ├─ ui/patterns/<slug>/       # the reusable, copy-paste components and their stories
   └─ ui/primitives/            # site chrome buttons and links
```

## Adding a pattern

1. **Write the reusable component** in `src/shared/ui/patterns/<slug>/`. Keep it self-contained
   and copy-paste ready: React and the default Tailwind palette only, no site design tokens
   (`paper`, `ink`, `field`, etc.) and no imports from the rest of the app.
2. **Add `<Name>.stories.tsx`** next to the component in `src/shared/ui/patterns/<slug>/`
   covering its main states. (`src/test/stories.test.tsx` renders every story and checks that
   every component pattern has one.)
3. **Add `<Name>Demo.tsx`** in `src/entities/pattern/catalog/<slug>/` with an interactive
   example. Keep its tallest state within 288px of content so it fits inside the fixed
   `h-preview` stage without shifting the page.
4. **Add `<Name>Thumbnail.tsx`** next to the demo.
   - It must replay the **same use case as the demo**: the same situation, the same Korean
     copy, the same state rules, and the same order of user actions (`catalog.test.ts` verifies
     that every Korean word in the thumbnail appears in the demo source).
   - Build it on the unscaled 176×112 `ThumbStage`, put its keyframes in
     `src/entities/pattern/ui/thumbnail-motion.css`, and stop animations on a representative
     frame under `prefers-reduced-motion`.
5. **Add `pattern.tsx`** in `src/entities/pattern/catalog/<slug>/` exporting a `Pattern`:
   - Load detail-only assets **lazily via dynamic `import()`** so they stay out of the initial
     catalog bundle:
     - `loadPreview: () => import("@/entities/pattern/catalog/<slug>/<Name>Demo").then((m) => m.<Name>Demo)`
     - `sources`: two entries (`role: "Component"` and `role: "Usage"`) using
       `load: () => import("...?raw")`
     - For concept-only entries (`kind: "concept"`, such as UX psychology patterns without a
       standalone component in `src/shared/ui/patterns/`), omit `sources` and provide
       `loadDemoSource: () => import("@/entities/pattern/catalog/<slug>/<Name>Demo.tsx?raw")`.
   - Never statically import `<Name>Demo.tsx`, `src/shared/ui/patterns/<slug>/`, or `?raw`
     files into `pattern.tsx` or `<Name>Thumbnail.tsx`.
6. **Register the pattern**:
   - Export it in `src/entities/pattern/catalog/index.ts`, keeping `PATTERNS` grouped in the
     category order defined by `PATTERN_CATEGORIES` in `src/entities/pattern/model/category.ts`.
   - If the pattern corresponds to a planned item in
     `src/entities/pattern/catalog/roadmapData.ts`, update its `priority` to `"완료"`.
7. **Add tests and verify**:
   - Add interaction and accessibility tests for the new component under
     `src/shared/ui/patterns/`.
   - Run `mise run verify` to confirm all checks pass.

## Pull requests and CI

1. Fork the repository and create a topic branch from `main` (e.g., `feat/<slug>`,
   `fix/<topic>`, `docs/<topic>`).
2. Follow [`DESIGN.md`](DESIGN.md) when touching site chrome. `src/app/styles/designTokens.test.ts`
   enforces token usage and rejects raw hex colours, default Tailwind palette colours, and
   arbitrary font sizes or radii in site chrome files.
3. Write commit messages following Conventional Commits (`feat:`, `fix:`, `docs:`,
   `refactor:`, etc.).
4. Run `mise run verify` locally before opening your pull request.
5. When you open or update a pull request against `main`,
   [`ci.yml`](.github/workflows/ci.yml) runs `mise run verify` automatically in GitHub Actions.

## Deployment

[`deploy-pages.yml`](.github/workflows/deploy-pages.yml) deploys to GitHub Pages on every
push to `main`. One-time setup: **Settings → Pages → Source: GitHub Actions**.

`BASE_PATH` sets Vite's `base` and the router `basename` (CI passes `/<repo>/`). The build
also writes `404.html` so deep links load the app on a static host. To check a Pages build
locally, run `BASE_PATH=/ui-pattern-atlas/ mise run preview` and open
`http://localhost:4173/ui-pattern-atlas/`.
