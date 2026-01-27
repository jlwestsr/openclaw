# Moltbot Project Review

## Overview
**Moltbot** is the rebranded version of the personal AI assistant formerly known as **Clawdbot**. The project is currently in a transitional state, with the core CLI and package identity updated to `moltbot`, but significant legacy "Clawdbot" references remaining in documentation, configuration, and internal code structures.

## Status: Active Rebranding (Transitional)

### ✅ Completed / Updated
*   **Package Name**: `package.json` correctly names the project `"moltbot"`.
*   **CLI Binary**: The primary executable is `moltbot` (with `clawdbot` retained as a compatibility shim).
*   **Documentation URLs**: `README.md` references `https://molt.bot` and `https://docs.molt.bot`.
*   **Deployment**: `fly.toml` references `app = "moltbot"`.
*   **Extension Scopes**: Extensions like `slack` are using `@moltbot/slack`.

### ⚠️ Inconsistencies & Legacy References

#### 1. Documentation (README.md)
The `README.md` is a mix of both names:
*   **Title**: Still reads `# 🦞 Clawdbot — Personal AI Assistant`.
*   **Badges**: Point to `clawdbot/clawdbot` GitHub repository (this may be intentional if the repo hasn't moved).
*   **Content**: Refers to "Clawdbot" as the product name in the intro and throughout the text (e.g., "Clawdbot is a personal AI assistant...").
*   **Links**: Discord link is still `discord.gg/clawd`.

#### 2. Configuration & State
*   **Config Directory**: The project still uses `~/.clawdbot/clawdbot.json` by default.
*   **Credentials**: Stored in `~/.clawdbot/credentials`.
*   **Environment Variables**: Heavy usage of `CLAWDBOT_` prefix (e.g., `CLAWDBOT_SKIP_CHANNELS`, `CLAWDBOT_PROFILE`, `TELEGRAM_BOT_TOKEN`).

#### 3. CI/CD & GitHub
*   **Workflow Files**: GitHub Actions (`.github/workflows`) use `CLAWDBOT_` env vars and refer to `clawd.bot` URLs.
*   **Issue Templates**: Still refer to "Clawdbot".

#### 4. Source Code
*   **Internal References**: `grep` shows numerous references to "Clawdbot" in `src` and `scripts`.
*   **Imports**: Extensions seem to import from `clawdbot/plugin-sdk` (needs verification if this is an alias or old path).

## Recommendations

1.  **Update README Header**: Change title to "Moltbot" and update introductory text to reflect the new name, mentioning Clawdbot only as the previous name or compatibility alias.
2.  **Standardize Config Path**: Migration plan needed to move from `~/.clawdbot` to `~/.moltbot` (or support both with preference for the new one).
3.  **Environment Variables**: Introduce `MOLTBOT_` prefixes for environment variables, keeping `CLAWDBOT_` as fallback support.
4.  **Codebase Refactor**: Systematically rename internal constants and logging strings from "Clawd" to "Molt" where appropriate, ensuring no breaking changes for existing installs.
