"use client";

import { useEffect, useMemo, useState } from "react";
import { Country } from "@/app/types/country";
import CountryCard from "@/components/CountryCard";
import CountryFilters from "@/components/CountryFilters";
import { RegionFilter, SortOrder } from "@/components/country-filter-types";
import { filterAndSortCountries } from "@/components/country-filter-utils";
import useFavorites from "@/components/useFavorites";
import { FormControlLabel, Grid, Stack, Switch, Typography } from "@mui/material";
import PrimaryActionButton from "@/components/PrimaryActionButton";

type Props = {
  countries: Country[];
};

export default function CountriesExplorer({ countries }: Props) {
  const [region, setRegion] = useState<RegionFilter>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("name-asc");
  const [visibleCount, setVisibleCount] = useState(20);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const { favorites } = useFavorites();

  const visibleCountries = useMemo(() => {
    const base = filterAndSortCountries({ countries, region, sortOrder });
    if (!favoritesOnly) return base;
    const set = new Set(favorites);
    return base.filter((c) => set.has(c.cca3));
  }, [countries, favorites, favoritesOnly, region, sortOrder]);

  useEffect(() => {
    setVisibleCount(20);
  }, [region, sortOrder]);

  const displayedCountries = visibleCountries.slice(0, visibleCount);
  const hasMore = visibleCount < visibleCountries.length;

  return (
    <Stack spacing={3}>
      <CountryFilters
        region={region}
        sortOrder={sortOrder}
        onRegionChange={setRegion}
        onSortChange={setSortOrder}
        onClear={() => {
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

      {visibleCountries.length === 0 ? (
        <Typography color="text.secondary" align="center">
          No countries match this filter.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {displayedCountries.map((country) => (
            <Grid key={country.cca3} size={{ xs: 12, sm: 6, lg: 3 }}>
              <CountryCard country={country} />
            </Grid>
          ))}
        </Grid>
      )}

      {hasMore ? (
        <PrimaryActionButton
          sx={{ alignSelf: "center", px: 3, py: 1 }}
          onClick={() => setVisibleCount((prev) => prev + 20)}
        >
          Load More
        </PrimaryActionButton>
      ) : null}
    </Stack>
  );
}
