# Fix SSL Error 526 - Invalid SSL Certificate

## Problem
The site is accessible, but Cloudflare shows Error 526: "Invalid SSL certificate". This means Cloudflare can't establish a secure connection to GitHub Pages.

## Solution: Adjust Cloudflare SSL/TLS Settings

### Step 1: Change SSL/TLS Mode
1. Go to Cloudflare → SSL/TLS
2. Under "SSL/TLS encryption mode", change from **Full (strict)** to **Full**
3. Click **Save**

**Why:** GitHub Pages uses Let's Encrypt certificates that might not be in Cloudflare's strict validation list. "Full" mode will accept any valid SSL certificate from the origin.

### Step 2: Wait 2-5 Minutes
After changing the mode, wait a few minutes for the change to propagate.

### Step 3: Test Again
Visit `https://sequencemkts.com` - it should work now.

## Alternative: If "Full" Doesn't Work

If changing to "Full" doesn't work, try:
1. Set SSL/TLS mode to **Flexible** (temporarily)
2. Test if the site loads
3. If it works, change back to **Full** (Flexible is less secure)

## Why This Happens
- GitHub Pages uses Let's Encrypt certificates
- Cloudflare's "Full (strict)" mode validates the certificate issuer
- Sometimes there's a mismatch or delay in certificate validation
- "Full" mode is more lenient and should work

## Current Status
✅ DNS is working
✅ Site is reachable
❌ SSL certificate validation failing
🔧 Fix: Change SSL/TLS mode to "Full"

