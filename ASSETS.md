# Synapse-CI — Asset Manifest

This file documents all expected static assets for the website.
Place each file at the path listed and rename it exactly as shown.
All assets live inside the `public/assets/` directory.

---

## Team Photos

These are used in the **About Us** section (`/src/components/AboutUs.tsx`).

| File Path                          | Description                              |
|------------------------------------|------------------------------------------|
| `public/assets/team/supervisor.jpg`    | Photo of the project supervisor          |
| `public/assets/team/cosupervisor.jpg`  | Photo of the co-supervisor               |
| `public/assets/team/member1.jpg`       | Photo of Team Leader (Member 1)          |
| `public/assets/team/member2.jpg`       | Photo of Team Member 2                   |
| `public/assets/team/member3.jpg`       | Photo of Team Member 3                   |
| `public/assets/team/member4.jpg`       | Photo of Team Member 4                   |

> **Format:** JPG or PNG, square crop recommended, min 200×200px.
> If an image is missing, a styled initials placeholder is shown automatically.

---

## Presentation Slide Thumbnails

These are preview images shown in the **Presentations** section (`/src/components/Presentations.tsx`).

| File Path                                 | Description                          |
|-------------------------------------------|--------------------------------------|
| `public/assets/slides-proposal-thumb.png` | Thumbnail screenshot of Proposal PPT |
| `public/assets/slides-pp1-thumb.png`      | Thumbnail screenshot of PP1 slides   |
| `public/assets/slides-pp2-thumb.png`      | Thumbnail screenshot of PP2 slides   |
| `public/assets/slides-final-thumb.png`    | Thumbnail screenshot of Final slides |

> **Format:** PNG, recommended size 1280×720px (16:9).

---

## Research Diagrams

Used in the **Domain** section (`/src/components/Domain.tsx`).

| File Path                                      | Description                                           |
|------------------------------------------------|-------------------------------------------------------|
| `public/assets/literature-survey-diagram.png`  | Visual representation of literature survey comparison |
| `public/assets/system-architecture-diagram.png`| End-to-end Synapse-CI architecture diagram            |

> **Format:** PNG with transparent or white background, min 1200px wide.

---

## Logos

| File Path                      | Description                        |
|--------------------------------|------------------------------------|
| `public/assets/sliit-logo.png` | SLIIT official logo (for footer / About section) |
| `public/favicon.ico`           | Site favicon (32×32 or 64×64 ICO) |

---

## OG / Social Preview

| File Path                     | Description                                |
|-------------------------------|--------------------------------------------|
| `public/assets/og-image.png`  | Open Graph image for social sharing (1200×630px) |

> This can be a designed banner combining the Synapse-CI name and a diagram.

---

## How to update links in components

### Slide / Document links
Edit the `viewLink`, `downloadLink`, and `slides` fields in:
- `src/components/Documents.tsx` — DOCUMENTS array
- `src/components/Presentations.tsx` — PRESENTATIONS array

These should be Google Drive view links or direct hosted URLs.

### Team member details
Edit the SUPERVISORS and MEMBERS arrays in:
- `src/components/AboutUs.tsx`

Update `name`, `email`, `studentId`, `role`, `component`, `github`, `linkedin`, and `photo` path.

### Contact email
Search for `synapseci@example.com` across all components and replace with the real team email.
