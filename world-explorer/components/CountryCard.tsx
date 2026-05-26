import Link from "next/link";
import { Country } from "@/app/types/country";
import PrimaryActionButton from "@/components/PrimaryActionButton";
import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";

export default function CountryCard({ country }: { country: Country }) {
  const png = country.flags?.png;
  const svg = country.flags?.svg;
  const hasFlag = Boolean(png || svg);

  return (
    <Card sx={{ height: "100%", overflow: "hidden", transition: "transform .2s ease, box-shadow .2s ease", '&:hover': { transform: "translateY(-3px)", boxShadow: "0 10px 20px rgba(16,24,40,0.08)" } }}>
      {hasFlag ? (
        <CardMedia component="img" image={svg || png || ""} alt={country.name.common} sx={{ height: 178 }} />
      ) : (
        <Box sx={{ height: 178, bgcolor: "grey.100", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography color="text.secondary">No Image</Typography>
        </Box>
      )}
      <CardContent>
        <Stack spacing={1.2}>
          <Typography variant="h6">{country.name.common}</Typography>
          <Chip label={country.region} size="small" sx={{ width: "fit-content" }} />
          <Typography variant="body2" color="text.secondary">Capital: {country.capital?.[0] || "N/A"}</Typography>
          <Typography variant="body2" color="text.secondary">Population: {country.population.toLocaleString()}</Typography>
          <Link href={`/countries/${country.cca3}`} style={{ textDecoration: "none", width: "fit-content" }}>
            <PrimaryActionButton sx={{ mt: 1 }}>
              View Details
            </PrimaryActionButton>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}
