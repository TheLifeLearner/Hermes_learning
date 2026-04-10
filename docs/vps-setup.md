---
layout: page
title: VPS Setup & Security Step by Step Guide
permalink: /docs/vps-setup/
---

# Setting Up and Securing an Ubuntu VPS

This is one on of the first steps if you want to host your own AI agent like Hermes. I dind't find a full breakdown on how to get things setup so this guide is to provide a step by step process of setting up a VPS server. The directions are based on Raff Technologies since thats what I picked to host my learning/education VM.
### Disclaimer - There are eaiser ways to deploy an application I just prefer to have more contol over the process and its helpful for learning

## Prerequisites

- Windows 11 (The current version of Windows already includes ssh or you can use WSL2)
- A VPS provider account (Direction are based on setting up VPS under Raff Technologies)
    - You can also use any of these also. (DigitalOcean, Linode, Vultr, Hetzner, etc.)
- A public/private key


## Step 1: Generate SSH Key

Open PowerShell and run:

```
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa
```

## Step 2: Deploy Your VPS
The directions below are related to setting up  VPS on https://rafftechnologies.com/. You can use any provider.
- Sign up for an account with the provider
- Optional - But recommended (Best security practices)
    - Click on Settings on the left hand side
    - Click theEnable MFA: Find the option for "Multi-Factor Authentication" and follow the on-screen instructions to enable it.
    - Complete the setup: Follow any additional prompts to complete the setup process.
- Create an Ubuntu 22.04 LTS instance on your provider
- https://help.rafftechnologies.com/en/articles/11151971-quick-start-launching-your-first-vm
- Choose the smallest plan ($4-6/mo)
- Copy your SSH public key to the provider's web console

## Step 3: Initial Server Setup

SSH into your VPS as root:

```
ssh root@your_vps_ip
```

Update and install essentials:

```
apt update && apt upgrade -y
apt install -y vim curl wget git ufw fail2ban
```

## Step 4: Create a Non-Root User

```
adduser yourusername
usermod -aG sudo yourusername
cp -r ~/.ssh /home/yourusername/
chown -R yourusername:yourusername /home/yourusername/.ssh
```

Test: `ssh yourusername@your_vps_ip`

## Step 5: Harden SSH

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

## Step 6: Configure Firewall

```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status verbose
```

## Step 7: Enable Fail2Ban

```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Edit `jail.local` -- ensure `[sshd]` section has `enabled = true`. Then:

```
sudo systemctl restart fail2ban
sudo fail2ban-client status sshd
```

## Step 8: Verify

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