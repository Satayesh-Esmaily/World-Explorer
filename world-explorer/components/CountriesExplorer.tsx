"use client";

import { useMemo, useState } from "react";
import { Country } from "@/app/types/country";
import CountryCard from "@/components/CountryCard";
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";

type Props = {
  countries: Country[];
};

const REGIONS = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"] as const;
type RegionFilter = (typeof REGIONS)[number];

type SortOrder = "population-desc" | "population-asc";

export default function CountriesExplorer({ countries }: Props) {
  const [region, setRegion] = useState<RegionFilter>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("population-desc");

  const visibleCountries = useMemo(() => {
    const filtered = countries.filter((country) => {
      if (region === "All") return true;
      return country.region === region;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "population-asc") {
        return a.population - b.population;
      }
      return b.population - a.population;
    });

    return sorted;
  }, [countries, region, sortOrder]);

  return (
    <Stack spacing={3}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <FormControl fullWidth>
          <InputLabel id="region-filter-label">Region</InputLabel>
          <Select
            labelId="region-filter-label"
            value={region}
            label="Region"
            onChange={(e: SelectChangeEvent<RegionFilter>) => setRegion(e.target.value as RegionFilter)}
          >
            {REGIONS.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="population-sort-label">Sort by Population</InputLabel>
          <Select
            labelId="population-sort-label"
            value={sortOrder}
            label="Sort by Population"
            onChange={(e: SelectChangeEvent<SortOrder>) => setSortOrder(e.target.value as SortOrder)}
          >
            <MenuItem value="population-desc">Highest First</MenuItem>
            <MenuItem value="population-asc">Lowest First</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      {visibleCountries.length === 0 ? (
        <Typography color="text.secondary" align="center">
          No countries match this filter.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {visibleCountries.slice(0, 20).map((country) => (
            <Grid key={country.cca3} size={{ xs: 12, sm: 6, lg: 3 }}>
              <CountryCard country={country} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}
