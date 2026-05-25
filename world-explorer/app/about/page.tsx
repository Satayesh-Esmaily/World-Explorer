import { Card, CardContent, Container, Link, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="h4" sx={{ mb: 3 }}>About World Explorer</Typography>
          <Typography sx={{ mb: 3 }} color="text.secondary">
            World Explorer is a Next.js project that allows users to explore countries around the world using real API data.
            Users can view details like flags, capitals, populations, currencies, languages, and more.
          </Typography>
          <Typography variant="h6" sx={{ mb: 1.5 }}>What this project demonstrates</Typography>
          <ul>
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
          <Typography variant="h6" sx={{ mt: 3, mb: 1.5 }}>API Used</Typography>
          <Typography color="text.secondary">
            REST Countries API (
            <Link href="https://restcountries.com" target="_blank" rel="noopener" sx={{ color: "#8ec5ff", "&:hover": { color: "#b7dbff" } }}>
              https://restcountries.com
            </Link>
            )
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
