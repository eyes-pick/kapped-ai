# PowerShell script to build and run the Kapped app in Docker
# Usage: .\docker-run.ps1

# Build the Docker image
docker build -t kapped-app .

# Run the Docker container, mapping port 3000
docker run --rm -it -p 3000:3000 --name kapped-app kapped-app
