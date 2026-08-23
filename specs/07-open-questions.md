# Open Questions

## Current Decisions Already Made

- web-first Phase 1
- existing frontend base is Nuxt/Vue/TypeScript
- personal-first product
- account/profile based from day one
- workspace-oriented organization
- map is the primary content object
- rich nodes are in MVP
- speed of capture is more important than visual polish
- SimpleMind is the main interaction reference
- no export/import in Phase 1
- no AI in Phase 1
- no active collaboration in Phase 1

## Questions To Resolve Next

### 1. Map Layout Behavior

How opinionated should layout be?

Decision:

- mostly automatic layout with user freedom to bend it in unusual cases

Remaining question:

- how should manual layout overrides be stored and represented in the UI?

### 2. Node Content Model

Should notes/body text be plain multiline text first, or lightweight markdown?

Decision:

- easy formatting should be available when the user needs it

Remaining question:

- should the first implementation use lightweight markdown, a simple rich-text surface, or a constrained formatting toolbar?

### 2A. Capture Bucket Model

The product needs a lightweight "capture a thought" flow outside the map structure.

Decision:

- captured thoughts should land in a day-grouped capture bucket
- captured thoughts can later become new nodes or be moved into existing nodes

Remaining questions:

- should conversion preserve a backlink to the original capture item?
- should capture items support tags or just raw text in Phase 1?

### 3. Checklist Model

Should checklist items live directly in nodes as lightweight task items, or should they later connect to a broader task system?

Recommendation:

- lightweight task items only in Phase 1

### 4. Attachment Scope

What kinds of files should be supported in MVP?

Recommendation:

- images first
- generic file attachments second if cheap

### 5. Search UX

Decision:

- search should default to local node and descendants
- a global checkbox/toggle should appear during search entry

Remaining question:

- should the local scope anchor to the currently selected node or to the current root-visible branch if a branch is focused?

### 6. Deletion Behavior

When deleting a node with children, what should happen?

Decision:

- ask by default
- allow the user to configure a default preference in profile settings

Remaining question:

- which options should the profile setting offer: ask, delete branch, or promote children?

### 7. Root Node Rules

Should each map always have exactly one root node?

Recommendation:

- yes

### 8. Node Cross-Links

Do we want arbitrary relationships between non-parent/child nodes in Phase 1?

Recommendation:

- no, unless implementation becomes obviously cheap

### 9. Recent Activity Model

How much history should the product keep in MVP?

Recommendation:

- recent maps and last-opened state
- basic timestamps
- defer full version history

### 10. Auth Provider Direction

Which auth route fits best with the backend decision and solo project needs?

Recommendation if using Convex:

- use a simple well-supported provider path, not a custom auth system

## Suggested Next Conversation

The highest-value next discussion is:

1. capture bucket behavior
2. text formatting model
3. deletion/reparenting rules
4. manual layout override rules

Once those are decided, the next useful docs would be:

- frontend implementation plan
- backend schema plan
- component breakdown
- interaction/state machine notes
