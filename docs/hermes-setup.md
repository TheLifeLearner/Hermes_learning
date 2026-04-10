---
layout: page
title: Hermes Agent Setup
permalink: /docs/hermes-setup/
---

# Hermes Agent Setup

Install and configure a Hermes AI agent on your VPS.

*This guide assumes you have completed the [VPS Setup & Security Guide](/docs/vps-setup/) first.*

## Prerequisites

- A secured Ubuntu VPS with SSH access
- An OpenRouter account with API key ([openrouter.ai](https://openrouter.ai))
- (Optional) Discord or Telegram bot token for notifications

## Step 1: Install Hermes

SSH into your VPS:

```
ssh yourusername@your_vps_ip
```

Follow the official Hermes installation docs to download and install the binary.

Verify:

```
hermes --version
```

## Step 2: Configure API Keys

Create a `.env` file in your Hermes config directory:

```
OPENROUTER_API_KEY=your_key_here
```

Lock it down:

```
chmod 600 .env
```

**Never commit your `.env` file to git.**

## Step 3: Choose a Model

Start with a free or low-cost model on OpenRouter to keep costs minimal. Edit your Hermes config to set the default model, then test with a simple prompt.

## Step 4: Connect Messaging (Optional)

Add your Discord bot token or Telegram token to `.env`. Test by sending a message from the agent.

## Step 5: Run on Boot (Optional)

Create a systemd service for Hermes so it starts automatically:

```
sudo systemctl enable hermes
sudo systemctl start hermes
sudo systemctl status hermes
```

## Verify

- [x] Hermes responds to prompts
- [x] API key is stored securely (not hardcoded)
- [x] (Optional) Agent sends notifications to Discord/Telegram

## Cost Estimate

Smallest VPS + free OpenRouter models = **under $10/month** to run your own AI agent.

---