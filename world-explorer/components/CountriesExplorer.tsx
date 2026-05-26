"use client";

import { useEffect, useMemo, useState } from "react";
import { Country } from "@/app/types/country";
import CountryCard from "@/components/CountryCard";
import CountryFilters from "@/components/CountryFilters";
import { RegionFilter, SortOrder } from "@/components/country-filter-types";
import { Grid, Stack, Typography } from "@mui/material";
import PrimaryActionButton from "@/components/PrimaryActionButton";

type Props = {
  countries: Country[];
};

export default function CountriesExplorer({ countries }: Props) {
  const [region, setRegion] = useState<RegionFilter>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("name-asc");
  const [visibleCount, setVisibleCount] = useState(20);

  const visibleCountries = useMemo(() => {
    const filtered = countries.filter((country) => {
      if (region === "All") return true;
      return country.region === region;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "population-desc") return b.population - a.population;
      if (sortOrder === "population-asc") return a.population - b.population;
      return a.name.common.localeCompare(b.name.common);
    });

    return sorted;
  }, [countries, region, sortOrder]);

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
