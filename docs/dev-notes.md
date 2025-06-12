# 🛠 Developer Notes for Kapsules by GENR8

This document tracks internal development decisions, architecture insights, and active implementation notes for building and maintaining the Kapsules platform.

⸻

📦 Current Stack
	•	Framework: Next.js (App Router)
	•	Styling: TailwindCSS + ShadCN/UI
	•	AI Integration: OpenAI (gpt-4o), Claude (fallback model planned)
	•	Filesystem: In-memory + optional persistent (E2B or Supabase)
	•	Preview: iframe sandbox with controlled context loading
	•	State: Zustand (global), useLocalStorage for per-project state

⸻

🧱 Architecture Overview

[ Prompt Input ]
      ↓
[ AI Interpreter (LLM) ]
      ↓
[ Template Engine + File Writer ] → [ Virtual FS ] → [ Preview Sandbox ]
                                  ↓
                            [ Chat + Iteration Layer ]

	•	File writing is abstracted via a FileOrchestrator.ts
	•	Prompt parsing → intent → scaffolds pulled from /templates/*
	•	Preview reloads only changed modules using message passing into iframe

⸻

🔄 Change Management
	•	AI-Generated File Changes:
	•	Changes tracked in a change buffer before committing to FS
	•	Rollback capability in development
	•	User Modifications:
	•	Eventually editable in in-app file view (planned)
	•	Currently only modifiable via prompt interface

⸻

🔥 Hot Areas / Priorities
	•	Improve AI feedback loop latency
	•	Add diff/patch view between AI generations
	•	Optimize iframe performance (strip unused Tailwind at build-time)
	•	Add /.genr8 metadata dir to each project for internal use

⸻

🧪 Experimental Ideas
	•	Dual-mode edit interface: visual builder + code view
	•	Voice-to-code input (using Whisper)
	•	Add GPT function calling to isolate code logic generation

⸻

📌 Dev Checklist
	•	AI prompt context management (per project)
	•	Auth integration via Supabase or Clerk
	•	Add export-to-ZIP button
	•	Add localStorage fallback for offline builds
	•	Expand prompt understanding with intent tree map

⸻

Last updated: June 12, 2025

Contact: genr8.ai@gmail.com