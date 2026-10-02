# Dr. Maya Reynolds, PsyD — Therapist Website

A Next.js + Tailwind CSS homepage for a (fictional) Santa Monica psychologist, built for the Grow My Therapy internship assignment.


| Route       | What it is                                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`         | The redesign for Dr. Maya Reynolds, including the new **Our Office** section and an FAQ.                                                       |
| `/original` | A faithful clone of the [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home) homepage, used as the layout reference. |


## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (both routes are statically prerendered)
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` in production if the site is not served from Vercel's default URL; it is used for canonical URLs, Open Graph tags, and structured data.

## How it is built

The clone and the redesign render through the **same template** (`src/components/home-page.tsx`). Only the content object differs, so the redesign keeps the original layout, grid, and spacing exactly while changing copy, imagery, and theme.

```
src/
  app/
    page.tsx            Maya's page: metadata + JSON-LD (MedicalBusiness with a Person founder, FAQPage)
    original/page.tsx   The clone
    globals.css         Theme tokens, type scale, fluid grid
  components/
    home-page.tsx       Section order for the template
    sections/           One component per section (hero, intro, ..., office, faq, booking, footer)
    ui/                 Fluid grid, buttons, cover image, rich text
  content/
    types.ts            Typed content model shared by both sites
    original.ts         Clone copy and images
    maya.ts             Redesign copy and images
```

- **Layout:** sections are positioned on the same fluid grid as the source site (`FluidGrid` / `Block` with separate mobile and desktop placements), so every breakpoint matches the original's structure.
- **Themes:** each site sets semantic color tokens (`--canvas`, `--ink`, `--accent`, ...) on a `data-theme` wrapper. Components only use those tokens, never raw hex values.
- **Rich text:** headings support `*word`* for the handwritten script accent and `_phrase_` for serif italics.
- **Optional sections:** `statement`, `office`, and `faq` render only when the content provides them. The clone keeps the original statement section; Maya's page leaves it out and adds Office and FAQ instead.

## Redesign decisions

- **Her introduction comes first.** The hero reads like a personal introduction, in the order most therapist sites use: her role and location, a greeting ("Hi, I'm Dr. Maya Reynolds. I'm so glad you're here."), who she helps and how, then an invitation to book, all beside her portrait. The paragraph carries the search terms (anxiety, trauma, Santa Monica, telehealth across California), and the page title and meta description target them directly.
- **Palette ("Coastal Sage"):** sage and warm sand with a terracotta accent, chosen to feel calm and coastal rather than clinical. All text colors meet WCAG AA contrast (the accent is 4.96:1 on the page background).
- **Calls to action:** the booking links (hero, How I work, Office, final booking section) are filled terracotta rectangular buttons that deepen to a darker clay (`--accent-strong`) on hover, so the next step is always obvious. Secondary links keep the template's underline style. Content opts in with `variant: "button"` on a link.
- **Typography:** Mulish for body text, Source Serif 4 for headings, and WindSong for the script accents, mirroring the original's sans / serif / script pairing.
- **Copy:** every claim comes from the provided profile (specialties, modalities, office description, telehealth across California). It is written in her first-person voice and targets local search terms (Santa Monica, anxiety, panic, trauma, EMDR, burnout).
- **New "Our Office" section:** both provided office photos, the address with a map link, in-person versus telehealth options, and a call to action. It sits after the therapy approach section, where a visitor naturally asks "where would we meet?"
- **FAQ:** native `<details>` / `<summary>` disclosures (keyboard and screen-reader friendly with no JavaScript), also published as `FAQPage` structured data.
- **Imagery:** every non-office photo was hand-picked from Unsplash for warm, natural light and the sage/sand palette. Decorative images use empty `alt` text; meaningful ones are described.
- **Photo grade:** each theme can set `--photo-filter`. The clone uses a soft, airy grade (lifted shadows, muted color), and its banner and booking-section photo opt out with `ungraded: true`. Maya's page shows photos in their natural colors (`none`).

Images are served as AVIF/WebP through `next/image` with per-slot `sizes`. The full-width banner is cropped to its display shape and compressed, since it always sits under a dark overlay.

## Placeholders

The profile does not include contact details, so the email (`hello@drmayareynolds.com`) and phone number (`(310) 555-0142`, a reserved 555 number) are placeholders. Both live in one place, the `contact` object at the top of `src/content/maya.ts`. The Privacy Policy and Terms links point to `#`.

## Photo credits

Office photos and the headshot were provided with the assignment. All other photos are from [Unsplash](https://unsplash.com) under the Unsplash License:

- Hero detail: [green leafed plant](https://unsplash.com/photos/closeup-of-green-leafed-plant-Azii9_cmPtA)
- Intro: [beach at sunset](https://unsplash.com/photos/people-walking-on-beach-during-sunset-Ti5BtG1NSpQ)
- Anxiety & Panic: [woman sitting on a ledge](https://unsplash.com/photos/a-woman-sitting-on-a-ledge-looking-up-at-the-sky-5jR4rAMs5tk)
- Trauma & EMDR: [person sitting in front of trees](https://unsplash.com/photos/person-sitting-in-front-of-trees-VTWMs1q1ic0)
- Burnout & Perfectionism: [person using a laptop](https://unsplash.com/photos/person-using-laptop-computer-Hcfwew744z4)
- Banner: [palm shadow on sand](https://unsplash.com/photos/a-shadow-of-a-palm-tree-on-a-sandy-beach--GNps_yvZ8c)
- How I work: [woman with a teacup by a window](https://unsplash.com/photos/woman-holding-teacup-while-standing-near-window-inside-room-during-daytime-3LbpZo8MG8A)
- Booking: [olive branch](https://unsplash.com/photos/a-branch-of-an-olive-tree-on-a-white-table-IVCI2rmcJE8) and [beach boardwalk](https://unsplash.com/photos/a-person-walking-down-a-wooden-walkway-on-a-beach-ji7iNLl1DzM)

