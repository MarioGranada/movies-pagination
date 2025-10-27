# The Movie Vault

A React-based movie discovery application built with TypeScript, Vite, and TanStack Router. Browse movies, view detailed information, and explore the world of cinema with a responsive, modern interface.

**Author**: MarioGranada

## Features

- 🎬 Browse movies with pagination
- 🔍 Search functionality
- 📱 Responsive design
- 🎨 Modern UI with SCSS styling
- 🚀 Fast development with Vite and HMR
- 📄 Detailed movie information pages
- 🔗 Type-safe routing with TanStack Router

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 20 or higher)
- **npm** (comes with Node.js)
- **TMDB API Access Token** - Get one from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd movies-pagination
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your TMDB access token:

```bash
VITE_ACCESS_TOKEN="your_tmdb_access_token_here"
```

> **Note**: You can use the `.env.example` file as a template. Get your access token from [TMDB API Settings](https://www.themoviedb.org/settings/api).

### 4. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **TanStack Router** - Type-safe routing
- **SCSS** - Enhanced CSS with variables and nesting
- **TMDB API** - Movie data source
- **React Compiler** - Enabled for optimized performance

## Project Structure

```
src/
├── routes/                 # TanStack Router routes
├── shared/
│   ├── components/        # Reusable UI components
│   ├── pagesComponents/   # Page-specific components
│   ├── context/          # React contexts
│   ├── helpers/          # Utility functions
│   └── utils/            # Common utilities
├── styles/               # SCSS stylesheets
└── types.d.ts           # TypeScript type definitions
```

## Environment Variables

The application requires the following environment variables:

| Variable            | Description           | Required |
| ------------------- | --------------------- | -------- |
| `VITE_ACCESS_TOKEN` | TMDB API access token | Yes      |

## API Integration

This project uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to fetch movie data. Make sure to:

1. Create a TMDB account
2. Generate an API access token
3. Add the token to your `.env` file

## Development Notes

### ESLint Configuration

The project uses ESLint with TypeScript support. For production applications, you may want to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
