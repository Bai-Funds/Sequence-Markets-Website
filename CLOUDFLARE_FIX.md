# Cloudflare DNS Fix for sequencemkts.com

## Current Issue
- DNS records are configured but site not loading
- SSL/TLS is correctly set to "Full (strict)" ✅
- Both records are proxied (orange cloud) ✅

## Problem
The CNAME target might be incorrect. Currently set to:
- `bai-funds.github.io` (lowercase)

## Solution: Update CNAME Target

### Option 1: Try Capital Letters (Most Likely Fix)
GitHub organization names are case-sensitive. Update the CNAME target to:

1. Go to Cloudflare → DNS
2. Click **Edit** on the `sequencemkts.com` CNAME record
3. Change **Content/Target** from:
   - `bai-funds.github.io`
   
   To:
   - `Bai-Funds.github.io` (capital B and F)
   
4. Click **Save**
5. Repeat for the `www` record

### Option 2: Use Project-Specific URL
If Option 1 doesn't work, try:
- `Bai-Funds.github.io/Sequence-Markets-Website`

However, for custom domains, GitHub Pages typically expects just the organization name.

### Option 3: Verify Actual GitHub Pages URL
1. Go to: https://github.com/Bai-Funds/Sequence-Markets-Website/settings/pages
2. Check what URL GitHub shows under "Your site is live at..."
3. Use that exact URL (case-sensitive) in Cloudflare

## After Making Changes

1. **Wait 2-5 minutes** for DNS to propagate
2. **Clear browser cache** (Ctrl+Shift+Delete)
3. **Test the site:**
   - Visit `https://sequencemkts.com`
   - Visit `https://www.sequencemkts.com`

## Verification Steps

1. **Check DNS resolution:**
   - Visit: https://www.whatsmydns.net/#CNAME/sequencemkts.com
   - Should show the CNAME target

2. **Test direct GitHub Pages URL:**
   - Visit: `https://Bai-Funds.github.io/Sequence-Markets-Website`
   - Should redirect to your custom domain

3. **Check Cloudflare Analytics:**
   - Go to Cloudflare → Analytics
   - Should show traffic if DNS is working

## Most Likely Fix
**Change `bai-funds.github.io` to `Bai-Funds.github.io` (capital letters)**

This is the most common issue with GitHub Pages custom domains through Cloudflare.

