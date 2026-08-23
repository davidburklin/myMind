# Core User Flows

## Primary User

A single personal user with an account.

## Flow 1: First-Time Setup

1. User opens the app.
2. User creates an account or signs in.
3. User lands in a default workspace or creates one.
4. User creates their first map.
5. User is placed directly into the canvas with the root node selected and ready for editing.

## Flow 2: Fast Brain Dump

1. User opens a map.
2. User starts typing into the selected node.
3. User uses keyboard shortcuts to create child and sibling nodes rapidly.
4. User continues adding nodes without leaving the keyboard.
5. Autosave occurs continuously in the background.

## Flow 2A: Capture A Thought

1. User enters a quick thought into a lightweight capture input.
2. The thought is stored in the workspace capture bucket for the current day.
3. User continues working without needing to choose a map or node immediately.
4. Later, the user opens the capture bucket and converts that thought into:
   - a new node in a selected map
   - content appended or attached to an existing node

## Flow 3: Add Context To A Node

1. User selects a node.
2. User opens a side panel, popover, or detail editor.
3. User adds notes, links, checklist items, and attachments.
4. User returns focus to the main canvas without losing editing momentum.

## Flow 4: Reorganize A Thought Structure

1. User drags a node or branch to a new parent or position.
2. Canvas updates immediately.
3. Persisted data is updated in the background.
4. Undo is available if the move was accidental.

## Flow 5: Resume Work Later

1. User signs back in on the same or different device.
2. User sees recent workspaces and maps.
3. User opens a map and resumes editing from the latest saved state.

## Flow 6: Search For An Idea

1. User enters a search term.
2. Search defaults to the selected node and its descendants when inside a map.
3. A visible global toggle becomes available during search entry.
4. User can expand search to the whole workspace when needed.
5. App returns matching maps and nodes.
6. User opens the relevant map and jumps to the matching node.

## UX Requirements Across Flows

- most editing actions should feel instant
- save state should be trustworthy but quiet
- keyboard support should be strong
- rich content editing should not bury the canvas
- users should rarely need a modal for routine editing
