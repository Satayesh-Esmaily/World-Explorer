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
  <img width="1920" height="1013" alt="image" src="https://github.com/user-attachments/assets/c57ba9fd-af1d-4770-8dbb-3b991e3b5ab3" />

      Countries Page 
  <img width="1920" height="1010" alt="image" src="https://github.com/user-attachments/assets/7feb8b9f-4519-4f33-a293-8c0dd7943141" />

      Country Details Page
  <img width="1584" height="1018" alt="image" src="https://github.com/user-attachments/assets/b0731f84-8dff-4d7d-9786-360d5891ebc2" />

       Search Page
  <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/641ff453-3d2b-4f63-b065-1ab0e33471e8" />

       About Page
  <img width="1920" height="1033" alt="image" src="https://github.com/user-attachments/assets/99bae33b-ba21-4afb-8e12-fdd3b05b00a6" />

       Favorite Drawer
  <img width="440" height="951" alt="image" src="https://github.com/user-attachments/assets/91756e1e-d753-42e7-afaa-5499e04d77ed" />


      
## Mobile View

      Home Page
   <img width="322" height="693" alt="image" src="https://github.com/user-attachments/assets/b2f82c2d-d8ec-4f25-a404-c57daffdc1d2" />

      Countries Page
   <img width="314" height="694" alt="image" src="https://github.com/user-attachments/assets/bebba78c-36cd-4065-8903-a14f765cfc73" />

      Country Details Page
   <img width="319" height="699" alt="image" src="https://github.com/user-attachments/assets/26147aa9-73f2-4b33-9696-c962fb80df9b" />


     

  

