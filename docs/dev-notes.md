# Kapped Developer Notes

`Welcome to the Kapped Developer Notes! We’re absolutely thrilled to have you here, whether you’re a seasoned developer, a curious newcomer, or a passionate contributor. This document is your comprehensive guide to understanding, building, and extending Kapped—the browser-based AI no-code platform that’s changing the way people develop websites and applications.`

## Table of Contents

- [Project Overview](#project-overview)
- [Development Environment Setup](#development-environment-setup)
- [Project Structure](#project-structure)
- [Key Technologies](#key-technologies)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Deployment](#deployment)
- [Contribution Guidelines](#contribution-guidelines)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

Kapped is a modern, modular web application built with Next.js and React. Our mission is to make AI Controlled Environments running VITE/REACT HMR dev-environments that you can prompt any app idea and continuously prompt for iterations. The codebase is thoughtfully organized for extensibility and maintainability, with a strong emphasis on reusable components and clear separation of concerns.

## Development Environment Setup

Getting started is easy and exciting! Just follow these steps:

1. **Clone the Repository:**
   ```powershell
   git clone <repository-url>
   cd kapped-ai
   ```
2. **Install Dependencies:**
   ```powershell
   npm install
   ```
3. **Start the Development Server:**
   ```powershell
   npm run dev
   ```
4. **Start the Sandbox Environment:**
   Run Next.js and Vite together:
   ```bash
   npm run sandbox
   ```
   Next.js: [http://localhost:3001](http://localhost:3001)  
   Vite: [http://localhost:5173](http://localhost:5173)
5. **Environment Variables:**
   - Create a `.env.local` file in the root directory for any required environment variables.
   - Refer to `.env.example` if available.

## Project Structure

| Folder        | Purpose                                             |
| ------------- | --------------------------------------------------- |
| `components/` | All React components, organized by feature and type |
| `app/`        | Next.js app directory, including pages and layouts  |
| `docs/`       | Project documentation for users and developers      |
| `hooks/`      | Custom React hooks                                  |
| `lib/`        | Utility functions and shared logic                  |
| `public/`     | Static assets such as images and icons              |
| `scripts/`    | Automation and setup scripts                        |

## Key Technologies

Kapped leverages the best modern web technologies:

- **Next.js** for server-side rendering and routing.
- **React** for building dynamic, interactive UIs.
- **TypeScript** for robust static typing and maintainability.
- **ESLint** and **Prettier** for code quality and consistent formatting.
- **PostCSS** for powerful CSS processing and customization.

## Development Workflow

- Use feature branches for new work: `git checkout -b feature/your-feature`
- Write clear, descriptive commit messages following conventional commit standards.
- Submit pull requests for review—collaboration is at the heart of Kapped!

## Testing

- Add and run unit tests for all new features and bug fixes.
- Use **Vitest** with **React Testing Library** for fast and reliable feedback.
- Run tests locally before pushing changes:
  ```bash
  npm test && npm run lint && npm run typecheck
  ```

## Code Quality

- Lint your code before committing:
  ```powershell
  npm run lint
  ```
- Follow the established code style and naming conventions.
- Document complex logic with clear, helpful comments.

## Deployment

- Build the application for production:
  ```powershell
  npm run build
  ```
- Deploy using your favorite platform (Vercel, Docker, etc.).
- Ensure all environment variables are set in the deployment environment.

## Contribution Guidelines

- Fork the repository and create a new branch for your changes.
- Write concise, meaningful commit messages.
- Make sure your code passes all tests and lints before submitting a pull request.
- Update documentation as needed—clear docs help everyone!

## Troubleshooting

If you run into issues, don’t worry! Here are some tips:

> **Tip:** Delete `node_modules` and reinstall dependencies if you encounter strange errors.

- Double-check your environment variables.
- Review error messages and stack traces for clues.
- Reach out to the project maintainers or open an issue if you need help.

---

Thank you for helping make Kapped amazing. Your contributions, questions, and ideas drive this project forward. **Let’s build something incredible together!**
