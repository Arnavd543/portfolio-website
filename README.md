# Arnav Dangre - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Smooth scroll animations with Framer Motion
- Dark mode support
- Sections for Education, Experience, Projects, Skills, and Contact
- Optimized for performance and SEO
- Easy to deploy on Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel

The easiest way to deploy this portfolio is using Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your site will be live in minutes!

Alternatively, you can use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Other Deployment Options

This project can also be deployed to:
- **Netlify**: Connect your Git repository and deploy
- **GitHub Pages**: Build the static site and deploy to gh-pages
- **Any static hosting**: Run `npm run build` to generate the static site in the `out` folder

## Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out` directory that can be deployed to any static hosting service.

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Customization

To customize the content:

1. Update personal information in `components/Hero.tsx`
2. Modify education details in `components/Education.tsx`
3. Edit experience in `components/Experience.tsx`
4. Update projects in `components/Projects.tsx`
5. Customize skills in `components/Skills.tsx`
6. Change contact information in `components/Contact.tsx`

## License

This project is open source and available under the MIT License.
