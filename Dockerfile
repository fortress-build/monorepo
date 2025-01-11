ARG NODE_VERSION=23
FROM node:${NODE_VERSION}-alpine AS alpine

RUN apk update
RUN apk add --no-cache libc6-compat

FROM alpine AS base

RUN npm install pnpm turbo --global
RUN apk add --no-cache python3 make g++

FROM base AS pruner
ARG PROJECT

WORKDIR /app
COPY . .
RUN pnpx turbo prune ${PROJECT} --docker

FROM base AS builder
ARG PROJECT

WORKDIR /app

COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/json/ ./
COPY --from=pruner /app/apps/docs/source.config.ts ./apps/docs/source.config.ts

RUN pnpm install --frozen-lockfile

COPY --from=pruner /app/out/full/ ./

RUN pnpx turbo run build --filter=${PROJECT}

RUN pnpm install --prod --frozen-lockfile
RUN pnpm prune
RUN pnpm store prune

FROM alpine AS runner
ARG PROJECT

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs

WORKDIR /app
COPY --from=builder --chown=nodejs:nodejs /app/apps/${PROJECT}/.next/standalone .
COPY --from=builder --chown=nodejs:nodejs /app/apps/${PROJECT}/.next/static apps/${PROJECT}/.next/static
COPY --from=builder --chown=nodejs:nodejs /app/apps/${PROJECT}/public apps/${PROJECT}/public

WORKDIR /app/apps/${PROJECT}

ARG PORT=3000
ENV PORT=${PORT}
ENV NODE_ENV=production
EXPOSE ${PORT}

CMD node server.js
