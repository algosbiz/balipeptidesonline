# Bali Peptides website

A one-page product catalogue for [balipeptides.online](https://balipeptides.online), built with Next.js, TypeScript and Tailwind CSS.

There is no payment, checkout page or login. Visitors can add peptides to a cart and choose quantities, but "Proceed to Checkout" opens WhatsApp with the whole order already written. The team handles the order in the chat.

---

## Run the website on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer) installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. The page reloads by itself every time you save a file.

To check that everything builds before you publish:

```bash
npm run build
```

---

## Where things live

```
app/
  layout.tsx        SEO (title, description, social sharing), fonts
  page.tsx          The order of the sections on the page
  globals.css       Brand colours and shared styles
  icon.png          Browser tab icon
components/         One file per section of the page, plus the cart
data/
  products.ts       The product catalogue
  faq.ts            FAQ questions and answers
  site.ts           Menu links and the catalogue link
lib/
  whatsapp.ts       WhatsApp number and pre-written messages
public/images/      All images
```

`app/page.tsx` is the best place to start. It lists every section from top to bottom:

```tsx
<Hero />
<Benefits />
<Products />
<WhyUs />
<Delivery />
<About />
<FAQ />
<WhatsAppCTA />
```

To move a section, move its line. To hide one, delete its line.

---

## Common changes

### Change product information

Open `data/products.ts`. Each product looks like this:

```ts
{
  id: 1,
  name: "Retatrutide Bali",
  category: "Weight management",
  description: "Popular among individuals focused on body composition and weight management goals.",
  image: "/images/products/retatrutide.webp",
},
```

Edit the text between the quotes and save.

### Add a product

1. Add the image to `public/images/products/` (a square `.webp` or `.jpg`, about 800 × 800 pixels, works best).
2. In `data/products.ts`, copy one product block, paste it at the end of the list, and change:
   - `id` to the next number
   - `name`, `category` and `description`
   - `image` to your new file, e.g. `"/images/products/my-new-peptide.webp"`

The card, the number badge and the WhatsApp message ("Hi Bali Peptides, I'm interested in …") are created automatically.

If you want a product to send a different WhatsApp message, add a `whatsappMessage` line to it:

```ts
whatsappMessage: "Hi Bali Peptides, do you have the NAD+ nasal spray in stock?",
```

### Replace a product image

Product photos live in `public/images/products/`. BPC-157 and TB-500 still use simple vial illustrations until real photos are available. To change a picture, put the new file in that folder and update the product's `image` in `data/products.ts`. Square images look best.

Tip: if you replace a picture but keep the same file name, the old one can stay visible for a while because Next.js caches images. Give the new file a new name (e.g. `bpc-157-v2.webp`) to see it straight away.

### Change the WhatsApp number or messages

Open `lib/whatsapp.ts`.

- `WHATSAPP_NUMBER` is the number the buttons open. Use the international format with no `+`, spaces or dashes (e.g. `6282326300167`).
- `WHATSAPP_DISPLAY_NUMBER` is the version shown to visitors in the footer.
- The pre-written messages are underneath and can be reworded freely.

### How the cart works

- `components/CartProvider.tsx` holds the cart (which products, how many). It is saved in the visitor's browser, so it survives a page refresh.
- `components/AddToCartButton.tsx` is the quantity selector and "Add to cart" button on each product card.
- `components/CartDrawer.tsx` is the panel that slides in from the right.
- The checkout message is written by `getCartMessage` in `lib/whatsapp.ts`. It looks like this:

```
Hi Bali Peptides, I'd like to order:

• 2 × Retatrutide Bali
• 1 × NAD+ Bali

Could you please confirm availability and delivery?
```

New products added to `data/products.ts` get a working "Add to cart" button automatically.

### Change the FAQ

Open `data/faq.ts`. Each item has a `question` and an `answer`. An answer can also have a `link` (a label and a web address).

### Change homepage text

Open the matching file in `components/`:

| Section on the page | File |
| --- | --- |
| Top menu | `Header.tsx` (menu links are in `data/site.ts`) |
| Big headline | `Hero.tsx` |
| Row of benefits under the headline | `Benefits.tsx` |
| Product catalogue heading | `Products.tsx` |
| "A peptide service built for Bali." | `WhyUs.tsx` |
| Delivery areas | `Delivery.tsx` |
| About | `About.tsx` |
| FAQ heading | `FAQ.tsx` |
| Copper "Looking for peptides in Bali?" box | `WhatsAppCTA.tsx` |
| Footer | `Footer.tsx` |
| Round green WhatsApp button | `FloatingWhatsApp.tsx` |
| Cart panel | `CartDrawer.tsx` |

Most text sits directly in the file between the HTML-like tags, so you can edit it like a normal document.

### Change the brand colours

Open `app/globals.css` and edit the values in the `@theme` block at the top:

| Name | Used for |
| --- | --- |
| `--color-primary` | Bali Peptides copper: highlights, copper box, logo tone |
| `--color-primary-dark` | Copper used for small text (darker so it stays readable) |
| `--color-secondary` | Deep ink: headings, buttons, footer |
| `--color-accent` | WhatsApp green |
| `--color-cream` | Soft background of alternating sections |

These colours and the fonts (Fraunces, Inter and Urbanist) come from the original balipeptides.online design.

### Change SEO (Google title, description, sharing image)

Open `app/layout.tsx`. The `title` and `description` near the top control how the site appears in Google and when the link is shared. The sharing image is `public/images/og-image.jpg` (1200 × 630 pixels).

The business details given to search engines (structured data) are in `components/StructuredData.tsx`. The FAQ is added there automatically from `data/faq.ts`.

---

## Publishing

The easiest way to put the site online is [Vercel](https://vercel.com) (made by the Next.js team):

1. Push this folder to a GitHub repository.
2. Import the repository on Vercel and press Deploy.
3. Connect the `balipeptides.online` domain in the Vercel project settings.

Any other host that supports Next.js works too.
