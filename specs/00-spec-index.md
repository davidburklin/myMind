# myMind Spec Index

This folder contains the initial planning documents for the `myMind` application.

These specs are written for a web-first Phase 1 MVP built on the existing Nuxt/Vue/TypeScript frontend repository, with a cloud-backed serverless data layer and room to expand into multi-user collaboration and native clients later.

## Document Map

1. `01-product-vision.md`
   Defines the product direction, guiding principles, and high-level goals.
2. `02-mvp-scope.md`
   Defines what is in and out of Phase 1.
3. `03-user-flows.md`
   Captures core user journeys for the MVP.
4. `04-domain-model.md`
   Defines core entities, relationships, and data rules.
5. `05-system-architecture.md`
   Proposes the technical architecture for the initial product.
6. `06-canvas-and-editor-spec.md`
   Defines the mind map editing experience and interaction priorities.
7. `07-open-questions.md`
   Tracks decisions that still need product input.

## Current Product Direction

- Personal-use first
- Account/profile based from day one
- Workspace-oriented structure
- Mind maps are the primary content object
- Rich nodes in MVP
- Fast idea capture over polished visual layout
- Web-first implementation
- Architecture should leave room for future collaboration
- No AI features in Phase 1
- No export/import requirement in Phase 1

## Recommended Working Process

1. Refine `01-product-vision.md` and `02-mvp-scope.md` until they feel right.
2. Lock down `04-domain-model.md` before implementation planning.
3. Use `06-canvas-and-editor-spec.md` to guide frontend component and state design.
4. Use `05-system-architecture.md` to choose backend technology and app boundaries.
5. Keep `07-open-questions.md` current as decisions are made.
