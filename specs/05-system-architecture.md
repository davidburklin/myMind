# System Architecture

## Architectural Goal

Build a web-first mind mapping application on top of the existing Nuxt/Vue/TypeScript frontend, with a cloud-backed realtime-friendly data layer that supports future collaboration and future client expansion without requiring a rewrite.

## Recommended Direction

### Frontend

- Nuxt 4
- Vue 3
- TypeScript
- Pinia for client state
- Nuxt UI for surrounding app shell and standard controls

### Backend

Recommended default: `Convex`

Reasoning:

- strong fit for realtime-ish app state
- official Nuxt integration path exists
- good match for cloud-backed personal product
- simpler path for auth, data functions, and file storage than assembling several services
- less infrastructure burden for a solo builder

### Why Not SpacetimeDB First

SpacetimeDB remains interesting for future highly collaborative scenarios, but for this project's current phase it appears more specialized than necessary.

For Phase 1, the biggest risks are product and editor experience, not distributed systems sophistication.

## High-Level System Shape

### Client Responsibilities

- routing and app shell
- local editor state
- capture bucket state
- keyboard and pointer interactions
- transient selection state
- optimistic editing UX
- rendering the canvas and detail panels

### Backend Responsibilities

- authentication and identity
- persistent data storage
- authorization checks
- autosave targets
- search indexing strategy
- attachment storage metadata
- future collaboration hooks

## Proposed App Layers

### 1. App Shell Layer

Concerns:

- auth flow
- workspace/map navigation
- settings
- recent items

### 2. Editor Domain Layer

Concerns:

- map loading
- normalized node state
- selection state
- mutation orchestration
- undo/redo integration

This layer should be kept as framework-agnostic as reasonably possible so a future desktop/mobile client can reuse the same domain concepts.

### 3. Canvas Rendering Layer

Concerns:

- node placement
- branch line rendering
- drag and drop
- zoom and pan
- focus state

### 4. Persistence/Sync Layer

Concerns:

- fetching workspaces/maps/nodes
- sending mutations
- optimistic reconciliation
- autosave handling
- background refresh

## Recommended Data Sync Strategy

Phase 1 should avoid full CRDT complexity unless testing shows it is needed.

Recommended approach:

- single active editor assumption
- backend-authoritative persistence
- optimistic client updates
- mutation-based writes
- simple conflict policy for later cross-device overlap

This is enough for a personal-first product and keeps complexity under control.

## Suggested Frontend Module Boundaries

### `features/workspaces`

- workspace list
- workspace settings
- recent content
- capture bucket

### `features/maps`

- map list
- map creation/deletion
- map metadata

### `features/editor`

- editor store
- node mutations
- selection logic
- undo/redo

### `features/canvas`

- canvas viewport
- node rendering
- connectors
- drag interactions

### `features/node-details`

- notes editor
- checklist editor
- attachments
- links

### `features/capture`

- quick capture input
- day-grouped capture bucket
- move captured thought into maps or nodes

### `lib/backend`

- Convex client wiring
- auth helpers
- query/mutation wrappers

## Suggested Backend Service Boundaries

### Auth

Account creation and session handling.

### Workspace/Map Service

Create, update, list, archive workspaces and maps.

### Node Service

Create/update/delete/reparent/reorder nodes and associated content.

### Attachment Service

Store file metadata and upload references.

### Search Service

Search across maps and node content.

This may start simple and become more specialized later.

It should support:

- scoped search from a selected node downward
- optional workspace-wide search
- capture bucket search if that feature grows

## Performance Priorities

### Priority 1

Low-latency node creation and editing.

### Priority 2

Smooth zoom/pan and drag behavior.

### Priority 3

Fast map loading for medium-sized maps.

### Priority 4

Search responsiveness.

## Future Expansion Paths

The architecture should leave room for:

- workspace sharing and roles
- live collaboration and presence
- desktop packaging via Tauri or Electron
- mobile client with shared backend contracts
- export/import system

## Technology Recommendation Summary

For the current product direction:

- keep Nuxt as the web app shell
- build the editor as a strong client-side domain module
- use Convex as the initial backend platform
- avoid premature collaboration-specific complexity
- treat native apps as future clients, not current deliverables
