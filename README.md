# LifeLearnerLab Docs

Documentation site built with VitePress, hosted on Vercel.

## Pages

- [VPS Setup & Security Guide](docs/vps-setup.md) — Secure an Ubuntu VPS from scratch (Windows + WSL friendly)
- [Hermes Agent Setup](docs/hermes-setup.md) — Install and configure your own AI agent on a VPS
- [AI Architecture Terms](docs/ai-architecture-terms.md) — Simple analogies for LLM, Agent, and Provider
- [Discord Prep](docs/discord-prep.md) — Pre-install checklist for Discord bot setup
- [OpenRouter Prep](docs/openrouter-prep.md) — Pre-install checklist for OpenRouter API key
- [Hermes Ideas](docs/hermes-ideas.md) — Cool things to do with your Hermes agent

## Local Development

```bash
npm install
npm run docs:dev
```

Open http://localhost:5173 to preview.

## Build

```bash
npm run docs:build
```

Static output goes to `docs/.vitepress/dist/`.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com), import the repo
3. Vercel auto-detects the `vercel.json` config — no extra setup needed
4. (Optional) Add a custom domain in Vercel project settings

## Structure

```
docs/
  .vitepress/config.mjs   # VitePress config (nav, sidebar, theme)
  index.md                # Homepage
  vps-setup.md            # VPS guide
  hermes-setup.md         # Hermes guide
  ai-architecture-terms.md
  discord-prep.md
  openrouter-prep.md
  hermes-ideas.md
  public/images/           # Served at /images/...
vercel.json               # Vercel build config
package.json              # Node deps and scripts
```
