"use client";

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { REGIONS, RegionFilter } from "@/components/country-filter-types";

type Props = {
  value: RegionFilter;
  onChange: (value: RegionFilter) => void;
};

export default function RegionFilterControl({ value, onChange }: Props) {
  return (
    <FormControl fullWidth>
      <InputLabel id="region-filter-label">Region</InputLabel>
      <Select
        labelId="region-filter-label"
        value={value}
        label="Region"
        onChange={(e: SelectChangeEvent<RegionFilter>) => onChange(e.target.value as RegionFilter)}
      >
        {REGIONS.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
