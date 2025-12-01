# Troubleshooting Guide - sequencemkts.com Not Loading

## Issue: DNS_PROBE_FINISHED_NXDOMAIN or site not accessible

## Checklist to Verify

### 1. GitHub Pages Deployment Status
- [ ] Go to: https://github.com/Bai-Funds/Sequence-Markets-Website/actions
- [ ] Check if the latest deployment workflow completed successfully
- [ ] Look for any errors in the build or deploy steps

### 2. GitHub Pages URL
For organization repositories, the GitHub Pages URL format is:
- Organization: `Bai-Funds`
- Repository: `Sequence-Markets-Website`
- **Possible GitHub Pages URLs:**
  - `Bai-Funds.github.io` (if organization page)
  - `Bai-Funds.github.io/Sequence-Markets-Website` (if project page)
  - Check in GitHub Settings → Pages → "Your site is live at..."

### 3. Cloudflare DNS Records
**Current Configuration:**
- CNAME: `sequencemkts.com` → `bai-funds.github.io` (Proxied)
- CNAME: `www` → `bai-funds.github.io` (Proxied)

**Potential Issues:**
- [ ] Case sensitivity: Should it be `Bai-Funds.github.io` (capital B and F)?
- [ ] Wrong target: Should it be the project-specific URL?
- [ ] Verify both records show 🟠 Proxied (orange cloud)

### 4. Cloudflare SSL/TLS Settings
- [ ] Go to Cloudflare → SSL/TLS
- [ ] Encryption mode should be: **Full** or **Full (strict)**
- [ ] NOT "Flexible" (this won't work with GitHub Pages)

### 5. Test Direct GitHub Pages URL
Try accessing the site directly:
- `https://Bai-Funds.github.io` (if organization page)
- `https://Bai-Funds.github.io/Sequence-Markets-Website` (if project page)
- `https://bai-funds.github.io` (lowercase variant)

### 6. DNS Propagation Check
- [ ] Visit: https://www.whatsmydns.net/#CNAME/sequencemkts.com
- [ ] Check if DNS is resolving globally
- [ ] Should show Cloudflare IPs or the CNAME target

### 7. Cloudflare Status
- [ ] Ensure domain is not paused in Cloudflare
- [ ] Check for any firewall rules blocking traffic
- [ ] Verify no page rules are interfering

## Most Likely Issues

### Issue #1: Wrong GitHub Pages URL in Cloudflare
**Solution:** Update Cloudflare CNAME target to match the actual GitHub Pages URL
- Check GitHub Settings → Pages to see the exact URL
- Update Cloudflare DNS records accordingly

### Issue #2: Case Sensitivity
**Solution:** Try `Bai-Funds.github.io` (capital letters) instead of `bai-funds.github.io`

### Issue #3: SSL/TLS Mode Wrong
**Solution:** Set Cloudflare SSL/TLS to **Full** or **Full (strict)**, NOT "Flexible"

### Issue #4: Project Page vs Organization Page
**Solution:** If it's a project page, the URL might need the repository path:
- `Bai-Funds.github.io/Sequence-Markets-Website`

## Quick Fix Steps

1. **Check GitHub Pages Settings:**
   - Go to: https://github.com/Bai-Funds/Sequence-Markets-Website/settings/pages
   - Note the exact URL shown under "Your site is live at..."

2. **Update Cloudflare DNS:**
   - Go to Cloudflare → DNS
   - Edit the CNAME record for `sequencemkts.com`
   - Update target to match the exact GitHub Pages URL (case-sensitive)
   - Ensure proxy is enabled (🟠 orange cloud)

3. **Verify SSL/TLS:**
   - Cloudflare → SSL/TLS → Set to **Full** or **Full (strict)**

4. **Wait 2-5 minutes** for DNS to update

5. **Test:**
   - Visit `https://sequencemkts.com`
   - Clear browser cache if needed (Ctrl+Shift+Delete)

