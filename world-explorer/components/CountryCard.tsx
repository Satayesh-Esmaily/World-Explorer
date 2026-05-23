import Link from "next/link";
import { Country } from "@/app/types/country"

export default function CountryCard({
  country,
}: {
  country: Country;
}) {
  return (
    <div className="bg-white shadow rounded overflow-hidden hover:scale-105 transition">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="h-48 w-full object-cover"
      />

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