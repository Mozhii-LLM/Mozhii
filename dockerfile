# Multi-stage Dockerfile for Next.js frontend + Express backend

FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (allow legacy peer deps to avoid conflicts)
COPY package.json pnpm-lock.yaml* ./
RUN npm install --legacy-peer-deps

# Copy the rest of the source code and build
COPY . .
RUN npm run build

# 2) Runner stage: production image with only runtime deps
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy app, build output and node_modules from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/server ./server

# Expose Next.js and Express ports
EXPOSE 3000
EXPOSE 5001

# Start both the API server and the Next.js app
CMD ["sh", "-c", "node server/index.js & npm run start"]