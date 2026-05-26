"use client";

import { useEffect, useMemo, useState } from "react";
import { Country } from "@/app/types/country";
import CountryCard from "@/components/CountryCard";
import CountryFilters from "@/components/CountryFilters";
import { RegionFilter, SortOrder } from "@/components/country-filter-types";
import { filterAndSortCountries } from "@/components/country-filter-utils";
import { Alert, Grid, Stack, TextField, Typography } from "@mui/material";

type Props = { countries: Country[] };

export default function CountrySearch({ countries }: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [region, setRegion] = useState<RegionFilter>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("name-asc");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  if (!countries || countries.length === 0) {
    return <Typography color="text.secondary">No countries found</Typography>;
  }

  const filtered = useMemo(
    () =>
      filterAndSortCountries({
        countries,
        region,
        sortOrder,
        query: debouncedSearch,
      }),
    [countries, debouncedSearch, region, sortOrder]
  );

  return (
    <Stack spacing={3}>
      <TextField
        fullWidth
        placeholder="Search country..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <CountryFilters
        region={region}
        sortOrder={sortOrder}
        onRegionChange={setRegion}
        onSortChange={setSortOrder}
        onClear={() => {
          setSearchInput("");
          setDebouncedSearch("");
          setRegion("All");
          setSortOrder("name-asc");
        }}
      />
      <Typography color="text.secondary">
        Showing {filtered.length} of {countries.length} countries
      </Typography>

      {filtered.length === 0 ? (
        <Alert severity="info">No results found for "{debouncedSearch.trim()}".</Alert>
      ) : (
        <Grid container spacing={3}>
          {filtered.map((country) => (
            <Grid key={country.cca3} size={{ xs: 12, sm: 6, lg: 4 }}>
              <CountryCard country={country} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}
