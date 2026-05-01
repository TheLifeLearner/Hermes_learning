# You made to the fun part and have a secure VPS server now

*If you're still wondering what is the best way to explain AI agents and other AI terms check out [AI Architecture Terms](/ai-architecture-terms)*

# Hermes Agent Setup

Install and configure a Hermes AI agent on your VPS.
    - Other doumentation you can use that is very helpful [Hermes Docs](https://hermes-agent.nousresearch.com/docs/) 

*This guide assumes you have completed the [VPS Setup & Security Guide](/vps-setup) first.*

## Disclaimer
- The directions are based on you wanting to use Discord as an interace to talk to your Hermes agent
    - Hermes offers other options also listed here [Messaging Gateway Options](https://hermes-agent.nousresearch.com/docs/user-guide/messaging)
- As for cost realted to LLMs you can control cost by using the following below. The directions assume you don't have a ChatGPT subscription and fine with purchasing a $10 credit with OpenRouter. The directions will show you how to select a free LLM model. The credit just will allow you to use a different model if you so choose.
    - ChatGPT Plus subscription - This helps provide you with a flat rate fee [ChatGPT pricing](https://chatgpt.com/pricing)
    - OpenRouter - This option also allows you to just purchase a one time credit that can be used with multiple LLMs [OpenRouter](https://openrouter.ai/)

## Prerequisites

- A secured Ubuntu VPS with SSH access
- LLM provider: You need to have something so Hermes has a brain.
    - An OpenRouter account with API key ([openrouter.ai](https://openrouter.ai)) (optional)
    - Chatgpt plus subscription (optional)
    - Hermes creator company: They are also an LLM provider you can use [Nousresearch](https://portal.nousresearch.com/login)
- Discord or Telegram accounts (optional)- Hermes support quite a few messaging options or you can use the Hermes TUI on the VPS

## Step 0: Prepare API keys and Discord Account 
*You can do these steps in the middle of setting up Hermes since it will ask you for the information or you can do it after. I find it better to do it before the install so you can copy and paste the info as requested. But its up to you.*
- [Discord Prep](/discord-prep)
- [OpenRouter Prep](/openrouter-prep)

## Step 1: Install Hermes

SSH into your VPS:

```bash
ssh <yourusername>@your_vps_ip
```

Follow the official Hermes installation docs to download and install the binary.
 - https://hermes-agent.nousresearch.com/
    - On the site it lists an install link you can use to start the setup on your VPS server. Copy the link
    - Go back to your server and paste the link and press enter

### Install Wizard Walkthrough

Hermes is updating alot so this is subject to change but should help:

| Prompt | What to enter |
| :--- | :--- |
| Install ripgrep for faster file search ffmpeg for TTS voice messages? | Press `Enter` (yes). You will be prompted for your sudo password |
| Quick setup -- provider, model & messaging (recommended) | Press `Enter` |
| Select provider | Choose your LLM provider (this is where you need your API key or ChatGPT login) |
| Connect a messaging platform? | Choose `Enter` for recommended |
| Select messaging platform | Arrow down to **Discord** and press `Spacebar` then `Enter` |
| Discord bot token | Paste your bot token |

After setup completes:

- Launch hermes chat now? [Y/n]: Press `Enter`

### Verify the install

```bash
hermes --version
```

Then send a test prompt in Discord or the TUI to confirm everything works.

## Other helpful info

- Discord - https://github.com/NousResearch/hermes-agent
- Github - https://github.com/NousResearch/hermes-agent
- Hermes Creator - https://nousresearch.com/
- Reddit
    - https://www.reddit.com/r/hermesagent/
    - https://www.reddit.com/r/nousresearch/
