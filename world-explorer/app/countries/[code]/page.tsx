import { notFound } from "next/navigation";
import NextLink from "next/link";
import { Country } from "@/app/types/country";
import { Box, Button, Card, CardContent, Container, Link, Stack, Typography } from "@mui/material";

type PageProps = {
  params: { code: string };
};

export default async function CountryDetailsPage({ params }: PageProps) {
  const { code } = params;

  // This page fetches fresh data every time.
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,capital,region,subregion,population,flags,languages,currencies,timezones,maps`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const data = await res.json();
  const country: Country | undefined = Array.isArray(data) ? data[0] : data;
  if (!country) notFound();

  const flagSrc = country.flags?.svg || country.flags?.png;
  const currencyNames = country.currencies ? Object.values(country.currencies).map((c) => c.name).join(", ") : "N/A";
  const languageNames = country.languages ? Object.values(country.languages).join(", ") : "N/A";

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card>
        <CardContent>
          <NextLink href="/countries" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="inherit" sx={{ mb: 2 }}>
              Back to Countries
            </Button>
          </NextLink>

          <Typography variant="h4" sx={{ mb: 3 }}>{country.name.common}</Typography>
          {flagSrc ? (
            <Box component="img" src={flagSrc} alt={country.name.common} sx={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 2, border: "1px solid", borderColor: "divider", mb: 3 }} />
          ) : (
            <Box sx={{ height: 220, borderRadius: 2, bgcolor: "grey.100", display: "grid", placeItems: "center", mb: 3 }}>
              <Typography color="text.secondary">No Image</Typography>
            </Box>
          )}

          <Stack spacing={1.2}>
            <Typography><strong>Official Name:</strong> {country.name.official}</Typography>
            <Typography><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</Typography>
            <Typography><strong>Region:</strong> {country.region}</Typography>
            <Typography><strong>Subregion:</strong> {country.subregion || "N/A"}</Typography>
            <Typography><strong>Population:</strong> {country.population.toLocaleString()}</Typography>
            <Typography><strong>Currencies:</strong> {currencyNames}</Typography>
            <Typography><strong>Languages:</strong> {languageNames}</Typography>
            <Typography><strong>Timezones:</strong> {country.timezones.join(", ")}</Typography>
            <Typography>
              <strong>Map:</strong> <Link href={country.maps.googleMaps} target="_blank" rel="noopener">Open in Google Maps</Link>
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
