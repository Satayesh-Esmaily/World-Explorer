import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">
        World Explorer
      </h1>

      <p className="max-w-2xl mx-auto mb-8 text-lg">
        Explore countries around the world and learn about flags, capitals, populations, currencies, and languages.
      </p>

      <Link
        href="/countries"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Explore Countries
      </Link>
    </main>
  );
}