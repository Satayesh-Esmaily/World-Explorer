import Link from "next/link";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 7 }}>
      <Card>
        <CardContent sx={{ p: { xs: 3, md: 6 } }}>
          <Typography variant="overline" color="text.secondary">Global Overview</Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 2 }}>Explore The World, Professionally</Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 760 }}>
            A country dashboard to discover capitals, populations, regions, currencies, and languages.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.5 }}>
            <Link href="/countries" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="inherit" sx={{ backgroundColor: "#111", color: "#fff", px: 3.2, py: 1.2, '&:hover': { backgroundColor: "#000" } }}>
                Explore Countries
              </Button>
            </Link>
            <Link href="/search" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="inherit" sx={{ px: 3.2, py: 1.2 }}>
                Search Countries
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
