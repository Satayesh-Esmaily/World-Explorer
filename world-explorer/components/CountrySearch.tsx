"use client";

import Link from "next/link";
import { useState } from "react";
import { Country } from "@/app/types/country";

type Props = {
  countries: Country[];
};

export default function CountrySearch({ countries }: Props) {
  const [search, setSearch] = useState("");

  if (!countries || countries.length === 0) {
    return <p>No countries found</p>;
  }

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );
    
  return (
    <div>
      <input
        className="border p-3 w-full mb-6"
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map((c) => {
          const png = c.flags?.png;
          const svg = c.flags?.svg;
          const hasFlag = Boolean(png || svg);

          return (
            <div key={c.cca3} className="p-4 border rounded">
              {hasFlag ? (
                <img
                  src={png || svg || ""}
                  alt={c.name.common}
                  className="h-40 w-full object-cover"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (svg && img.src !== svg) {
                      img.src = svg;
                      return;
                    }
                    img.style.display = "none";
                  }}
                />
              ) : (
                <div className="h-40 flex items-center justify-center bg-gray-200">
                  No Image
                </div>
              )}
              <h2>{c.name.common}</h2>
              <Link
                href={`/countries/${c.cca3}`}
                className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
