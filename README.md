# myMind

`myMind` is a web-based mind mapping application built for fast personal thought capture, visual organization, and idea development.

The product is being designed as a personal-first tool with cloud-backed data, a SimpleMind-inspired editing experience, and room to expand later into collaborative and cross-platform clients.

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- Nuxt UI
- Pinia
- Bun

## Project Direction

The current focus is a web-first MVP with:

- workspace-based organization
- mind maps as the primary content type
- rich nodes with notes, links, checklists, and attachments
- quick thought capture for ideas that are not yet organized
- keyboard-friendly editing and fast interaction

## Setup

Install dependencies:

```bash
bun install
```

## Development

Start the local development server:

```bash
bun run dev
```

The app runs at `http://localhost:3000`.

## Build

Create a production build:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## Static Generation

Generate a static version of the app if needed:

```bash
bun run generate
```

## Repo Notes

- Product and planning docs live in `specs/`
- This repo currently contains the Nuxt frontend application
- Backend and collaboration architecture are being planned separately as part of the product spec
