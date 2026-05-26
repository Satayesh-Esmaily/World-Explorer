"use client";

import { useEffect, useMemo, useState } from "react";
import { Country } from "@/app/types/country";
import CountryCard from "@/components/CountryCard";
import CountryFilters from "@/components/CountryFilters";
import { RegionFilter, SortOrder } from "@/components/country-filter-types";
import { filterAndSortCountries } from "@/components/country-filter-utils";
import useFavorites from "@/components/useFavorites";
import { Alert, FormControlLabel, Grid, Stack, Switch, TextField, Typography } from "@mui/material";

type Props = { countries: Country[] };

export default function CountrySearch({ countries }: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [region, setRegion] = useState<RegionFilter>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("name-asc");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const { favorites } = useFavorites();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  if (!countries || countries.length === 0) {
    return <Typography color="text.secondary">No countries found</Typography>;
  }

  const filtered = useMemo(() => {
    const base = filterAndSortCountries({
      countries,
      region,
      sortOrder,
      query: debouncedSearch,
    });
    if (!favoritesOnly) return base;
    const set = new Set(favorites);
    return base.filter((c) => set.has(c.cca3));
  }, [countries, debouncedSearch, favorites, favoritesOnly, region, sortOrder]);

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
      <FormControlLabel
        control={
          <Switch
            color="secondary"
            checked={favoritesOnly}
            onChange={(e) => setFavoritesOnly(e.target.checked)}
            disabled={favorites.length === 0}
            sx={{
              "& .MuiSwitch-track": { backgroundColor: "rgba(159,179,200,0.35)" },
              "& .MuiSwitch-thumb": { backgroundColor: "#e8f1fb" },
              "&.Mui-checked .MuiSwitch-thumb": { backgroundColor: "#12b76a" },
              "&.Mui-checked + .MuiSwitch-track": { backgroundColor: "rgba(18,183,106,0.45)" },
            }}
          />
        }
        label={`Favorites only (${favorites.length})`}
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
