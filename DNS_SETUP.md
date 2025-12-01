# DNS Setup Guide for sequencemkts.com

This guide will help you configure your DNS settings to point `sequencemkts.com` to GitHub Pages.

## DNS Configuration Steps

### 1. Access Your Domain Registrar

Log into your domain registrar (where you purchased `sequencemkts.com`) and navigate to DNS management.

### 2. Configure DNS Records

You need to add the following DNS records:

#### Option A: Apex Domain (sequencemkts.com) - Recommended

Add these **A records** pointing to GitHub Pages IP addresses:

```
Type: A
Name: @ (or leave blank, or sequencemkts.com)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank, or sequencemkts.com)
Value: 185.199.109.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank, or sequencemkts.com)
Value: 185.199.110.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank, or sequencemkts.com)
Value: 185.199.111.153
TTL: 3600 (or default)
```

#### Option B: CNAME Record (www.sequencemkts.com)

If you want to use `www.sequencemkts.com` instead:

```
Type: CNAME
Name: www
Value: bai-funds.github.io
TTL: 3600 (or default)
```

**Note:** You cannot use CNAME for the apex domain (sequencemkts.com) - only A records work for apex domains.

### 3. GitHub Pages Configuration

1. Go to your repository: `https://github.com/Bai-Funds/Sequence-Markets-Website`
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter: `sequencemkts.com`
4. Check **Enforce HTTPS** (this will be available after DNS propagates)

### 4. Wait for DNS Propagation

- DNS changes can take **24-48 hours** to fully propagate
- You can check propagation status using tools like:
  - https://www.whatsmydns.net/#A/sequencemkts.com
  - https://dnschecker.org/#A/sequencemkts.com

### 5. Verify HTTPS is Enabled

Once DNS has propagated:
1. GitHub will automatically detect your domain
2. SSL certificate will be provisioned (can take a few hours)
3. **Enforce HTTPS** option will become available
4. Enable it to force all traffic to use HTTPS

## Troubleshooting

### DNS Check in Progress

If you see "DNS Check in Progress" in GitHub Pages settings:
- Wait 24-48 hours for DNS to propagate
- Verify your A records are correctly configured
- Ensure no conflicting CNAME records exist for the apex domain

### HTTPS Not Available

If HTTPS enforcement is unavailable:
- Wait for DNS to fully propagate
- Ensure all 4 A records are correctly set
- Wait for GitHub to provision SSL certificate (can take up to 24 hours after DNS propagation)

### Domain Not Resolving

If the domain doesn't resolve:
- Double-check A record values (must be the exact IPs listed above)
- Verify TTL settings
- Clear your DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

## Current Status

- ✅ CNAME file updated to `sequencemkts.com`
- ⏳ Waiting for DNS configuration
- ⏳ Waiting for DNS propagation
- ⏳ Waiting for HTTPS certificate provisioning

## Support

If you encounter issues:
1. Verify DNS records are correct using `dig sequencemkts.com` or `nslookup sequencemkts.com`
2. Check GitHub Pages settings for any error messages
3. Review GitHub Pages documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

