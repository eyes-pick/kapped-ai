# 🚀 Welcome to Kapsules by GENR8

**Kapsules** is an AI-powered no-code platform that turns your ideas into fully functional web applications—just by describing them in plain English.

Whether you're a founder, creative, or entrepreneur, you can launch full-stack apps without writing code or hiring developers.

---

## 🌐 What is Kapsules?

Kapsules interprets your natural language prompt and generates a complete, working web application. It builds the file structure, writes the code, and displays a live, interactive preview—all in real time.

**Example Prompt**:

> _"Create a task management app with login and dark mode."_

Within seconds, Kapsules generates:

- Auth scaffolding
- Dashboard layout
- Theme toggler
- Live preview

---

## 🧠 How It Works

1. **User prompt** → Describe what you want
2. **AI interprets** → Identifies intent, structure, components
3. **Codebase generated** → React + Tailwind + backend scaffolding
4. **Preview renders** → View your app in a live sandbox
5. **Chat continues** → Iterate and improve via AI

---

## ⚙️ What You Can Build

| App Type             | Example Features                            |
| -------------------- | ------------------------------------------- |
| Business Dashboards  | Auth, tables, analytics, sidebars           |
| Landing Pages        | CTAs, forms, animations                     |
| E-commerce Frontends | Product listings, carts, Stripe integration |
| Portfolio Sites      | Sections, themes, custom routing            |
| Custom SaaS Tools    | CRUD apps, user roles, notifications        |

---

## 🧱 Getting Started

1. Go to: [**kapsules.genr8.dev**](https://kapsules.genr8.dev)
2. Enter a prompt describing your app
3. Wait a few seconds
4. View and interact with your live app
5. Use the AI chat to update features, add components, or change styling

---

## 🧪 Tech Behind the Scenes

- **Frontend**: React + Tailwind + ShadCN/UI
- **AI Engine**: LLMs for intent → file generation
- **Rendering**: Iframe sandbox with isolated environment
- **Backend (optional)**: Supabase, API generation support
- **Project templates**: App structure adapts to your use-case
- **Vite example**: React + TypeScript template in `vite-template/` with Tailwind CSS and ShadCN/UI
  - Build output stored in `vite-template/dist`

## 🔐 Authentication Flow

- Sign up or log in via `/auth/signup` and `/auth/login`
- Requests hit `/api/auth/[...nextauth]` which verifies credentials
- A session cookie is created and users are redirected to `/projects/[id]`

## 🌐 Dynamic Project Routes

- Each project lives at `/projects/<projectId>`
- The `[id]` page loads the chat interface and preview for that project

## ☁️ Cloudflare Storage Structure

- User and session records persist in Cloudflare KV
- Keys are stored under `users:{email}` and `sessions:{token}`

## 🛠️ Build Process

- Run `npm run build` to compile the main Next.js app
- Execute `./vite-template/compile_page.sh` to build the Vite sandbox
- Set `NODE_ENV` to `development` locally or `production` for deployment

---

## 🔍 Learn More

- [Product Docs](https://kapsules.genr8.dev/docs)
- [Prompt Library](https://kapsules.genr8.dev/library)
- [Templates](https://kapsules.genr8.dev/templates)

---

## 💬 Join the Community

- 💬 Discord: [Join GENR8 Community](https://discord.gg/genr8)
- 🐦 Twitter: [@genr8_dev](https://twitter.com/genr8_dev)
- 📧 Email: [genr8.ai@gmail.com](mailto:genr8.ai@gmail.com)
