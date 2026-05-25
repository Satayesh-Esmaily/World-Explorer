"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Country } from "@/app/types/country";
import { Alert, Box, Button, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography } from "@mui/material";

type Props = { countries: Country[] };

function highlightMatch(text: string, query: string) {
  const trimmed = query.trim();
  if (!trimmed) return text;

  const lowerText = text.toLowerCase();
  const lowerQuery = trimmed.toLowerCase();
  const start = lowerText.indexOf(lowerQuery);

  if (start === -1) return text;

  const end = start + trimmed.length;
  return (
    <>
      {text.slice(0, start)}
      <Box component="mark" sx={{ backgroundColor: "rgba(159,179,200,0.2)", color: "inherit", px: 0.5, borderRadius: 0.5 }}>
        {text.slice(start, end)}
      </Box>
      {text.slice(end)}
    </>
  );
}

export default function CountrySearch({ countries }: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

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
    const query = debouncedSearch.toLowerCase().trim();
    if (!query) return countries;
    return countries.filter((c) => c.name.common.toLowerCase().includes(query));
  }, [countries, debouncedSearch]);

  return (
    <Stack spacing={3}>
      <TextField
        fullWidth
        placeholder="Search country..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {filtered.length === 0 ? (
        <Alert severity="info">No results found for "{debouncedSearch.trim()}".</Alert>
      ) : (
        <Grid container spacing={3}>
          {filtered.map((c) => {
            const png = c.flags?.png;
            const svg = c.flags?.svg;
            const hasFlag = Boolean(png || svg);

            return (
              <Grid key={c.cca3} size={{ xs: 12, md: 6, lg: 4 }}>
                <Card sx={{ height: "100%" }}>
                  {hasFlag ? (
                    <CardMedia
                      component="img"
                      image={png || svg || ""}
                      alt={c.name.common}
                      sx={{ height: 170 }}
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (svg && img.src !== svg) {
                          img.src = svg;
                          return;
                        }
                        img.style.display = "none";
                      }}
                    />
                  ) : (
                    <Box sx={{ height: 170, bgcolor: "grey.100", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Typography color="text.secondary">No Image</Typography>
                    </Box>
                  )}
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      {highlightMatch(c.name.common, debouncedSearch)}
                    </Typography>
                    <Link href={`/countries/${c.cca3}`} style={{ textDecoration: "none" }}>
                      <Button variant="contained" color="inherit" sx={{ backgroundColor: "#12b76a", color: "#04130d", "&:hover": { backgroundColor: "#0ea55f" } }}>
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Stack>
  );
}
