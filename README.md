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
clone repo      https://github.com/Satayesh-Esmaily/World-Explorer.git
cd world-explorer
npm install
npm run dev
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

## Screenshots

      Home Page
  <img width="1920" height="1040" alt="image" src="https://github.com/user-attachments/assets/9b7cf6e7-2681-4410-932d-7275acbaf64d" />

      Countries Page 
  <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/9c7458e7-1c2c-4db4-9ba3-791c0e7cf4dd" />

      Country Details Page
  <img width="1920" height="1029" alt="image" src="https://github.com/user-attachments/assets/5578cbf7-873a-4f0c-a762-4494405f6cd9" />

       Search Page
  <img width="1920" height="1024" alt="image" src="https://github.com/user-attachments/assets/6ec28b6f-80bb-434a-b7b2-6b246e3f66f9" />

       About Page
  <img width="1920" height="1019" alt="image" src="https://github.com/user-attachments/assets/3cd87f17-06ff-4ac5-8857-651c59c9d3f1" />

      

## Mobile View

      Home Page
   <img width="323" height="695" alt="image" src="https://github.com/user-attachments/assets/def32d52-c8c9-47c5-a352-378476009bef" />

      Countries Page
   <img width="327" height="702" alt="image" src="https://github.com/user-attachments/assets/a92d2766-85ba-4dd7-9179-91610e06c4af" />

      Country Details Page
   <img width="322" height="693" alt="image" src="https://github.com/user-attachments/assets/49c1b38d-bcef-499a-96a1-3799ab448e12" />

     

  

