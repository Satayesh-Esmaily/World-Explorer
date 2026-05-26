export const REGIONS = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"] as const;
export type RegionFilter = (typeof REGIONS)[number];

export const SORT_OPTIONS = ["name-asc", "population-desc", "population-asc"] as const;
export type SortOrder = (typeof SORT_OPTIONS)[number];
