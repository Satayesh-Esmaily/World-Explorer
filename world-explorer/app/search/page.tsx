import CountrySearch from "@/components/CountrySearch";
import PageHeaderCard from "@/components/PageHeaderCard";
import { Country } from "@/app/types/country";
import { Container } from "@mui/material";

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
      <PageHeaderCard
        title="Search Countries"
        subtitle="Find countries instantly by name."
      />

      <CountrySearch countries={countries} />
    </Container>
  );
}
