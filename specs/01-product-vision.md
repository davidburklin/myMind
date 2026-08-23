# Product Vision

## Working Name

`myMind`

## Product Summary

`myMind` is a web-based mind mapping application designed for fast personal thinking, planning, and note organization.

The product should feel optimized for quickly getting ideas out of the user's head and into a structured visual form, without the friction and complexity often found in diagramming tools.

The product should also support a lower-commitment capture flow for ideas that are not yet ready to become structured map content.

The closest current reference product is `SimpleMind`, especially in terms of directness, speed, and branch-based mind map editing. However, `myMind` should be web-based, cloud-backed, and designed from the beginning so it can later expand to other platforms and collaborative workflows.

## Vision Statement

Build the fastest and most satisfying way for an individual user to capture, organize, and evolve ideas in a visual branching structure, starting on the web and growing into a cross-platform product over time.

## Product Principles

### 1. Speed Beats Decoration

The first priority is reducing friction in idea capture.

Users should be able to:

- create a map quickly
- capture a thought quickly without choosing where it belongs yet
- add sibling and child nodes with minimal clicks
- stay on the keyboard when desired
- reorganize ideas without losing flow

### 2. The Map Is the Product

The map canvas is the center of the experience, not a secondary document viewer.

Most product decisions should prioritize:

- smooth editing
- reliable layout behavior
- low-friction navigation
- high confidence that content is saved and recoverable

### 3. Rich Nodes, Simple Mental Model

Nodes should support richer content than plain text, but the product should not feel like a bloated document editor.

The MVP should support rich content while keeping the user-facing structure simple:

- workspace
- map
- capture bucket
- node
- connection

### 4. Personal First, Not Throwaway

Phase 1 is optimized for one user, but it should still feel like a real product with account identity, persistent cloud data, and a path to future collaboration.

### 5. Future-Proof the Core

The MVP should avoid architectural choices that make future sharing, sync, or native clients unnecessarily painful.

That means:

- stable identifiers
- backend authority over persisted data
- explicit user/workspace ownership
- event-safe mutation patterns

## Target User

The initial target user is the product owner: a personal user who wants a faster, more satisfying, more flexible mind mapping tool than currently available options.

This user:

- thinks visually
- wants cloud access
- values low friction over enterprise workflows
- does not need AI in the first version
- does not need team features in the first version

## Phase 1 Product Goal

Deliver a polished personal mind mapping web app that is genuinely useful for daily thought capture and organization.

The Phase 1 product should be good enough that the owner prefers using it over currently available alternatives for personal work.

## Non-Goals For Phase 1

- team collaboration as a launched feature
- advanced export/import ecosystem
- AI-assisted mapping
- enterprise admin features
- native Windows/iPhone apps
- deep offline-first sync
- extensive visual theming and presentation features
