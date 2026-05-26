import { Country } from "@/app/types/country";
import { RegionFilter, SortOrder } from "@/components/country-filter-types";

type Params = {
  countries: Country[];
  region: RegionFilter;
  sortOrder: SortOrder;
  query?: string;
};

export function filterAndSortCountries({
  countries,
  region,
  sortOrder,
  query = "",
}: Params) {
  const normalizedQuery = query.toLowerCase().trim();

  const byName = !normalizedQuery
    ? countries
    : countries.filter((c) => c.name.common.toLowerCase().includes(normalizedQuery));

  const byRegion = byName.filter((c) => {
    if (region === "All") return true;
    return c.region === region;
  });

  return [...byRegion].sort((a, b) => {
    if (sortOrder === "population-desc") return b.population - a.population;
    if (sortOrder === "population-asc") return a.population - b.population;
    return a.name.common.localeCompare(b.name.common);
  });
}
