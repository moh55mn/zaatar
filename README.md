# Zaatar Restaurant Website

A modern, responsive Next.js website for Zaatar, a Middle Eastern restaurant featuring authentic cuisine and warm hospitality.

## Features

- **Modern Design**: Clean, responsive layout optimized for all devices
- **Multiple Pages**: Home, Menu, About, and Contact pages
- **Restaurant Theme**: Warm amber color scheme with Middle Eastern aesthetics
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Next.js 16**: Latest Next.js with App Router for optimal performance

## Pages

- **Home**: Hero section with call-to-action buttons, about preview, and features
- **Menu**: Comprehensive menu organized by categories (Appetizers, Main Courses, Specialties, Desserts)
- **About**: Restaurant story, philosophy, team, and values
- **Contact**: Contact information with location, phone, email, hours, and contact form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or your preferred package manager

### Installation

Dependencies are already installed. The project is ready to run.

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Build

Create a production build:

```bash
npm run build
```

### Run Production

Start the production server:

```bash
npm start
```

## Project Structure

```
zaatar/
├── src/
│   └── app/
│       ├── about/
│       │   └── page.tsx       # About page
│       ├── contact/
│       │   └── page.tsx       # Contact page
│       ├── menu/
│       │   └── page.tsx       # Menu page
│       ├── layout.tsx         # Root layout with navigation & footer
│       ├── page.tsx           # Home page
│       └── globals.css        # Global styles
├── public/                    # Static assets
├── .vscode/
│   └── tasks.json            # VS Code tasks
└── package.json              # Dependencies and scripts
```

## Technologies Used

- **Next.js 16**: React framework for production
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting

## Customization

### Colors

The website uses an amber/orange color scheme. To change colors, update the Tailwind classes in the components:
- Primary: `amber-600`, `amber-700`, `amber-800`, `amber-900`
- Backgrounds: `amber-50`, `orange-50`, `orange-100`

### Content

Update restaurant information:
- Menu items: Edit `src/app/menu/page.tsx`
- About content: Edit `src/app/about/page.tsx`
- Contact details: Edit `src/app/contact/page.tsx`

### Navigation

Navigation is defined in `src/app/layout.tsx` and appears on all pages.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Notes

- Contact form is a static UI mockup. To make it functional, you'll need to add form handling (e.g., with API routes, email services, etc.)
- Images are placeholders using emojis. Replace with actual restaurant photos for production use.
- All content is customizable to match your restaurant's branding and information.

## License

This project is created for Zaatar Restaurant.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
