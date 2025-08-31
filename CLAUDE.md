# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server

## Architecture

This is a Pokemon Pokedex application built with Waku (React Server Components framework), React 19, and TypeScript.

### Core Structure

**Framework**: Waku with React Server Components (RSC) support
- Pages are defined in `src/pages/` with async server components
- Static rendering configured via `getConfig` exports
- Root layout in `src/pages/_layout.tsx` handles global styling and meta tags

**Styling**: Tailwind CSS v4 with PostCSS
- Global styles in `src/styles.css`
- Tailwind configuration through PostCSS

**Pokemon Data Flow**:
- API service layer in `src/services/pokemon.ts` handles PokeAPI integration
- Type definitions in `src/types/pokemon.ts` define Pokemon data structures
- Client components handle interactive features (search, loading states)
- Server components handle initial data fetching and static rendering

### Page Architecture

**URL Structure**:
- `/` - Complete RSC implementation for Pokemon list
- `/search` - Client-side search functionality

**RSC vs Client Component Strategy**:
- **Complete RSC** (`/`): All Pokemon data fetched server-side, fully static rendering
  - `PokemonListServer` - Server component for list display
  - `PokemonCardServer` - Individual Pokemon cards rendered server-side
  - All 151 Pokemon details pre-fetched during build/render
  - Optimal for SEO and initial page load performance

- **Client Interactive** (`/search`): Search functionality with dynamic filtering
  - `PokemonSearchWrapper` - Client component with search state
  - `PokemonCardClient` - Individual Pokemon cards with client-side detail fetching
  - `hideInitialResults` prop to control initial display behavior

**Component Patterns**:
- Dual Pokemon card implementations: `PokemonCardServer` vs `PokemonCardClient`
- Server components handle bulk data fetching for static content
- Client components handle interactive features and dynamic content
- Navigation between static list and dynamic search views

**Static Assets**: Served from `public/` directory, favicon configured in layout