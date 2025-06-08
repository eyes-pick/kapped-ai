# PowerShell script to clean node_modules and .next
# Usage: .\clean.ps1

Remove-Item -Recurse -Force node_modules,.next -ErrorAction SilentlyContinue
Write-Host "Cleaned node_modules and .next."
