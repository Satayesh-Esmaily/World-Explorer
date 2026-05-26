# World Explorer

World Explorer is a Next.js project that allows users to explore countries around the world using real-time API data from REST Countries.

## Features

- App Router
- File-based routing
- Shared layout (Navbar + Footer)
- Dynamic routes (`/countries/[code]`)
- Server components
- Client components
- Real API data fetching with `async/await`
- Static rendering and caching (`force-cache`)
- Dynamic rendering (`no-store`)
- Search functionality
- Region filter and sorting
- Load more countries (20 at a time)
- Loading state (`app/countries/loading.tsx`)
- Custom 404 page (`app/not-found.tsx`)


## Pages

- `/` Home page
- `/countries` Countries list page
- `/countries/[code]` Country details page
- `/search` Country search page
- `/about` About page

## API Used

REST Countries API

### All Countries

```bash
https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,population,flags
```

### Single Country

```bash
https://restcountries.com/v3.1/alpha/{code}?fields=cca3,name,capital,region,subregion,population,flags,languages,currencies,timezones,maps
```

Example:

```bash
https://restcountries.com/v3.1/alpha/AFG
```

## Tech Stack

- Next.js (App Router)
- TypeScript
- Material UI (MUI)
- CSS (global styles)

## Project Structure

```txt
app/
  layout.tsx
  page.tsx
  about/
    page.tsx
  countries/
    page.tsx
    loading.tsx
    [code]/
      page.tsx
  search/
    page.tsx
  not-found.tsx

components/
  Navbar.tsx
  Footer.tsx
  CountryCard.tsx
  CountrySearch.tsx
  CountryFilters.tsx
  RegionFilter.tsx
  CountriesExplorer.tsx
  country-filter-types.ts
  country-filter-utils.ts
  PageHeaderCard.tsx
  PrimaryActionButton.tsx

app/types/
  country.ts
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Learning Goals Practiced

This project practices:

- Next.js project structure
- App Router
- File-based routing
- Shared layouts
- Dynamic routes
- Server/client component patterns
- Data fetching and caching strategies
- Responsive UI design
