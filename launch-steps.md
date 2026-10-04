# Launch steps: allforyouempowerment.org on GitHub Pages (free)

Nothing in DNS has been changed yet. Do these in order.

**Site now:** https://amcprofessionalscs-alt.github.io (GitHub Pages, repo `amcprofessionalscs-alt/amcprofessionalscs-alt.github.io`, branch `main`, root).
**Email:** runs on Titan. Don't touch the MX, SPF, DKIM or DMARC records.

## 1. Disconnect the domain from the WordPress.com site
WordPress.com is redirecting allforyouempowerment.org to `amcprofessionals1.wordpress.com`.
1. WordPress.com > **Upgrades > Domains** (https://wordpress.com/domains/manage) > `allforyouempowerment.org`.
2. If it's the **primary site address** of `amcprofessionals1`, make `amcprofessionals1.wordpress.com` primary first.
3. Detach/disconnect the domain from that site ("Domain connected to: amcprofessionals1 > Disconnect" or "Move to another site / Use as a standalone domain"). Keep the domain registration, Professional Email (Titan) and WordPress.com name servers.
4. If **Domain forwarding** is turned on for the root or `www`, turn it off.

## 2. DNS records in WordPress.com (Domains > allforyouempowerment.org > DNS records)
**Add:**
| Type | Name | Value |
|---|---|---|
| A | @ (root) | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA (optional) | @ | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | www | amcprofessionalscs-alt.github.io |

**Remove/replace:** the WordPress default root A records `192.0.78.24` and `192.0.78.25` (adding your own A records normally replaces them; if they still show, delete them), and the existing `www` CNAME -> `allforyouempowerment.org` (replace it with the one above).

**Leave exactly as they are:**
- MX 10 `mx1.titan.email`, MX 20 `mx2.titan.email`
- TXT @ `v=spf1 include:spf.titan.email ~all`
- TXT `titan1._domainkey` (DKIM)
- TXT `_dmarc` `v=DMARC1;p=none;...`
- Name servers `ns1/ns2/ns3.wordpress.com`

## 3. Turn on the custom domain in GitHub (right after step 2)
Add a file named `CNAME` containing `allforyouempowerment.org` to the repo root (or Settings > Pages > Custom domain). Wait for the DNS check to go green, then tick **Enforce HTTPS** (certificate can take up to an hour or so).
Don't do this before step 2: the GitHub test URL immediately redirects to the custom domain, which would still show WordPress.
Optional but recommended: verify the domain in GitHub (Profile > Settings > Pages > Add a domain) with the TXT record GitHub shows, so nobody else can claim it.

## 4. Check
- https://allforyouempowerment.org and https://www.allforyouempowerment.org load the new site with a lock.
- Send a test email to the @allforyouempowerment.org mailbox to confirm email still works.

**Rollback:** delete the 4 GitHub A records (and AAAA) and set `www` back to CNAME `allforyouempowerment.org`; WordPress.com restores its defaults. Reconnect the domain to the WordPress site if wanted.

## Later: message form
GitHub Pages is static only. When you want the form, use a free host with functions that allows business use (Netlify free or Cloudflare Pages/Workers free) for `api/inquiry.js`, plus Supabase (`supabase/inquiries.sql`). Until then the site uses Call + Book buttons only.
