"use client";

import { useState } from "react";
import { Country } from "@/app/types/country";

export default function CountrySearch({
  countries,
}: {
  countries: Country[];
}) {
  const [search, setSearch] = useState("");

  const filtered = countries.filter((c) =>
    c.name.common
      .toLowerCase()
      .includes(search.toLowerCase())
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
          <div
            key={c.cca3}
            className="bg-white p-4 rounded shadow"
          >
            <img src={c.flags.png} />
            <h2 className="font-bold mt-2">
              {c.name.common}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}