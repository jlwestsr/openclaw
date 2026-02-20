# Night Ride Theme — Changelog

Branch: `moto/theme-charcoal` (3 commits, local only — needs PAT to push)

## What Changed

### Commit 1: `feat(theme): Night Ride — charcoal base with cyan-teal accent`

- Replaced default OpenClaw color palette in `base.css` with Night Ride theme
- Charcoal backgrounds (#1e2024), cyan accent (#22d3ee), violet secondary (#a78bfa)
- All semantic colors (ok/warn/danger/info) tuned for charcoal base contrast

### Commit 2: `feat(theme): replace hardcoded colors with CSS vars, add compose glow`

- Began replacing hardcoded hex values in component files with CSS custom properties
- Added glow effects for focus states (cyan neon glow)

### Commit 3: `feat(theme): replace all hardcoded colors with CSS custom properties`

- **54 replacements** across `usageStyles.ts`, `usage.ts`, `layout.css`
- Zero hardcoded hex colors remain outside `base.css`
- Entire UI is now theme-responsive — swap `base.css` vars to reskin everything

## Files Modified

| File                             | Changes                                                        |
| -------------------------------- | -------------------------------------------------------------- |
| `ui/src/styles/base.css`         | Complete color palette replacement (80+ CSS custom properties) |
| `ui/src/styles/chat/layout.css`  | Hardcoded colors → CSS vars                                    |
| `ui/src/ui/views/usage.ts`       | Chart colors → CSS vars                                        |
| `ui/src/ui/views/usageStyles.ts` | 50+ hardcoded colors → CSS vars                                |

## Design Language

- **Night Ride**: Wet asphalt under neon. Charcoal depth, cyan glow, violet accents.
- **Font**: Space Grotesk (UI) + JetBrains Mono (code)
- **Philosophy**: Every color is a CSS custom property. Theme changes = edit one file.

## Blocked

- Git push requires PAT — commits are local only on the container
- Jason needs to provision credentials or push manually after review
