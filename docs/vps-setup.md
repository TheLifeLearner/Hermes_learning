---
layout: page
title: VPS Setup & Security Guide
permalink: /docs/vps-setup/
---

# Setting Up and Securing an Ubuntu VPS

A practical guide for deploying and hardening an Ubuntu VPS. Written for Windows users with WSL, but works from any Linux or macOS terminal.

## Prerequisites

- Windows 10 (2004+) or Windows 11 with WSL 2 installed
- A VPS provider account (DigitalOcean, Linode, Vultr, Hetzner, etc.)
- ~30 minutes

## Step 1: Set Up WSL (if not done)

Open PowerShell as admin and run:

```
wsl --install -d Ubuntu-22.04
```

Restart your machine. Open Windows Terminal, select Ubuntu, and verify:

```
lsb_release -a
```

## Step 2: Generate SSH Key

In your WSL terminal:

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## Step 3: Deploy Your VPS

- Create an Ubuntu 22.04 LTS instance on your provider
- Choose the smallest plan ($4-6/mo)
- Copy your SSH public key to the provider's web console

## Step 4: Initial Server Setup

SSH into your VPS as root:

```
ssh root@your_vps_ip
```

Update and install essentials:

```
apt update && apt upgrade -y
apt install -y vim curl wget git ufw fail2ban
```

## Step 5: Create a Non-Root User

```
adduser yourusername
usermod -aG sudo yourusername
cp -r ~/.ssh /home/yourusername/
chown -R yourusername:yourusername /home/yourusername/.ssh
```

Test: `ssh yourusername@your_vps_ip`

## Step 6: Harden SSH

Edit `/etc/ssh/sshd_config`:

```
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AllowUsers yourusername
```

Apply:

```
sudo sshd -t
sudo systemctl reload sshd
```

## Step 7: Configure Firewall

```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status verbose
```

## Step 8: Enable Fail2Ban

```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Edit `jail.local` -- ensure `[sshd]` section has `enabled = true`. Then:

```
sudo systemctl restart fail2ban
sudo fail2ban-client status sshd
```

## Step 9: Verify

- [x] SSH login works with your user
- [x] Root login is denied
- [x] Password auth is denied
- [x] Firewall is active
- [x] Fail2Ban is running

## Maintenance

| Frequency | Task |
|-----------|------|
| Weekly | `sudo apt update && sudo apt upgrade -y` |
| Weekly | `sudo fail2ban-client status sshd` |
| Monthly | `sudo ufw status` |
| Quarterly | Rotate SSH keys |

---