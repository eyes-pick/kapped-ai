🧭 Getting Started with Kapsules by GENR8

Welcome to Kapsules, the AI-powered no-code development platform designed to help you turn your ideas into fully functional web apps in minutes. This guide will walk you through the basics of using Kapsules for the first time.

⸻

✅ Prerequisites

You don’t need to know how to code, but you’ll need:
• A modern browser (Chrome, Safari, or Firefox recommended)
• An internet connection
• An idea or prompt ready to describe (e.g., “Create a blog with login and comments”)

⸻

🖥️ Step-by-Step Guide

1. Visit the Platform

Go to: https://kapsules.genr8.dev

2. Start a New Project
   • Click on “New Project”
   • Enter a natural language prompt describing what you want to build
   • Example: “Build a landing page with contact form and dark mode”

3. Wait for Generation
   • Kapsules will interpret your prompt and:
   • Generate project files
   • Scaffold React + Tailwind components
   • Render a live preview in the sandbox

4. View Your App
   • Interact with your app in the right-hand preview window
   • Use the AI chat interface to ask for updates or new features
   • Example: “Add a login form”
   • Example: “Change background to gradient blue”

5. Iterate & Refine
   • Continue improving your app with follow-up prompts
   • Preview updates in real time without reloading

⸻

📂 What’s Happening Behind the Scenes?
• AI parses your prompt into structured intent
• Templates scaffold app structure and logic
• Virtual file system stores the codebase temporarily
• Live preview renders your app inside a secure sandboxed iframe

⸻

🚀 Next Steps
• Explore Prompt Examples
• Join the Community on Discord
• Browse Templates
• Learn About AI Capabilities

⸻

💡 Tips
• Be clear and specific in your prompts
• Start simple, then iterate
• Use the AI chat to ask for changes instead of retyping full prompts

⸻

🔐 Authentication Flow
• Users sign up or log in at `/auth/signup` and `/auth/login`
• Credentials are posted to `/api/auth/[...nextauth]`
• Successful login sets a session cookie and redirects to `/projects/[id]`

🔄 Dynamic Project Routes
• Each project has its own URL like `/projects/my-project`
• The `[id]` segment loads components and chat for that project

☁️ Cloudflare Storage
• User and session data persist in a Cloudflare KV store
• Keys follow `users:{email}` and `sessions:{token}` naming

🛠️ Local Build
• Run `npm run build` to compile the Next.js app
• Run `./vite-template/compile_page.sh` to build the Vite sandbox
• Set `NODE_ENV=development` for local testing or `production` for final builds

⸻

Need help? Contact us at genr8.ai@gmail.com
