"use client";

import Link from "next/link";
import { useState } from "react";
import { Country } from "@/app/types/country";
import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography } from "@mui/material";

type Props = { countries: Country[] };

export default function CountrySearch({ countries }: Props) {
  const [search, setSearch] = useState("");

  if (!countries || countries.length === 0) {
    return <Typography color="text.secondary">No countries found</Typography>;
  }

  const filtered = countries.filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase()));

  return (
    <Stack spacing={3}>
      <TextField
        fullWidth
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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
                  <Typography variant="h6" sx={{ mb: 2 }}>{c.name.common}</Typography>
                  <Link href={`/countries/${c.cca3}`} style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="inherit">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
