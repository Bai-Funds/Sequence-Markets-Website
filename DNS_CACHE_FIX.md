# Fix DNS Cache Issue - sequencemkts.com

## Problem
DNS resolves correctly when querying external DNS servers, but your browser/system can't resolve it. This is a local DNS cache issue.

## Solutions (Try in Order)

### Solution 1: Change DNS to Cloudflare (Recommended)
Your system's DNS server might be slow to update. Switch to Cloudflare DNS:

1. **Open Network Settings:**
   - Press `Win + I` → Network & Internet
   - Click "Change adapter options"
   - Right-click your active network connection → Properties
   - Select "Internet Protocol Version 4 (TCP/IPv4)" → Properties

2. **Set DNS Servers:**
   - Select "Use the following DNS server addresses"
   - Preferred: `1.1.1.1`
   - Alternate: `1.0.0.1`
   - Click OK

3. **Flush DNS again:**
   ```powershell
   ipconfig /flushdns
   ```

4. **Test:** Visit `https://sequencemkts.com`

### Solution 2: Use Google DNS
If Cloudflare DNS doesn't work, try Google DNS:
- Preferred: `8.8.8.8`
- Alternate: `8.8.4.4`

### Solution 3: Restart Network Adapter
1. Open Command Prompt as Administrator
2. Run:
   ```powershell
   ipconfig /release
   ipconfig /renew
   ipconfig /flushdns
   ```

### Solution 4: Restart Your Computer
Sometimes a full restart clears all DNS caches.

### Solution 5: Try Different Browser/Device
- Try accessing from your phone (on mobile data, not WiFi)
- Try a different browser
- Try incognito/private mode

## Verify DNS is Working
The domain IS resolving correctly (we verified with nslookup). The issue is your local DNS cache.

## Quick Test
After changing DNS, test with:
```powershell
nslookup sequencemkts.com
```

Should show: `172.64.80.1` (Cloudflare IP)

Then try: `https://sequencemkts.com` in your browser.

