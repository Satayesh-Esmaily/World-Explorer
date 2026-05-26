import { notFound } from "next/navigation";
import NextLink from "next/link";
import type { Metadata } from "next";
import { Country } from "@/app/types/country";
import { Box, Button, Card, CardContent, Chip, Container, Grid, Link, Typography } from "@mui/material";

type PageProps = {
  params: Promise<{ code: string }>;
};

async function fetchCountryByCode(code: string, cache: RequestCache = "no-store") {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,capital,region,subregion,population,flags,languages,currencies,timezones,maps`,
    { cache }
  );

  if (!res.ok) return null;

  const data = await res.json();
  const country: Country | undefined = Array.isArray(data) ? data[0] : data;
  return country ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const country = await fetchCountryByCode(code, "force-cache");

  if (!country) {
    return {
      title: "Country Not Found | World Explorer",
    };
  }

  return {
    title: `${country.name.common} | World Explorer`,
    description: `Explore details about ${country.name.common}, including capital, population, region, and more.`,
  };
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ p: 2, border: "1px solid", borderColor: "divider", borderRadius: 2, backgroundColor: "rgba(7,20,35,0.45)" }}>
      <Typography variant="caption" sx={{ color: "text.secondary", letterSpacing: ".04em" }}>
        {label}
      </Typography>
      <Typography sx={{ mt: 0.4, fontWeight: 700 }}>{value}</Typography>
    </Box>
  );
}

export default async function CountryDetailsPage({
  params,
}: PageProps) {
  const { code } = await params;

  // This page fetches fresh data every time.
  const country = await fetchCountryByCode(code, "no-store");
  if (!country) notFound();

  const flagSrc = country.flags?.svg || country.flags?.png;
  const currencyNames = country.currencies ? Object.values(country.currencies).map((c) => c.name).join(", ") : "N/A";
  const languageNames = country.languages ? Object.values(country.languages).join(", ") : "N/A";

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Card>
        <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
          <Box sx={{ mb: 3, display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, gap: 2 }}>
            <NextLink href="/countries" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="inherit" sx={{ backgroundColor: "#12b76a", color: "#04130d", "&:hover": { backgroundColor: "#0ea55f" } }}>
                Back to Countries
              </Button>
            </NextLink>
            <Chip label={country.region || "Country"} sx={{ bgcolor: "rgba(16,42,67,0.75)", color: "#dbe7f3", border: "1px solid #17314b" }} />
          </Box>

          <Typography variant="h3" sx={{ mb: 0.5 }}>{country.name.common}</Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>{country.name.official}</Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              {flagSrc ? (
                <Box component="img" src={flagSrc} alt={country.name.common} sx={{ width: "100%", height: { xs: 220, md: 300 }, objectFit: "cover", borderRadius: 2, border: "1px solid", borderColor: "divider" }} />
              ) : (
                <Box sx={{ height: 220, borderRadius: 2, bgcolor: "rgba(7,20,35,0.55)", display: "grid", placeItems: "center", border: "1px solid", borderColor: "divider" }}>
                  <Typography color="text.secondary">No Image</Typography>
                </Box>
              )}
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={1.4}>
                <Grid size={{ xs: 12, sm: 6 }}><InfoItem label="Capital" value={country.capital?.[0] || "N/A"} /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><InfoItem label="Region" value={country.region || "N/A"} /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><InfoItem label="Subregion" value={country.subregion || "N/A"} /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><InfoItem label="Population" value={country.population.toLocaleString()} /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><InfoItem label="Timezones" value={country.timezones.join(", ")} /></Grid>
                <Grid size={{ xs: 12 }}><InfoItem label="Languages" value={languageNames} /></Grid>
                <Grid size={{ xs: 12 }}><InfoItem label="Currencies" value={currencyNames} /></Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, p: 2, borderRadius: 2, border: "1px solid", borderColor: "divider", backgroundColor: "rgba(7,20,35,0.45)" }}>
            <Typography sx={{ fontWeight: 700, mb: 0.7 }}>Map</Typography>
            <Link href={country.maps.googleMaps} target="_blank" rel="noopener" sx={{ color: "#8ec5ff", "&:hover": { color: "#b7dbff" } }}>
              Open in Google Maps
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
