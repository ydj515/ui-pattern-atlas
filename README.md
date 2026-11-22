# UI Pattern Atlas

[![CI](https://github.com/ydj515/ui-pattern-atlas/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ydj515/ui-pattern-atlas/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/ydj515/ui-pattern-atlas/actions/workflows/deploy-pages.yml/badge.svg?branch=main)](https://github.com/ydj515/ui-pattern-atlas/actions/workflows/deploy-pages.yml)
[![Sync Development Standards](https://github.com/ydj515/ui-pattern-atlas/actions/workflows/sync-dev-standards.yml/badge.svg)](https://github.com/ydj515/ui-pattern-atlas/actions/workflows/sync-dev-standards.yml)
![Node.js](https://img.shields.io/badge/Node.js-24.22-339933?logo=nodedotjs&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-11.28-F69220?logo=pnpm&logoColor=white)
![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss&logoColor=white)

**Discover, explore, and implement modern UI patterns.**

UI Pattern Atlas is an open-source catalog of UI patterns and components, featuring interactive previews, usage guidelines, and reusable implementations built with React, TypeScript, and Tailwind CSS.

From basic components to complex interaction patterns, it helps developers discover the right UI solutions, understand their behavior, and integrate them into real-world applications.

**[Open the atlas](https://ydj515.github.io/ui-pattern-atlas/)**

## Features

- **UI Pattern Catalog**: search by name, Korean name, or what the UI looks like ("확인 창", "토글"), or browse by category. Every card loops a preview of the pattern in use.
- **Interactive Previews**: each pattern page has a live demo you can click, type into, and use with the keyboard, followed by when to use it, when not to, alternatives, and accessibility notes.
- **Reusable Implementations**: every pattern is one self-contained React + TypeScript + Tailwind CSS file. Copy it into your project; no UI library needed.

## Using a pattern

Open a pattern, go to **Implementation**, and copy the component file. It needs only:

- React 19
- Tailwind CSS v4 (default palette)

The usage tab next to it shows the demo's source as an example.

## Running locally

```sh
mise install
mise run dev        # the atlas
mise run storybook  # every component and state in Storybook
```

Requires [mise](https://mise.jdx.dev/). See [CONTRIBUTING.md](CONTRIBUTING.md) for all tasks, the project layout, and how to add a pattern.

## Contributing

New patterns and fixes are welcome:

- Suggest a missing pattern or comparison guide, or report a bug on [GitHub Issues](https://github.com/ydj515/ui-pattern-atlas/issues/new/choose).
- To submit a pull request, start with [CONTRIBUTING.md](CONTRIBUTING.md); project rules are in [AGENTS.md](AGENTS.md) and the visual rules in [DESIGN.md](DESIGN.md).

## License

[MIT](LICENSE)
