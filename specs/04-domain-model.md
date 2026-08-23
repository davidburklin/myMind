# Domain Model

## Modeling Goals

The data model should support:

- personal ownership in Phase 1
- future workspace sharing
- future collaborative editing
- stable references for maps, nodes, and attachments
- incremental extension without breaking existing data

## Core Entities

### User

Represents an authenticated person who owns one or more workspaces.

Suggested fields:

- `id`
- `email`
- `displayName`
- `avatarUrl`
- `createdAt`
- `updatedAt`
- `lastLogin`

### Workspace

Represents a top-level container for maps.

Suggested fields:

- `id`
- `ownerUserId`
- `name`
- `description`
- `createdAt`
- `updatedAt`
- `archivedAt`

Future-ready fields:

- `visibility`
- `defaultRole`

### WorkspaceMember

Not used as an active feature in Phase 1, but recommended in the schema early if backend choice makes this cheap.

Suggested fields:

- `id`
- `workspaceId`
- `userId`
- `role`
- `createdAt`

### MindMap

Primary content object.

Suggested fields:

- `id`
- `workspaceId`
- `title`
- `description`
- `rootNodeId`
- `createdByUserId`
- `lastEditedByUserId`
- `createdAt`
- `updatedAt`
- `archivedAt`

Optional metadata:

- `theme`
- `viewState`

### CapturedThought

Represents a lightweight unstructured thought captured before it is organized into a map.

Suggested fields:

- `id`
- `workspaceId`
- `createdByUserId`
- `text`
- `capturedOnDate`
- `sourceMapId`
- `sourceNodeId`
- `convertedToNodeId`
- `status`
- `createdAt`
- `updatedAt`

Notes:

- `capturedOnDate` supports day-based grouping.
- `status` can support states such as `inbox`, `converted`, or `archived`.
- `sourceMapId` and `sourceNodeId` are optional if capture happens while the user is already inside a map.

### Node

Represents a content block in the map hierarchy.

Suggested fields:

- `id`
- `mapId`
- `parentNodeId`
- `title`
- `body`
- `position`
- `orderIndex`
- `depth`
- `isCollapsed`
- `createdAt`
- `updatedAt`

Notes:

- `position` should support explicit persisted layout coordinates if needed.
- `orderIndex` supports sibling ordering.
- `depth` may be derived rather than persisted.

### NodeLink

Optional cross-link between nodes that are not in a parent-child relationship.

This is not required for first implementation, but the schema should leave room for it.

Suggested fields:

- `id`
- `mapId`
- `sourceNodeId`
- `targetNodeId`
- `label`
- `createdAt`

### NodeChecklistItem

Suggested fields:

- `id`
- `nodeId`
- `text`
- `isChecked`
- `orderIndex`
- `createdAt`
- `updatedAt`

### NodeAttachment

Suggested fields:

- `id`
- `nodeId`
- `storageKey`
- `fileName`
- `mimeType`
- `sizeBytes`
- `width`
- `height`
- `createdAt`

### NodeUrl

If URLs are treated as structured references rather than plain body content.

Suggested fields:

- `id`
- `nodeId`
- `url`
- `label`
- `orderIndex`

### MapViewState

Stores user-specific view preferences for a map.

Suggested fields:

- `id`
- `mapId`
- `userId`
- `zoomLevel`
- `panX`
- `panY`
- `selectedNodeId`
- `lastOpenedAt`

## Key Relationships

- one `User` owns many `Workspace`
- one `Workspace` contains many `MindMap`
- one `MindMap` contains many `Node`
- one `Node` may have many child `Node`
- one `Node` may have many `NodeChecklistItem`
- one `Node` may have many `NodeAttachment`
- one `Node` may have many `NodeUrl`

## Important Modeling Decisions

### Hierarchy Representation

Recommended Phase 1 approach:

- store `parentNodeId`
- store sibling `orderIndex`
- derive tree structure in queries/client state

This is simpler and more flexible than storing a fully denormalized tree blob in the database.

### Layout Representation

Recommended approach:

- persist layout coordinates per node
- allow client layout engine to compute default placement
- allow users to bend or override layout manually
- avoid making layout purely computed if drag-based placement matters

This gives better long-term control over a hybrid layout model.

### Rich Node Content

Recommended approach:

- keep `title` as required, short, and prominent
- allow `body` for notes
- treat checklists, links, and attachments as structured sub-entities
- allow lightweight formatting in `body` without requiring a full document editor

This avoids overloading one giant rich-text field too early.

### Collaboration Readiness

Even though collaboration is out of scope for MVP:

- use stable IDs everywhere
- maintain ownership and actor metadata
- avoid storing the entire map only as a single opaque JSON blob

## Candidate Persistence Strategy

For a Convex-backed version:

- each entity maps naturally to a table/collection
- mutations can enforce ownership and map integrity
- queries can load map trees and related node content incrementally

## Open Domain Risks

- rich nodes can become too document-like
- layout storage can get messy if the interaction model is not decided early
- undo/redo may require an event log or at least mutation snapshots later
