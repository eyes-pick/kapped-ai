# Use official Node.js LTS image as the base
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    else npm install; fi

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Production image, copy built assets and install only production deps
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary files from build stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/next.config.* ./
COPY --from=base /app/tsconfig.json ./

# Expose port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
