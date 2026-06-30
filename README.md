# My Restaurant — A Classic Steakhouse

![App Preview](https://imgix.cosmicjs.com/4e459360-7434-11f1-82ec-1f886d9e6564-autopilot-photo-1500648767791-00dcc994a43e-1782790342309.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A timeless steakhouse website channeling the elegance of the Rat Pack era — think Frank Sinatra, dim mahogany lighting, brass accents, and martinis. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com/docs).

## Features

- 🥩 **Menu by Category** — Browse signature cuts and dishes grouped into elegant categories
- 📍 **Locations & Hours** — Find addresses, phone numbers, hours, and reservation info
- ⭐ **Guest Reviews** — Star-rated testimonials from satisfied patrons
- 🍸 **Rat Pack Aesthetic** — Classic, sophisticated design with gold accents and serif typography
- 📱 **Fully Responsive** — Beautiful on every device
- ⚡ **Server Components** — Fast, secure server-side data fetching from Cosmic

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6a433835aa6380ed35e1cd3c&clone_repository=6a43398eaa6380ed35e1cd7b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a restaurant website with menu items (including images, pricing, and dietary info), menu categories, locations, and customer reviews.
>
> User instructions: A steak restaurant site with menu items grouped by category, hours, locations, and reservation info
>
> The user is rebuilding an existing website and provided these design notes: Style classic steak house, think Frank Sinatra and rat pack vibes.. Factor these preferences into the content structure."

### Code Generation Prompt

> Build a Next.js application for an online business called "My Restaurant". A steak restaurant site with menu items grouped by category, hours, locations, and reservation info. Style classic steak house, think Frank Sinatra and rat pack vibes.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with the restaurant bucket

### Installation

```bash
bun install
bun run dev
```

Set these environment variables:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch menu items with their category (depth 1 resolves the relationship)
const { objects: items } = await cosmic.objects
  .find({ type: 'menu-items' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch reviews for a specific location by id
const { objects: reviews } = await cosmic.objects
  .find({ type: 'reviews', 'metadata.location': locationId })
  .depth(1)
```

## Cosmic CMS Integration

This app reads four object types from your bucket:

- **menu-categories** — name, description, section image, display order
- **menu-items** — name, description, price, image, category (relationship), dietary info, chef's signature flag
- **locations** — name, atmosphere, address, phone, hours, reservation link/info, photo
- **reviews** — reviewer name, quote, star rating, location (relationship)

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Connect your repo, add the env vars, deploy.
- **Netlify** — Set the same env vars in the dashboard.

<!-- README_END -->