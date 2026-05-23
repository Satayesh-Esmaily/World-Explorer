"use client";

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
        {filtered.map((c) => (
          <div key={c.cca3} className="p-4 border rounded">
            <img src={c.flags.png} alt={c.name.common} />
            <h2>{c.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}