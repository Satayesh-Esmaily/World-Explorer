import CountryCard from "@/components/CountryCard";
import { Country } from "@/app/types/country"



export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all",
    {
      cache: "force-cache",
    }
  );

  const countries: Country[] = await res.json();

  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-8">
        Countries
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {countries.slice(0, 20).map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </main>
  );
}