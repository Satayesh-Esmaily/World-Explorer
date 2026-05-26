"use client";

import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Country } from "@/app/types/country";
import PrimaryActionButton from "@/components/PrimaryActionButton";
import useFavorites from "@/components/useFavorites";
import { Box, Card, CardContent, CardMedia, Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";

export default function CountryCard({ country }: { country: Country }) {
  const png = country.flags?.png;
  const svg = country.flags?.svg;
  const hasFlag = Boolean(png || svg);

  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(country.cca3);

  return (
    <Card
      sx={{
        height: "100%",
        overflow: "hidden",
        transition: "transform .2s ease, box-shadow .2s ease",
        "&:hover": { transform: "translateY(-3px)", boxShadow: "0 10px 20px rgba(16,24,40,0.08)" },
      }}
    >
      {hasFlag ? (
        <CardMedia
          component="img"
          image={png || svg || ""}
          alt={country.name.common}
          sx={{ height: 178 }}
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
        <Box sx={{ height: 178, bgcolor: "grey.100", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography color="text.secondary">No Image</Typography>
        </Box>
      )}
      <CardContent>
        <Stack spacing={1.2}>
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 1 }}>
            <Typography variant="h6" sx={{ pr: 1 }}>
              {country.name.common}
            </Typography>
            <Tooltip title={favorite ? "Remove from favorites" : "Add to favorites"}>
              <IconButton
                size="small"
                onClick={() => toggleFavorite(country.cca3)}
                aria-label={favorite ? "remove from favorites" : "add to favorites"}
              >
                {favorite ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          </Box>

          <Chip label={country.region} size="small" sx={{ width: "fit-content" }} />
          <Typography variant="body2" color="text.secondary">
            Capital: {country.capital?.[0] || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {country.population.toLocaleString()}
          </Typography>
          <Link href={`/countries/${country.cca3}`} style={{ textDecoration: "none", width: "fit-content" }}>
            <PrimaryActionButton sx={{ mt: 1 }}>View Details</PrimaryActionButton>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}
