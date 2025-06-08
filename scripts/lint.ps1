# PowerShell script to lint all code
# Usage: .\lint.ps1

npx eslint . --ext .ts,.tsx --max-warnings=0
