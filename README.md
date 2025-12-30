# Building Web Svelte

A modern, professional website for a construction/building company built with SvelteKit.

## Tech Stack

- **SvelteKit** - Full-stack framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn-style UI** - Component library patterns
- **@motionone/svelte** - Animations
- **@superforms/sveltekit** - Form handling
- **heroicons-svelte** - Icons
- **svelte-meta-tags** - SEO meta tags
- **inlang/paraglide-js** - Internationalization (ready for setup)
- **ESLint + Prettier** - Code quality
- **dotenv** - Environment variables
- **Netlify** - Deployment

## Getting Started

1. Install dependencies:
```bash
yarn install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
yarn dev
```

4. Build for production:
```bash
yarn build
```

5. Preview production build:
```bash
yarn preview
```

## Project Structure

```
src/
├── lib/
│   └── components/     # Reusable components
├── routes/             # SvelteKit routes
│   ├── +layout.svelte  # Root layout
│   ├── +page.svelte    # Home page
│   └── contact/        # Contact page
└── app.css             # Global styles
```

## Features

- ✅ Responsive design
- ✅ Dark mode support
- ✅ Smooth animations with Motion One
- ✅ Form validation with Superforms
- ✅ SEO optimized
- ✅ TypeScript support
- ✅ ESLint + Prettier configured
- ✅ Netlify ready

## Deployment

This project is configured for Netlify deployment. Simply connect your repository to Netlify and it will automatically build and deploy.

## License

MIT

