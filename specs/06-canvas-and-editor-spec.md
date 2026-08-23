# Canvas And Editor Spec

## Editing Priorities

The editor should feel:

- fast
- direct
- keyboard-friendly
- visually clear
- forgiving

The product should favor editing throughput over advanced styling.

## Reference Interaction Style

The primary reference is `SimpleMind` style behavior:

- central thought with branching children
- direct node manipulation
- visually obvious hierarchy
- low ceremony editing

## Core Canvas Requirements

### Viewport

- zoom in and out
- pan with mouse/touchpad
- fit map to view
- center selected node

### Selection

- click to select node
- keyboard navigation between nearby nodes if feasible
- clear indication of selected node

### Node Creation

Required fast actions:

- create child node
- create sibling node
- create root-adjacent branch

These should be available through both UI controls and keyboard shortcuts.

### Inline Editing

Primary node title editing should happen inline on the canvas.

Design goals:

- minimal mode switching
- immediate typing after creation
- enter key behavior should be predictable
- escape should cancel appropriately

### Rich Content Editing

Rich content should not overload the main canvas node.

Recommended MVP pattern:

- short title on canvas
- details panel for notes, checklist items, links, and attachments
- lightweight formatting available when needed

This preserves fast scanning and fast editing.

### Rearrangement

The user should be able to:

- drag a node to reorder among siblings
- drag a branch to a different parent
- bend or manually adjust layout when the automatic layout is not ideal
- collapse branches to reduce clutter

The interaction should strongly avoid accidental destructive moves.

### Undo/Redo

Required for confidence.

At minimum support:

- create node
- delete node
- rename node
- move node
- reorder node
- edit node details

## Layout Behavior

Recommended confirmed direction:

- automatic layout should be the default
- the user should be allowed to bend or override parts of the layout
- the system does not need to expose every layout control on day one

Design implication:

- the layout engine should produce stable defaults
- manual adjustments should persist
- future rules for how much freedom is allowed can evolve from real usage

## Node Visual Model

### On-Canvas Content

Show:

- title
- maybe a small content/status indicator
- maybe small icons for notes, checklist, attachment, or links

Avoid:

- full body text rendering on the canvas by default
- document-like heavy cards in the first version

### Styling

Phase 1 styling should aim for:

- clear hierarchy
- readable labels
- subtle emphasis on selected path
- enough color support to help structure

Do not spend early effort on broad theme systems.

## Suggested Keyboard Actions

Initial proposed set:

- `Enter`: edit selected node or confirm edit
- `Tab`: create child node
- `Shift+Enter` or equivalent: create sibling node
- `Delete` or `Backspace`: delete selected node with sensible safeguards
- arrow keys: navigate between nodes if implementation is stable
- `Ctrl/Cmd+Z`: undo
- `Ctrl/Cmd+Shift+Z`: redo

Final shortcut choices should be validated for user comfort.

## Detail Editing Surface

Recommended MVP layout:

- full canvas as primary area
- collapsible right-side detail panel for selected node

Panel includes:

- notes/body text
- checklist items
- links
- attachments
- future tags or icons

## Capture Experience

The product should include a lightweight capture path separate from the map editor.

Suggested MVP behavior:

- persistent quick capture input in the app shell or workspace view
- captured items grouped by day
- one-click or drag-assisted conversion into a node later
- low friction over heavy metadata

## Search Behavior

Search should work across:

- map title
- node title
- node body
- checklist text
- URL labels if stored separately

Default behavior:

- when inside a map, search should begin as local to the selected node and its descendants
- once the user starts entering text, a visible global toggle should appear below the search box
- global search expands the scope to the full workspace

Search results should allow jumping directly to a node in context.

## Accessibility And Usability Notes

- keyboard-first workflows should be treated as a core feature, not polish
- focus management must be reliable
- drag actions should have non-drag alternatives where possible
- visible save state should reassure the user without becoming noisy

## Phase 1 Implementation Advice

Start with a structurally simple and dependable editor:

1. single map open at a time
2. normalized node store
3. predictable keyboard shortcuts
4. side panel for rich content
5. manual or semi-manual layout persistence

Only after this feels good should the product invest in more advanced visual flourishes.
