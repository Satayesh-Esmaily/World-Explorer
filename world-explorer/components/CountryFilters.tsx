"use client";

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import RegionFilterControl from "@/components/RegionFilter";
import { RegionFilter, SORT_OPTIONS, SortOrder } from "@/components/country-filter-types";

type Props = {
  region: RegionFilter;
  sortOrder: SortOrder;
  onRegionChange: (value: RegionFilter) => void;
  onSortChange: (value: SortOrder) => void;
  onClear: () => void;
};

const SORT_LABELS: Record<SortOrder, string> = {
  "name-asc": "Name (A-Z)",
  "population-desc": "Population (High-Low)",
  "population-asc": "Population (Low-High)",
};

export default function CountryFilters({
  region,
  sortOrder,
  onRegionChange,
  onSortChange,
  onClear,
}: Props) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }}>
        <RegionFilterControl value={region} onChange={onRegionChange} />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl fullWidth>
          <InputLabel id="sort-filter-label">Sort</InputLabel>
          <Select
            labelId="sort-filter-label"
            value={sortOrder}
            label="Sort"
            onChange={(e: SelectChangeEvent<SortOrder>) => onSortChange(e.target.value as SortOrder)}
          >
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {SORT_LABELS[option]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Button fullWidth variant="outlined" sx={{ height: "56px" }} onClick={onClear}>
          Clear Filters
        </Button>
      </Grid>
    </Grid>
  );
}
