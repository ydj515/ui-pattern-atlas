# Contributing

Thanks for helping grow the atlas. This page covers local setup, the project layout, and
how to add a pattern. Project rules for people and coding agents are in
[`AGENTS.md`](AGENTS.md); the visual rules are in [`DESIGN.md`](DESIGN.md).

## Setup

Tool versions are pinned in `mise.toml` and `mise.lock` (Node.js 24.22.3, pnpm 11.28.12).
With [mise](https://mise.jdx.dev/) installed:

```sh
mise trust ./mise.toml
mise install
mise run dev
```

Every task installs dependencies from `pnpm-lock.yaml` first. Each task wraps the
`package.json` script of the same name, so `pnpm <script>` works too.

| Task               | Purpose                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| `mise run dev`     | Start the Vite dev server                                                                      |
| `mise run build`   | Typecheck and build into `dist/`                                                               |
| `mise run preview` | Build, then serve the production build                                                         |
| `mise run format`  | Rewrite files with Prettier                                                                    |
| `mise run lint`    | Run ESLint                                                                                     |
| `mise run test`    | Run the tests once (`test:coverage` adds coverage thresholds)                                  |
| `mise run verify`  | Everything CI checks: format, lint, typecheck, coverage, app and Storybook builds (alias `ci`) |

Run `mise run verify` before opening a pull request.

## Project structure

Feature-Sliced Design: `app → pages → widgets → features → entities → shared`.

```text
src/
├─ app/                         # router, layout, global styles and design tokens
├─ pages/                       # catalog, pattern detail, not found
├─ widgets/pattern-detail/      # detail layout, live preview, source viewer
├─ features/                    # search, category filter, copy code, theme switch
├─ entities/pattern/
│  ├─ model/                    # Pattern and category types
│  ├─ catalog/<slug>/           # guidance, demo and thumbnail for each pattern
│  └─ ui/                       # catalog card, thumbnail stage and motion
└─ shared/
   ├─ ui/patterns/<slug>/       # the reusable, copy-paste components
   └─ ui/primitives/            # site buttons and links
```

## Adding a pattern

1. Write the component in `src/shared/ui/patterns/<slug>/`. Keep it self-contained: React
   and the default Tailwind palette only, no imports from the rest of the app.
2. Add `<Name>Demo.tsx` in `src/entities/pattern/catalog/<slug>/` with an interactive example.
3. Add `<Name>Thumbnail.tsx` next to it. It replays the **same use case as the demo** (same
   copy, state rules and order of actions) as a loop; its keyframes go in
   `src/entities/pattern/ui/thumbnail-motion.css`.
4. Add `<name>.tsx` exporting a `Pattern`: guidance, the thumbnail, the demo as `Preview`,
   and both source files imported with `?raw` as `sources`.
5. Add `<Name>.stories.tsx` next to the component in `src/shared/ui/patterns/<slug>/` with its
   main states.
6. Register it in `src/entities/pattern/catalog/index.ts` and run `mise run verify`.

The catalog tests check slugs, required guidance, alternative links, and that every
Korean word in the thumbnail also appears in the demo. `src/test/stories.test.tsx` renders
every story and checks that each catalog pattern has one.

## Deployment

[`deploy-pages.yml`](.github/workflows/deploy-pages.yml) deploys to GitHub Pages on every
push to `main`. One-time setup: **Settings → Pages → Source: GitHub Actions**.

`BASE_PATH` sets Vite's `base` and the router `basename` (CI passes `/<repo>/`). The build
also writes `404.html` so deep links load the app on a static host. To check a Pages build
locally, run `BASE_PATH=/ui-pattern-atlas/ mise run preview` and open
`http://localhost:4173/ui-pattern-atlas/`.
