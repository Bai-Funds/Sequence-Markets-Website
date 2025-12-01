# DNS Setup Guide for sequencemkts.com

This guide will help you configure your DNS settings in **Cloudflare** to point `sequencemkts.com` to GitHub Pages.

## Cloudflare DNS Configuration Steps

### 1. Access Cloudflare DNS

1. Log into your Cloudflare account: https://dash.cloudflare.com
2. Select your domain: **sequencemkts.com**
3. Click on **DNS** in the left sidebar
4. Click **Add record**

### 2. Configure DNS Records

Since you're using Cloudflare, you have two options:

#### Option A: Using Cloudflare Proxy with A Records (Recommended - Orange Cloud) ✅

This provides CDN, DDoS protection, and SSL through Cloudflare:

**For project repositories, use A records (not CNAME) because the GitHub Pages URL includes a path:**

1. **Delete any existing CNAME record** for `sequencemkts.com` (apex domain)

2. **Add 4 A Records** pointing to GitHub Pages IPs:
   - **Type**: `A`
   - **Name**: `@` (or `sequencemkts.com`)
   - **IPv4 address**: `185.199.108.153`
   - **Proxy status**: 🟠 **Proxied** (Orange cloud - ON)
   - **TTL**: Auto
   - Click **Save**

3. **Repeat for the other 3 IPs:**
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

4. **Keep CNAME for www subdomain:**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Target**: `bai-funds.github.io` (or use A records here too)
   - **Proxy status**: 🟠 **Proxied**
   - **TTL**: Auto

**Benefits:**
- ✅ Cloudflare CDN and caching
- ✅ DDoS protection
- ✅ Free SSL/TLS
- ✅ Better performance
- ✅ Automatic HTTPS
- ✅ Works with project repositories

#### Option B: DNS Only (Gray Cloud - Direct to GitHub)

If you prefer GitHub Pages to handle SSL directly:

1. **Add A Records:**
   - **Type**: `A`
   - **Name**: `@` (or `sequencemkts.com`)
   - **IPv4 address**: `185.199.108.153`
   - **Proxy status**: ⚪ **DNS only** (Gray cloud - OFF)
   - **TTL**: Auto
   - Click **Save**

2. **Repeat for all 4 IPs:**
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

**Note:** With Option A (Proxied), Cloudflare handles SSL, so you don't need to wait for GitHub's SSL certificate.

### 3. Cloudflare SSL/TLS Settings (If using Option A - Proxied)

1. In Cloudflare, go to **SSL/TLS** in the left sidebar
2. Set SSL/TLS encryption mode to **Full** or **Full (strict)**
3. This ensures secure connection between Cloudflare and GitHub Pages

### 4. GitHub Pages Configuration

1. Go to your repository: `https://github.com/Bai-Funds/Sequence-Markets-Website`
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter: `sequencemkts.com`
4. If using Cloudflare proxy (Option A), you can skip "Enforce HTTPS" as Cloudflare handles it
5. If using DNS only (Option B), check **Enforce HTTPS** after DNS propagates

### 5. Wait for DNS Propagation

- With Cloudflare, DNS changes are usually **instant** (within minutes)
- You can check propagation status using tools like:
  - https://www.whatsmydns.net/#CNAME/sequencemkts.com (if using CNAME)
  - https://dnschecker.org/#A/sequencemkts.com (if using A records)

### 6. Verify HTTPS is Enabled

**If using Cloudflare Proxy (Option A):**
- HTTPS is automatically enabled through Cloudflare
- Visit `https://sequencemkts.com` - it should work immediately
- Cloudflare SSL/TLS mode should be set to **Full** or **Full (strict)**

**If using DNS Only (Option B):**
1. Wait for DNS to propagate (24-48 hours)
2. GitHub will automatically detect your domain
3. SSL certificate will be provisioned (can take a few hours)
4. **Enforce HTTPS** option will become available in GitHub Pages settings
5. Enable it to force all traffic to use HTTPS

## Cloudflare-Specific Troubleshooting

### DNS Check in Progress (GitHub Pages)

If you see "DNS Check in Progress" in GitHub Pages settings:
- **With Cloudflare Proxy**: This is normal - GitHub may not detect the domain immediately, but the site will work through Cloudflare
- **With DNS Only**: Wait 24-48 hours for DNS to propagate
- Verify your DNS records are correctly configured in Cloudflare

### HTTPS Not Working

**If using Cloudflare Proxy:**
- Go to **SSL/TLS** → Set mode to **Full** or **Full (strict)**
- Ensure the proxy is enabled (orange cloud 🟠)
- Cloudflare provides free SSL automatically

**If using DNS Only:**
- Wait for DNS to fully propagate
- Ensure all 4 A records are correctly set
- Wait for GitHub to provision SSL certificate (can take up to 24 hours)

### Domain Not Resolving

1. **Check Cloudflare DNS records:**
   - Go to **DNS** → Verify records are correct
   - Ensure proxy status matches your chosen option (orange/gray cloud)

2. **Check Cloudflare status:**
   - Ensure domain is not paused
   - Go to **Overview** → Check if domain shows as "Active"

3. **Clear DNS cache:**
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
   - Or use Cloudflare's DNS: `1.1.1.1` and `1.0.0.1`

### Site Shows Cloudflare Error Page

- Check **SSL/TLS** settings - set to **Full** or **Full (strict)**
- Verify GitHub Pages is accessible at `bai-funds.github.io`
- Check **Page Rules** for any conflicting rules

## Quick Setup Checklist

- ✅ CNAME file updated to `sequencemkts.com`
- ⏳ Add DNS record in Cloudflare (see steps above)
- ⏳ Configure SSL/TLS in Cloudflare (if using proxy)
- ⏳ Add custom domain in GitHub Pages settings
- ⏳ Verify site is accessible

## Recommended Cloudflare Settings

1. **DNS**: CNAME record with Proxy enabled (🟠 Orange cloud)
2. **SSL/TLS**: Full or Full (strict)
3. **Speed**: Auto Minify enabled (optional)
4. **Caching**: Standard caching level
5. **Security**: WAF enabled (included in Free plan)

## Support

If you encounter issues:
1. Verify DNS records are correct using `dig sequencemkts.com` or `nslookup sequencemkts.com`
2. Check GitHub Pages settings for any error messages
3. Review GitHub Pages documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

