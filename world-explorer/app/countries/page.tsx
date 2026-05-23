import CountryCard from "@/components/CountryCard";
import { Country } from "@/app/types/country";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,population,flags",
    { cache: "force-cache" }
  );

  const data = await res.json();
  const countries: Country[] = Array.isArray(data) ? data : [];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4">Countries</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>Browse a curated set of countries.</Typography>
        </CardContent>
      </Card>

      {countries.length === 0 ? (
        <Typography color="text.secondary" align="center">No countries loaded</Typography>
      ) : (
        <Grid container spacing={3}>
          {countries.slice(0, 20).map((country) => (
            <Grid key={country.cca3} size={{ xs: 12, sm: 6, lg: 3 }}>
              <CountryCard country={country} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
