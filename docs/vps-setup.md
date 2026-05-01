# VPS Setup & Security Step by Step Guide

## Cost Estimate

Smallest VPS + free OpenRouter models = **under $10/month** to run your own AI agent.

---

# Setting Up and Securing an Ubuntu VPS

This is one on of the first steps if you want to host your own AI agent like Hermes. I didn't find a full breakdown on how to get things setup so this guide is to provide a step by step process of setting up a VPS server to test out Hermes. The VPS directions are based on Raff Technologies since thats what I picked to host my learning/education VM. You can use any vendor since the setup directions are based on linux once you can access the VPS

### Disclaimer -
- There are eaiser ways to deploy an application I just prefer to have more contol over the process and its helpful for learning.
- The directions are catered to people using Windows. I figured if you're using linux you may know most of the steps plus this help windows users get used to Linux if they have a passion to learn.


## Prerequisites

- Windows 11 (The current version of Windows already includes ssh or you can use WSL2)
- A VPS provider account (Direction are based on setting up VPS under Raff Technologies)
    - You can also use any of these also. (DigitalOcean, Linode, Vultr, Hetzner, etc.)
- A public/private key


## Step 1: Generate SSH Key

Open PowerShell and run: This creates modern Ed25519 key pair, but not all providers accept this.

```powershell
ssh-keygen -t ed25519
```

- You will be prompted for a passphrase. This adds an extra layer of security. Press Enter to leave it blank (more info below) 
    - If you leave it blank, anyone with access to your computer can use your key. If you add a passphrase, you'll have to type it once per session to "unlock" the key.

View the public key you created:

```powershell
cat ~/.ssh/id_ed25519.pub
```

### Disclaimer -
 - During the Key Generation. The computer generates two files:
    - **id_ed25519** (The Private Key): This is like your physical house key. Never share this file.
    - **id_ed25519.pub** (The Public Key): This is like the lock on your door. You upload this to the server you want to access.

## Step 2: Deploy Your VPS
The directions below are related to setting up  VPS on https://rafftechnologies.com/. You can use any provider.
- Sign up for an account with the provider
- Optional - But recommended (Best security practices)
    - Click on Settings on the left hand side
    - Click theEnable MFA: Find the option for "Multi-Factor Authentication" and follow the on-screen instructions to enable it.
    - Complete the setup: Follow any additional prompts to complete the setup process.
- Click on "+ Create" on the top right hand corner
- Click on "Create Instance"
![Create Instance](/images/vps-setup/VPS_01.png)
    - Region: At the time of this writing there is only one region
    - OS Template: Unbuntu
        - Version: 24.04x64
        ![OS Template](/images/vps-setup/VPS_02.png)
    - Choose Size: Pick the size based on your budget and if you want monthly/yearly. Even the smallest version will work with the Hermes agent
    ![Choose Size](/images/vps-setup/VPS_03.png)
    - Networking: 
        - Private Network: Auto(Recommended)
        - Public IPv4: Auto-Random IPv4
        - IPv6 Address: disabled (Optional)
        ![Networking](/images/vps-setup/VPS_04.png)
    - Authentication
        - SSH Key
            - Click on Add SSH Key button
                - Name: Use any you want for the key
                - SSH Key: Copy the public key from your powershell terminal and paste it here. Then click "Add SSH Key" button
                ![Add SSH Key](/images/vps-setup/VPS_05.png)
                ![SSH Key Added](/images/vps-setup/VPS_06.png)
                - Select the SSH key
                ![Select SSH Key](/images/vps-setup/VPS_07.png)
    - Hostnames:
        - VM 1: Enter the name of the server
        ![Hostname](/images/vps-setup/VPS_09.png)
- Click Proceed to Checkout
- Wait for the VPN to be created
![VPS Creating](/images/vps-setup/VPS_10.png)
- Once complete you will see it listed with a public ip address so you can login
![VPS Ready](/images/vps-setup/VPS_11.png)

## Step 3: Initial Server Setup

SSH into your VPS as root. Open PowerShell on your computer and type:

```powershell
ssh root@your_vps_ip
```

If the first command does not work you may have to point to the ssh key pair:

```powershell
ssh -i ~/.ssh/id_ed25519 root@your_vps_ip
```

- The "your_vps_ip" is listed under the IP address section from the provider dashboard

- Congrats you are now logged in and ready to get things secure before having fun

Update and install essentials:

```bash
apt update && apt upgrade -y
```

Install essential applications:

```bash
apt install -y vim curl wget git ufw fail2ban
```

- Lets setup a user account that is not root

## Step 4: Create a Non-Root User

```bash
adduser <yourusername>
usermod -aG sudo <yourusername>
cp -r ~/.ssh /home/<yourusername>/
chown -R <yourusername>:<yourusername> /home/<yourusername>/.ssh
```

Type the command below to exit the session to test if things are working with your non root user account.

Test: 

```bash
ssh yourusername@your_vps_ip
```

## Step 5: Harden SSH
- Now its time to edit the ssh config. Only do this step if you successfully logged in with your non root user account with SSH.
- Type the command below to open the config file in nano:

```bash
sudo nano /etc/ssh/sshd_config
```

Edit the following lines:

```
PermitRootLogin no
PasswordAuthentication no
```

To save press the following on the keyboard:
`Ctrl + O` then press `Enter`
`Ctrl + X` then press `Enter` to exit

Restart and verify the ssh service:

```bash
sudo sshd -t
sudo systemctl reload sshd
sudo systemctl status sshd
```

## Step 6: Configure Firewall
 - The important part is this order: IT has to be ran in this order

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status verbose
```

## Step 7: Enable Fail2Ban

```bash
sudo systemctl enable --now fail2ban
sudo systemctl status fail2ban
sudo fail2ban-client status sshd
```

## Step 8: Things you completed

- [x] SSH login works with your user
- [x] Root login is denied
- [x] Password auth is denied
- [x] Firewall is active
- [x] Fail2Ban is running

## Step 9: Have fun and explore
- Ideas - [Hermes Ideas](/hermes-ideas)

## Maintenance
The Cool thing is you can have Hermes create a job to perform weekly mainteance like 
- Keeping the OS updated or you can run the command weekly - `sudo apt update && sudo apt upgrade -y`
---
