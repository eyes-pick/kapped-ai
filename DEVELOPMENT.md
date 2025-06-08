# Development & Project Structure

Welcome to the Kapped codebase! Here’s a quick guide to help new and beginner developers understand the layout and conventions:

## Directory Overview

- **/app/** — Next.js app directory. Contains all route pages and layouts.
  - **/docs/** — The documentation page and sidebar navigation.
  - **/dashboard/** — The main dashboard page.
- **/components/** — All React components.
  - **/docs/** — Components for rendering markdown and documentation.
  - **/header/** — Header and navigation slot components.
  - **/ui/** — UI primitives (buttons, cards, etc.) from shadcn/ui.
- **/docs/** — All markdown documentation files (user guide, dev notes, etc.).
- **/lib/** — Utility functions.
- **/hooks/** — Custom React hooks.
- **/public/** — Static assets (images, robots.txt, etc.).
- **/scripts/** — Shell and PowerShell scripts for development and automation.

## Key Conventions

- **All documentation rendering uses `DocMarkdown` in `/components/docs/`.**
- **Header slots are modular and grouped in `/components/header/`.**
- **UI primitives are only in `/components/ui/`.**
- **All docs are markdown files in `/docs/` and are loaded dynamically.**
- **All folders and files use lowercase except for React components.**

## How to Add a New Page or Component

1. Add your page to `/app/` (e.g., `/app/newpage/page.tsx`).
2. Add new components to `/components/` in the appropriate subfolder.
3. For documentation, add a markdown file to `/docs/` and update the sidebar in `/app/docs/page.tsx`.

## How to Run & Test

- Use the provided PowerShell scripts (e.g., `run-client.ps1`, `test.ps1`, `lint.ps1`) for common tasks.
- All markdown rendering and sidebar navigation is handled in `/app/docs/page.tsx` and `/components/docs/doc-markdown.tsx`.

---

If you have questions, check the README or ask a maintainer!
