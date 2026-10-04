# All For You Empowerment: website

Plain static HTML/CSS site (no build step). Pages: `/`, `/homes`, `/training`, `/contact` (+ `404.html`).

- **Production host: GitHub Pages (free)**, repo `amcprofessionalscs-alt/amcprofessionalscs-alt.github.io`, branch `main`, root folder. Test URL: https://amcprofessionalscs-alt.github.io
- **Preview (kept for review only, not for the real domain):** https://allforyou-empowerment-preview.vercel.app. It sends `X-Robots-Tag: noindex` so Google ignores it. Vercel's free Hobby plan is non-commercial, so the real domain goes on GitHub Pages instead.
- Going live on `allforyouempowerment.org`: `launch-steps.md`
- Photo sources: `SOURCES.md`. Don't publish `tameka-original-stacked.jpg` or `assets/img/tameka/drive-originals/`.
- Edit copy: `_src/gen.py` (on the build box), then `python3 _src/gen.py`, then commit the changed `.html` files.
- Images: the text-only GitHub connector can't push binary files, so `.github/workflows/fetch-assets.yml` downloads the images listed in `_assets/manifest.txt` (Tameka's photos from the Vercel preview, SHA-1 checked; stock photos from Pexels) and commits them into `assets/img/`. To change an image, update the file on the preview and its SHA-1 in the manifest, or just upload the image in the GitHub web UI.

## Contact
Call or book only: phone (414) 627-9049 (calls), Calendly https://calendly.com/tameka-allforyouempowerment/30min, email tamekasone@yahoo.com. The message form is off for now. `api/inquiry.js`, `assets/js/forms.js` and `supabase/inquiries.sql` stay in the repo for later (they need a serverless host such as Vercel/Netlify/Cloudflare; GitHub Pages is static only).

## Structure (keeps the 501(c)(3) separate from the businesses)
- **Home**: nonprofit mission, Tameka's story ("since 2014"), two cards labeled "Operated by ..." linking to the business pages.
- **/homes**: "Operated by All For You Adult Family Homes." 4 beds. Payers: My Choice Wisconsin, Anthem, "call to ask about other options." No street address. No prices.
- **/training**: "Operated by All For You CBRF Training." ETPL link, WIOA line, "Call for the next class date." No price, no AMC, no $350 offer.
- **/contact**: phone, email, Calendly, training address (10721 W Capitol Dr, Wauwatosa, WI 53222).
- **Footer**: "All For You Empowerment Foundation is a 501(c)(3) nonprofit organization." and the "separate businesses, not tax-deductible" disclaimer. No EIN.

## Decisions (Oct 4, 2026)
All [CONFIRM] tags are cleared. Unconfirmed claims were removed (license #, openings, neighborhood, care details, FAQ answers, OJT hours, WIOA non-qualifier text, class schedule, suite number, Tameka's quote, RECP/summer-youth status). Add them back only once Tameka confirms them.
