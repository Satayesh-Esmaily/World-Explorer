import CountryCard from "@/components/CountryCard";
import { Country } from "@/app/types/country";

export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,population,flags",
    { cache: "force-cache" }
  );

  const data = await res.json();


  const countries: Country[] = Array.isArray(data) ? data : [];

  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-8">
        Countries
      </h1>

      {countries.length === 0 ? (
        <p className="text-center text-red-500">
          No countries loaded
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.slice(0, 20).map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          ))}
        </div>
      )}
    </main>
  );
}