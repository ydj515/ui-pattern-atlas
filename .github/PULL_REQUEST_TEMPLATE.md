## Summary

<!-- Briefly describe what changed and why. Link any related issue (e.g., Closes #12). You may write in English or Korean. -->

## Changes

-

## Type of Change

- [ ] New pattern or comparison demo (`feat`)
- [ ] Bug or accessibility fix (`fix`)
- [ ] Refactoring (`refactor`)
- [ ] Documentation or guidance copy (`docs`)
- [ ] Tests or CI/tooling (`test` / `chore` / `ci`)

## Verification

- [ ] `mise run verify` passes (`format:check`, `lint`, `typecheck`, `test:coverage`, `build`, `build-storybook`)

## Pattern & Design Checklist

<!-- Skip items that do not apply. See CONTRIBUTING.md for details. -->

- [ ] Site chrome changes (`src/app/`, `src/pages/`, `src/widgets/`, `src/features/`) use only design tokens from [`DESIGN.md`](DESIGN.md)
- [ ] Copy-paste pattern components (`src/shared/ui/patterns/<slug>/`) use only React and the default Tailwind palette with no app imports or site tokens
- [ ] Pattern thumbnail (`<Name>Thumbnail.tsx`) and live demo (`<Name>Demo.tsx`) replay the same scenario and Korean copy
- [ ] Detail-only assets (`loadPreview`, `sources[].load`, or `loadDemoSource`) are loaded lazily via dynamic `import()`
- [ ] Component patterns include a Storybook story (`*.stories.tsx`) and interaction tests

## Notes for Reviewers

-
