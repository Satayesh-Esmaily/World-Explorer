import CountriesExplorer from "@/components/CountriesExplorer";
import { Country } from "@/app/types/country";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

export default async function CountriesPage() {
  // This page can be statically rendered and cached.
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
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 2 }}>
            <div>
              <Typography variant="h4">Countries</Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Browse countries with region filters and population sorting.
              </Typography>
            </div>
            <Typography variant="h5" sx={{ alignSelf: { xs: "flex-start", md: "center" } }}>
              {countries.length} Total
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {countries.length === 0 ? (
        <Typography color="text.secondary" align="center">No countries loaded</Typography>
      ) : (
        <CountriesExplorer countries={countries} />
      )}
    </Container>
  );
}
