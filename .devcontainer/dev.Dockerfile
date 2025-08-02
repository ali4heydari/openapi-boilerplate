FROM node:22.14.0

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node

WORKDIR /workspaces/awsome-project

ENV PNPM_HOME=/workspaces/pnpm
# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

# Install basic development tools
RUN apt update && apt install -y less man-db sudo git
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME && \
    chmod 0440 /etc/sudoers.d/$USERNAME


COPY pnpm-lock.yaml package.json ./

RUN corepack enable

# pre-loads required packages from pnpm-lock.yaml into the store,
# ready to be installed with `pnpm install`
RUN pnpm fetch

