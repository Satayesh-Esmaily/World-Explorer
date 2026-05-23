import Link from "next/link";
import { Country } from "@/app/types/country"

export default function CountryCard({
  country,
}: {
  country: Country;
}) {
  const png = country.flags?.png;
  const svg = country.flags?.svg;
  const hasFlag = Boolean(png || svg);

  return (
    <div className="bg-white shadow rounded overflow-hidden hover:scale-105 transition">
      {hasFlag ? (
        <img
          src={svg || png || ""}
          alt={country.name.common}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="h-48 w-full flex items-center justify-center bg-gray-200">
          No Image
        </div>
      )}

      <div className="p-4">
        <h2 className="font-bold text-xl">
          {country.name.common}
        </h2>

        <p>Capital: {country.capital?.[0] || "N/A"}</p>
        <p>Region: {country.region}</p>
        <p>
          Population:{" "}
          {country.population.toLocaleString()}
        </p>

        <Link
          href={`/countries/${country.cca3}`}
          className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
