# Pokemon Pokedex - Waku Sample App

A simple Pokemon Pokedex built with Waku (React Server Components), demonstrating RSC patterns and external API integration.

**Note: This project was built as a vibe coding experiment** - a quick exploration of Waku's capabilities with minimal planning and iterative development.

## Features

- Browse Pokemon from the first generation (151 Pokemon)
- Real-time search functionality
- Individual Pokemon cards with detailed information (sprites, types, height, weight)
- Responsive design with Tailwind CSS
- Server-side rendering with React Server Components

## Tech Stack

- **Framework**: [Waku](https://waku.gg/) (React Server Components)
- **React**: 19.1.1
- **Styling**: Tailwind CSS v4
- **TypeScript**: Full type safety
- **API**: [PokeAPI](https://pokeapi.co/)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
src/
├── components/          # React components
│   ├── pokemon-card.tsx    # Individual Pokemon display
│   ├── pokemon-list.tsx    # Main list with search
│   └── pokemon-search.tsx  # Search input component
├── pages/              # Waku pages (RSC)
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Home page
├── services/           # API integration
│   └── pokemon.ts         # PokeAPI service functions
├── types/              # TypeScript definitions
│   └── pokemon.ts         # Pokemon data types
└── styles.css          # Global Tailwind styles
```

## Architecture Notes

This app demonstrates key Waku/RSC patterns:
- Server components for initial rendering and SEO
- Client components for interactive features
- Hybrid data fetching (server for list, client for details)
- Static site generation capabilities