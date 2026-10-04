# Photo and font sources

All photos: **Pexels**, under the Pexels License (free for commercial use, no attribution required; don't sell unaltered copies or suggest the people pictured endorse you). Cropped and lightly warm-graded for this site. No clinic, scrubs or stethoscope images. Stand-ins for the home and classroom until real photos of empty rooms are ready (no residents, ever).

| File | Pexels page | What it shows |
|---|---|---|
| assets/img/home-hero.jpg | https://www.pexels.com/photo/elderly-woman-learning-arts-and-crafts-39811571/ | Caregiver and older woman doing a craft at a table (same as Career Track v2 hero) |
| assets/img/afh-hero.jpg | https://www.pexels.com/photo/young-man-sitting-by-elderly-woman-in-bed-8527724/ | Young man holding an older woman's hands in a bedroom (Career Track v2 feed hero) |
| assets/img/placement.jpg | https://www.pexels.com/photo/woman-in-yellow-long-sleeve-shirt-holding-a-bottle-of-juice-7345443/ | Caregiver handing a drink to an older woman at home (Career Track v2 step 3) |
| assets/img/afh-dining.jpg | https://www.pexels.com/photo/modern-dining-room-11125419/ | Bright family-home kitchen and dining table, no people |
| assets/img/afh-kitchen.jpg | https://www.pexels.com/photo/cozy-sunlit-dining-room-with-wooden-furniture-29148451/ | Sunlit lived-in dining room, no people |
| assets/img/mission.jpg | https://www.pexels.com/photo/creative-workshop-with-engaged-audience-33714907/ | Adults listening at a community workshop |

On the Vercel preview, `/assets/img/*.jpg` is served straight from the Pexels CDN (see `rewrites` in `vercel.json`). On GitHub Pages, those same Pexels CDN crops are stored as real files in `assets/img/` (downloaded by `.github/workflows/fetch-assets.yml`).

Fonts: **DM Sans** and **Lora** from Google Fonts (SIL Open Font License), the same pair as Ric's Career Track set. Colors: deep teal `#174E4A` / `#103B38`, gold `#E3B04B`, cream `#FAF5EC`.

## Tameka's photos (real, uploaded by Demonte to Google Drive, Sun Oct 4, 2026, about 9:04-9:10 AM CT)

Originals are in `assets/img/tameka/drive-originals/` (4000-6000 px). **Don't deploy or commit them** (listed in `.vercelignore` / `.gitignore`). Every site file is a downscale of the original, so nothing is upscaled. Tameka is the only subject in all of them.

| Site file (WebP + .jpg copy) | Size | Drive source (file ID) | Used on |
|---|---|---|---|
| tameka-founder.webp | 400x500, 4:5 | IMG_4248 (1kFi8ZwNUNf7FVbcZxNXFPInaIqFdwUdb), colorful dress, hand on chin | Home "Meet Tameka" (arch) |
| tameka-instructor-hero.webp | 420x525, 4:5 | IMG_4249 (1H_zDOU3EmvhC9Macu7zDCGdREXJH_HIw), black blazer, speaking | Training hero (arch) |
| tameka-instructor-desk.webp | 540x360, 3:2 | IMG_4250 (1lYPX9SWawOtnHcUYutZQsgRDKMyot0_h), black blazer, smiling with phone | Training "Your instructor" |
| tameka-host.webp | 540x360, 3:2 | IMG_4200 (1olk4idedwTGUCVgGJ1gEktS_7-DDKtlL), standing, colorful dress | Homes "Your host" |
| tameka-contact.webp | 540x360, 3:2 | IMG_4251 (1uIn8_JoH44lEnLDutyn0hrb57eaDmOcy), at desk with phone, calendar cropped out | Contact |

Not used: IMG_4247 (serious expression), IMG_4252 (near-duplicate of 4251), plus duplicate uploads of IMG_4200 and IMG_4252.
Older files (`tameka-portrait.*`, `tameka-landscape.*`, `tameka-bottom-full.jpg`, from `tameka-original-stacked.jpg`) are no longer used on the site.

On Vercel and GitHub Pages, each WebP is a real file (byte-identical, verified by SHA-1), not hotlinked.
