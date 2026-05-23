import CountrySearch from "@/components/CountrySearch";
import { Country } from "@/app/types/country";

export default async function SearchPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all"
  );

  const countries: Country[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Search Countries
      </h1>

      <CountrySearch countries={countries} />
    </main>
  );
}