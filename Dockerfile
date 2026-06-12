# --- 1. Stage: Dependencies installieren ---
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- 2. Stage: Projekt bauen ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js sammelt anonyme Telemetriedaten – das schalten wir aus
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- 3. Stage: Runner (Das eigentliche, schlanke Image) ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Sicherheits-Best-Practice: Nicht als Root-User im Container laufen lassen
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Nur die unbedingt notwendigen Dateien aus der Build-Stage kopieren
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]