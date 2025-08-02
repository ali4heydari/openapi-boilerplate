FROM node:22.14.0-alpine3.20 as builder
WORKDIR /source
ENV CI=true

COPY package.json pnpm-lock.yaml ./

RUN corepack enable \
    && pnpm install --frozen-lockfile --prod


COPY . .

RUN pnpm build && pnpm report

FROM nginx:1.27.4 as runner
WORKDIR /usr/share/nginx/html

COPY --from=builder /source/build/ ./

RUN rm .gitkeep && \
    cp swagger-docs.html index.html

ENTRYPOINT ["nginx", "-g", "daemon off;"]

