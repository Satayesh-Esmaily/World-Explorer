import { notFound } from "next/navigation";
import { Country } from "@/app/types/country";

type PageProps = {
  params: Promise<{
    code: string;
  }>;
};

export default async function CountryDetailsPage({ params }: PageProps) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,capital,region,subregion,population,flags,languages,currencies,timezones,maps`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const country: Country | undefined = Array.isArray(data) ? data[0] : data;

  if (!country) {
    notFound();
  }

  const flagSrc = country.flags?.png || country.flags?.svg;
  const currencyNames = country.currencies
    ? Object.values(country.currencies)
        .map((c) => c.name)
        .join(", ")
    : "N/A";
  const languageNames = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{country.name.common}</h1>

      {flagSrc ? (
        <img
          src={flagSrc}
          alt={country.name.common}
          className="w-full max-h-96 object-cover rounded mb-6"
        />
      ) : (
        <div className="h-56 rounded bg-gray-200 flex items-center justify-center mb-6">
          No Image
        </div>
      )}

      <div className="space-y-2 text-lg">
        <p>
          <strong>Official Name:</strong> {country.name.official}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Subregion:</strong> {country.subregion || "N/A"}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Currencies:</strong> {currencyNames}
        </p>
        <p>
          <strong>Languages:</strong> {languageNames}
        </p>
        <p>
          <strong>Timezones:</strong> {country.timezones.join(", ")}
        </p>
        <p>
          <strong>Map:</strong>{" "}
          <a
            href={country.maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Open in Google Maps
          </a>
        </p>
      </div>
    </main>
  );
}
