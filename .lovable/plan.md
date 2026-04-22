
# Bhagyashri Khobragade — Digital Visiting Card

A **bold & artsy** 4-page digital business card site for Bhagyashri Khobragade, Graphic Designer. Vibrant gradients, oversized typography, playful shapes, and creative motion to reflect a designer's personality.

## Design language
- **Palette**: hot magenta, electric orange, deep violet, cream — high-contrast, expressive
- **Typography**: oversized display serif for headlines + clean sans for body
- **Motion**: floating blob shapes, marquee text, hover tilts, smooth page transitions
- **Vibe**: feels like a designer's portfolio, not a generic site — every page has a hero moment

## Pages

### 1. Home — `/` (the digital card)
- Massive name "Bhagyashri Khobragade" with animated gradient
- Tagline: "Graphic Designer" with rotating descriptor words (Visual Storyteller / Brand Designer / Art Wired)
- Floating Instagram **QR code** card (tap/scan → opens @the_art_wired)
- Quick-action buttons: View Work, Get in Touch, Follow on Instagram
- Decorative animated shapes (blobs, squiggles, stars)
- Marquee strip with skills/keywords

### 2. About — `/about`
- Editorial-style intro with portrait placeholder + bold pull-quote
- Short bio about her journey as a graphic designer
- Skills grid (Branding, Illustration, Typography, Social Media, Print, Digital)
- Design philosophy section
- Fun "currently obsessed with" list

### 3. Portfolio — `/portfolio`
- Creative grid of project cards (placeholders you can swap with real work)
- Categories filter (Branding, Illustration, Social Media, Print)
- Hover effects revealing project titles
- Each card has an artistic frame/shape variation

### 4. Contact — `/contact`
- Big "Let's create together" headline
- **Contact form** (name, email, subject, message) with validation + success toast
- Instagram **QR code** displayed prominently next to the form
- Direct Instagram link button (@the_art_wired)
- Animated decorative elements

## Shared UI
- Sticky creative navbar with logo monogram "BK" and active-link indicator
- Footer with Instagram link, QR mini-version, and copyright
- Each route gets its own SEO meta tags (title, description, og tags)
- Fully responsive (mobile-first)

## Tech notes
- QR code generated client-side pointing to `https://instagram.com/the_art_wired`
- Contact form submissions handled with toast feedback (no backend yet — can wire to email later if needed)
- Smooth animations via Tailwind + CSS transitions

