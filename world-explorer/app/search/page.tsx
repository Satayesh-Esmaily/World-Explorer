import CountrySearch from "@/components/CountrySearch";
import { Country } from "@/app/types/country";
import { Card, CardContent, Container, Typography } from "@mui/material";

export default async function SearchPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,population,flags",
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  const countries: Country[] = await res.json();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4">Search Countries</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Find countries instantly by name.
          </Typography>
        </CardContent>
      </Card>

      <CountrySearch countries={countries} />
    </Container>
  );
}
