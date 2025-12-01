# IMMEDIATE FIX - sequencemkts.com DNS Issue

## Problem Identified
The CNAME target `bai-funds.github.io` returns 404 because it doesn't exist. For project repositories, GitHub Pages URLs include the repository path, which can't be used in CNAME records.

## Solution: Switch to A Records

### Step 1: Delete CNAME Record
1. Go to Cloudflare → DNS
2. Find the CNAME record for `sequencemkts.com`
3. Click **Delete** (or Edit → Delete)

### Step 2: Add 4 A Records
Add these 4 A records (one at a time):

**Record 1:**
- Type: `A`
- Name: `@` (or leave blank for apex domain)
- IPv4 address: `185.199.108.153`
- Proxy status: 🟠 **Proxied** (Orange cloud ON)
- TTL: Auto
- Click **Save**

**Record 2:**
- Type: `A`
- Name: `@`
- IPv4 address: `185.199.109.153`
- Proxy status: 🟠 **Proxied**
- TTL: Auto
- Click **Save**

**Record 3:**
- Type: `A`
- Name: `@`
- IPv4 address: `185.199.110.153`
- Proxy status: 🟠 **Proxied**
- TTL: Auto
- Click **Save**

**Record 4:**
- Type: `A`
- Name: `@`
- IPv4 address: `185.199.111.153`
- Proxy status: 🟠 **Proxied**
- TTL: Auto
- Click **Save**

### Step 3: Update www Record (Optional)
You can either:
- Keep the www CNAME as is, OR
- Delete it and add the same 4 A records with Name: `www`

### Step 4: Wait and Test
1. Wait 2-5 minutes for DNS to update
2. Clear browser cache (Ctrl+Shift+Delete)
3. Visit `https://sequencemkts.com`

## Why This Works
- A records point directly to GitHub Pages IPs
- No dependency on a non-existent CNAME target
- Cloudflare proxy still provides SSL, CDN, and DDoS protection
- Works with project repositories that have paths in their URLs

## Final DNS Configuration Should Look Like:
```
Type: A
Name: @
IPv4: 185.199.108.153
Proxy: 🟠 Proxied

Type: A
Name: @
IPv4: 185.199.109.153
Proxy: 🟠 Proxied

Type: A
Name: @
IPv4: 185.199.110.153
Proxy: 🟠 Proxied

Type: A
Name: @
IPv4: 185.199.111.153
Proxy: 🟠 Proxied

Type: CNAME (or A records)
Name: www
Target: bai-funds.github.io (or use same A records)
Proxy: 🟠 Proxied
```

