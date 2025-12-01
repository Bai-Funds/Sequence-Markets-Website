# Sequence Markets Website

Public landing site for Sequence Markets.

**Live:** https://sequencemkts.com

## About

Sequence Markets is the Execution OS for Digital Assets. We provide venue-neutral smart order routing for crypto and tokenised assets.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Build:** Vite
- **Hosting:** GitHub Pages

## Project Structure

```
├── .github/           # GitHub Actions workflows
├── docs/              # Documentation
│   ├── DEVELOPMENT_LOG.md
│   └── DNS_SETUP.md
├── public/            # Static assets
│   ├── assets/        # Images, logos, media
│   ├── favicon.ico
│   └── robots.txt
├── src/               # Source code
│   ├── components/    # React components
│   │   ├── ui/        # shadcn/ui components
│   │   └── ...        # Custom components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities
│   ├── pages/         # Page components
│   └── index.css      # Global styles
├── index.html         # Entry point
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind configuration
└── package.json       # Dependencies
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Site is automatically deployed to GitHub Pages via GitHub Actions on push to `main` branch.

**Important:** Always ensure `vite.config.ts` uses `target: 'es2020'` to avoid MIME type issues on GitHub Pages.

## Contact

contact@sequencemkts.com

---

*Last updated: 2025-12-01*
