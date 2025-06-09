# Kapped: Browser AI Execution Sandbox & No-Code Platform

Kapped is a browser-based AI execution sandbox and no-code platform. It empowers users to design, execute, and manage AI-driven workflows and automations directly from their web browser—without writing a single line of code.

## Documentation Index

- [Key Features](docs/key-features.md)
- [Future SDK Integrations](docs/future-integrations.md)
- [Getting Started](docs/getting-started.md)
- [User Guide](docs/user-guide.md)
- [Developer Notes](docs/dev-notes.md)
- [UI/UX Development Pipeline](docs/uiux-pipeline.md)
- [Project Tasks & Roadmap](docs/tasks.md)
- [Example Use Cases](docs/use-cases.md)
- [Contributing](docs/contributing.md)
- [License](docs/license.md)

For questions, support, or feature requests, please open an issue or contact the maintainers.

## Sandbox Development

Start both the Next.js and Vite development servers with:

```bash
npm run sandbox
```

This script launches Next.js on [http://localhost:3001](http://localhost:3001) and the Vite sandbox on [http://localhost:5173](http://localhost:5173).

## Verification Checks

Before submitting a pull request, run these commands to catch build errors and bugs:

```bash
npm run lint
npm run typecheck
npm test
```

If `lib/templates.json` exists, also validate it with:

```bash
npm run validate:templates
```


