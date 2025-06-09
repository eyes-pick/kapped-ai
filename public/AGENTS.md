# KAPSULES • DEVELOPMENT AGENT OPERATING MANUAL

---

## 🧠 PURPOSE

This document serves as a unified protocol for **contributing agents**—both human and AI—working on the `kapsules` platform. It outlines standards for creating, modifying, and deploying modular runtime environments (capsules), UI components, internal logic, and schema registries. It ensures seamless integration, minimal friction during collaboration, and high reproducibility across automated and human workflows.

---

## 📏 REPO SCOPE & CONTEXT

- **Monorepo Name**: `kapsules`
- **Primary Objective**: Build and manage pluggable sandbox environments powered by `e2b`, exposed via a typed Next.js application.
- **AI Role Support**: Capsule generation, UI synthesis, logic abstraction, test authoring, and integration compliance validation.

---

## 📂 PROJECT STRUCTURE

```
kapsules/
├── app/                # Next.js App Router pages (routing only)
├── components/         # Modular, atomic UI (ShadCN + TailwindCSS)
├── lib/                # Schemas, utilities, registry, logic
├── public/             # Static files, third-party logos/templates
├── readme-assets/      # Diagrams, instructions, external images
├── templates/          # E2B sandbox definitions (Docker + TOML)
├── .env.template       # Environment bootstrap
├── *.config.*          # Linting, styling, build tools
└── README.md
```

---

## ⚙️ SYSTEM SETUP

```bash
# Clone and initialize
git clone https://github.com/YOUR_ORG/kapsules.git
cd kapsules
cp .env.template .env

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🧹 TASK MODULES

Each contribution is decomposed into isolated task modules that agents should operate within.

### MODULE 1: Capsule Creation

> Create or update sandbox environments under `templates/`

**Steps:**

1. Create a new folder: `templates/{capsule-name}/`
2. Add `e2b.Dockerfile` (runtime environment)
3. Add `e2b.toml` (metadata: port, entrypoint, requirements)
4. Register it in `lib/templates.json` using:

   ```json
   {
     "id": "nextjs-developer",
     "name": "Next.js Developer Capsule",
     "entry": "app.ts",
     "port": 3000,
     "runtime": "nodejs",
     "dockerImage": "e2b/nextjs:latest",
     "features": ["typescript", "live reload"]
   }
   ```

**Validation:**

```bash
npx zod-cli validate lib/templates.json
```

---

### MODULE 2: UI Component Development

> Add/modify reusable components in `components/`

**Rules:**

- Must be SSR-safe and mobile-first
- Use Tailwind + ShadCN
- Export through barrel file: `components/{domain}/index.ts`
- Prefer functional composition over class-based design
- Include unit/visual test (when feasible)

---

### MODULE 3: Logic + Schema Development

> Contribute internal business logic to `lib/`

**Expectations:**

- Typed with `TypeScript`
- Schema-validated with `Zod`
- No side-effects or DOM access
- Must include test coverage if logic is non-trivial
- Types must be colocated (e.g., `types.ts` within the feature folder)

---

### MODULE 4: Registry Update

> Maintain template metadata in `lib/templates.json`

**Required Fields:**

- `id`, `name`, `entry`, `port`, `runtime`, `dockerImage`
- Optional: `description`, `icon`, `features`, `version`

**Rule:** Keep it alphabetically ordered by `id`.

---

## 🧪 VERIFICATION PROTOCOL

Run these before submitting a pull request:

```bash
# Lint and Typecheck
npm run lint
npm run typecheck

# Unit Tests
npm test

# Capsule Validation
npx zod-cli validate lib/templates.json
```

---

## 🔄 CONTRIBUTION FLOW

1. Branch from `main`:

   - Prefix: `feat/`, `fix/`, `refactor/`, or `docs/`

2. Make atomic changes only
3. Open a **Draft PR** if incomplete or collaborative
4. Submit **PR with title, description, and task module reference**
5. CI will auto-run tests and validation checks
6. Reviewer merges after approval + green checks

---

## 🧠 AI AGENT RESPONSIBILITIES

| Role              | Actions                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| Capsule Engineer  | Create/validate `e2b.toml`, test sandbox, and update template registry |
| UI Synthesizer    | Generate Tailwind-based component with examples and accessibility      |
| Schema Author     | Contribute `Zod` schemas and type-safe utility functions               |
| QA Agent          | Validate capsules, run tests, check SSR/DOM compliance                 |
| Coordinator Agent | Route tasks to relevant agents, review diffs, enforce protocol         |

---

## 🚀 DEPLOYMENT STRATEGY

| Type  | Trigger         | Conditions             |
| ----- | --------------- | ---------------------- |
| Patch | Bug/config fix  | No API/template change |
| Minor | New capsule/UI  | Backward-compatible    |
| Major | Breaking schema | New registry logic     |

All PRs should be labeled with `semver:patch|minor|major`.

---

## 🔧 FUTURE AUTOMATION PIPELINE

- [ ] GitHub Action: Auto-validate `templates.json` on PR
- [ ] Preview: Deploy sandbox per capsule with dynamic iframe
- [ ] CLI: `npx kapsules create-template` scaffolder
- [ ] Lint/Prettier Git hooks via `husky`
- [ ] Capsule version lock via `e2b.toml.version`

---

## 📌 ROADMAP LINKS

- [Design Guide](readme-assets/design-guidelines.md)
- [Template Format Spec](lib/template-schema.ts)
- [Capsule Execution SDK](https://docs.e2b.dev)
- [Zod CLI Docs](https://zod.dev)

---

## ✅ SUCCESS CONDITIONS FOR COMMIT

- ✅ All capsule metadata schema-valid
- ✅ All TypeScript passes strict mode
- ✅ UI is modular, documented, tested
- ✅ Commit/PR is atomic, self-explanatory, and reproducible
- ✅ AI-generated code must be human-verifiable and overrideable

---

# END
