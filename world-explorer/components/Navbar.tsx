import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/countries">Countries</Link>
        <Link href="/search">Search</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}