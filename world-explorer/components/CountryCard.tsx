import Link from "next/link";
import { Country } from "@/app/types/country";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CountryCard({ country }: { country: Country }) {
  const png = country.flags?.png;
  const svg = country.flags?.svg;
  const hasFlag = Boolean(png || svg);

  return (
    <Card sx={{ height: "100%" }}>
      {hasFlag ? (
        <CardMedia component="img" image={svg || png || ""} alt={country.name.common} sx={{ height: 180 }} />
      ) : (
        <Box sx={{ height: 180, bgcolor: "grey.100", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography color="text.secondary">No Image</Typography>
        </Box>
      )}
      <CardContent>
        <Box sx={{ display: "grid", gap: 1.1 }}>
          <Typography variant="h6">{country.name.common}</Typography>
          <Typography variant="body2" color="text.secondary">Capital: {country.capital?.[0] || "N/A"}</Typography>
          <Typography variant="body2" color="text.secondary">Region: {country.region}</Typography>
          <Typography variant="body2" color="text.secondary">Population: {country.population.toLocaleString()}</Typography>
          <Link href={`/countries/${country.cca3}`} style={{ textDecoration: "none", width: "fit-content" }}>
            <Button variant="outlined" color="inherit" sx={{ mt: 1 }}>
              View Details
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
