export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About World Explorer
      </h1>

      <p className="text-lg leading-8 mb-6">
        World Explorer is a Next.js project that allows users to explore countries around the world using real API data.
        Users can view details like flags, capitals, populations, currencies, languages, and more.
      </p>

      <h2 className="text-2xl font-bold mb-3">
        What this project demonstrates
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Next.js App Router</li>
        <li>File-based routing</li>
        <li>Server Components</li>
        <li>Client Components</li>
        <li>Dynamic Routes</li>
        <li>Data fetching with async/await</li>
        <li>Static and dynamic rendering</li>
        <li>Caching strategies (force-cache / no-store)</li>
        <li>REST API integration</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">
        API Used
      </h2>

      <p className="text-lg">
        REST Countries API (
        <a
          href="https://restcountries.com"
          target="_blank"
          className="text-blue-600 underline"
        >
          https://restcountries.com
        </a>
        )
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-3">
        Goal
      </h2>

      <p className="text-lg leading-8">
        The goal of this project is to practice building a real-world Next.js application with proper structure,
        reusable components, and clean UI while working with external APIs.
      </p>
    </main>
  );
}