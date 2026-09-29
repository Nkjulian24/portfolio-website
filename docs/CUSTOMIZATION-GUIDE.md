# Elite Data Portfolio — Customization Guide

## Open the website
Open `index.html` directly in your browser, or use VS Code Live Server.

## Change name and texts
Edit `index.html`. Search for comments like `HERO SECTION`, `ABOUT SECTION`, and `CONTACT SECTION`.

## Change projects and case studies
Edit `js/data.js`. Copy one project or case study object and paste another one below it.

## Change brand color
Open `css/style.css` and change:

```css
--brand: #00d9ff;
```

Examples: purple `#7c3aed`, green `#22c55e`, orange `#ff7a18`.

## Change images
Replace SVG files inside `assets/images/` with your own images. Keep the same file names or update the image paths in `js/data.js`.

## Make the contact form send to your email
In `index.html`, find:

```html
action="https://formsubmit.co/yourname@email.com"
```

Replace `yourname@email.com` with your email address. The first form submission may require email verification.

## Project button links
In `js/data.js`, change each `link: "https://example.com"` to the real project URL.
