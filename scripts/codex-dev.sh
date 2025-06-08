#!/bin/bash
# codex-dev.sh - Setup and test Codex environment for Kapped

set -e

# 1. Print environment info
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "OS: $(uname -a)"

# 2. Install npm dependencies
echo "Installing npm packages..."
npm install

# 3. Run TypeScript type checks
echo "Running TypeScript type checks..."
npx tsc --noEmit

# 4. Run ESLint for code linting
echo "Running ESLint..."
npx eslint . --ext .ts,.tsx --max-warnings=0

# 5. Run Prettier for formatting check
echo "Checking code formatting with Prettier..."
npx prettier --check .

# 6. Run tests (if any)
echo "Running tests..."
npm test || echo "No tests found or tests failed."

echo "Codex environment setup, lint, and test complete."
