"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import useFavorites from "@/components/useFavorites";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

type FavoriteCountry = {
  cca3: string;
  name: { common: string };
  flags?: { png?: string; svg?: string };
  region?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
};

async function fetchFavorites(codes: string[]): Promise<FavoriteCountry[]> {
  if (codes.length === 0) return [];

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}&fields=cca3,name,flags,region`,
    { cache: "force-cache" }
  );

  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default function FavoritesDrawer({ open, onClose }: Props) {
  const { favorites, toggleFavorite, clearFavorites } = useFavorites();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<FavoriteCountry[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!open) return;
      if (favorites.length === 0) {
        setCountries([]);
        return;
      }

      setLoading(true);
      try {
        const result = await fetchFavorites(favorites);
        if (!cancelled) setCountries(result);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [favorites, open]);

  const ordered = useMemo(() => {
    // Keep UI order stable based on saved codes.
    const map = new Map(countries.map((c) => [c.cca3, c]));
    return favorites.map((code) => map.get(code)).filter(Boolean) as FavoriteCountry[];
  }, [countries, favorites]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: { xs: 320, sm: 380 },
            backgroundColor: "#071423",
            color: "#e8f1fb",
            borderLeft: "1px solid #17314b",
          },
        },
      }}
    >
      <Stack sx={{ p: 2.2 }} spacing={1.6}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FavoriteIcon fontSize="small" />
            <Typography variant="h6">Favorites</Typography>
            <Typography color="text.secondary">({favorites.length})</Typography>
          </Box>

          <Button
            size="small"
            variant="outlined"
            color="inherit"
            disabled={favorites.length === 0}
            onClick={clearFavorites}
          >
            Clear
          </Button>
        </Box>

        <Divider sx={{ borderColor: "#17314b" }} />

        {favorites.length === 0 ? (
          <Card>
            <CardContent>
              <Typography sx={{ fontWeight: 700, mb: 0.6 }}>No favorites yet</Typography>
              <Typography color="text.secondary">
                Tap the heart icon on any country card to save it here.
              </Typography>
            </CardContent>
          </Card>
        ) : loading ? (
          <Typography color="text.secondary">Loading favorites...</Typography>
        ) : (
          <Stack spacing={1.4}>
            {ordered.map((country) => {
              const png = country.flags?.png;
              const svg = country.flags?.svg;
              const flagSrc = png || svg;
              return (
                <Card key={country.cca3} sx={{ overflow: "hidden" }}>
                  <Box sx={{ display: "flex", alignItems: "stretch" }}>
                    {flagSrc ? (
                      <CardMedia
                        component="img"
                        image={flagSrc}
                        alt={country.name.common}
                        sx={{ width: 96, height: 78, objectFit: "cover" }}
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          if (svg && img.src !== svg) {
                            img.src = svg;
                            return;
                          }
                          if (png && img.src !== png) {
                            img.src = png;
                            return;
                          }
                          img.style.display = "none";
                        }}
                      />
                    ) : (
                      <Box sx={{ width: 96, height: 78, bgcolor: "rgba(4,11,20,0.35)" }} />
                    )}

                    <Box sx={{ flex: 1 }}>
                      <CardContent sx={{ py: 1.2, px: 1.4, "&:last-child": { pb: 1.2 } }}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 1 }}>
                          <Box sx={{ minWidth: 0 }}>
                            <Typography sx={{ fontWeight: 750 }} noWrap>
                              {country.name.common}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                              {country.region || "Unknown region"} • {country.cca3}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                            <IconButton
                              size="small"
                              aria-label="remove from favorites"
                              onClick={() => toggleFavorite(country.cca3)}
                            >
                              <DeleteOutlinedIcon fontSize="small" />
                            </IconButton>
                            <Link href={`/countries/${country.cca3}`} onClick={onClose} style={{ textDecoration: "none" }}>
                              <IconButton size="small" aria-label="open details">
                                <OpenInNewIcon fontSize="small" />
                              </IconButton>
                            </Link>
                          </Box>
                        </Box>
                      </CardContent>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </Stack>
        )}
      </Stack>
    </Drawer>
  );
}
