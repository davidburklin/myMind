# MVP Scope

## MVP Objective

Ship a web application that lets a signed-in personal user create and manage workspaces containing mind maps with fast, keyboard-friendly editing and rich node content.

## In Scope

### Account and Identity

- user account/profile
- sign-in
- persistent cloud-backed data tied to a user
- authentication should use google oauth to start. Leave room to add other oauth providers in the future.

### Workspace Layer

- create workspace
- rename workspace
- list maps within a workspace
- view capture bucket
- basic workspace settings

### Mind Maps

- create map
- rename map
- open map
- delete or archive map
- autosave map changes

### Thought Capture

- quick capture input for simple text thoughts
- captured thoughts grouped by day
- capture bucket view within the workspace
- move captured thought into a new node
- move captured thought into an existing node
- preserve capture timestamp

### Canvas Editing

- central/root node
- add child node
- add sibling node
- edit node inline
- drag node to reorder or reparent
- collapse/expand branches
- zoom and pan
- select single node
- multi-select if not too costly
- keyboard shortcuts for common editing actions

### Rich Node Content

MVP should support at least:

- plain text title
- longer notes/body text
- lightweight inline formatting when needed
- links/URLs
- simple checklist state
- image attachment or image reference
- file attachment metadata

### Organization and Navigation

- map list view
- recent maps
- local search from selected node downward
- optional global search toggle shown during search entry

### Quality and Reliability

- autosave
- optimistic UI where appropriate
- undo/redo at least within a session
- basic recovery from accidental edits
- configurable deletion behavior in profile settings

## Nice To Have In MVP If Cheap

- branch color styling
- icons or tags on nodes
- basic templates
- favorites or pinned maps
- breadcrumbs or mini-map

## Explicitly Out Of Scope For Phase 1

- real-time multi-user collaboration
- comments and presence features
- publish/share links
- export/import support
- AI generation or summarization
- billing and subscriptions
- advanced presentation mode
- native mobile or desktop packaging
- full offline mode

## MVP Success Criteria

The MVP is successful if a personal user can:

1. sign in and create a workspace
2. create multiple maps
3. quickly capture loose thoughts without deciding structure immediately
4. rapidly build and reorganize maps without noticeable lag
5. attach richer context to nodes than just a short label
6. trust that their work is being saved automatically
7. return later and continue from any device with the same account

## Risk Areas To Watch

- trying to ship too much node richness in the first pass
- over-investing in layout aesthetics before capture speed is strong
- making the data model too simplistic for future collaboration
- making the editor state too tightly coupled to one frontend implementation
