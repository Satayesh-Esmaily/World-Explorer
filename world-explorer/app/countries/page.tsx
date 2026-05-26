import CountriesExplorer from "@/components/CountriesExplorer";
import PageHeaderCard from "@/components/PageHeaderCard";
import { Country } from "@/app/types/country";
import { Container, Typography } from "@mui/material";

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
      <PageHeaderCard
        title="Countries"
        subtitle="Browse countries with region filters and population sorting."
        rightContent={<Typography variant="h5">{countries.length} Total</Typography>}
      />

      {countries.length === 0 ? (
        <Typography color="text.secondary" align="center">No countries loaded</Typography>
      ) : (
        <CountriesExplorer countries={countries} />
      )}
    </Container>
  );
}
