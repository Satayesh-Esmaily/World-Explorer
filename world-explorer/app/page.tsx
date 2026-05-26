import Link from "next/link";
import PrimaryActionButton from "@/components/PrimaryActionButton";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 7 }}>
      <Card sx={{ background: "linear-gradient(140deg, #030913 0%, #071423 58%, #0a1a2b 100%)", color: "#ffffff" }}>
        <CardContent sx={{ p: { xs: 3, md: 6 } }}>
          <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.75)" }}>Global Overview</Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 2 }}>Explore The World, Professionally</Typography>
          <Typography sx={{ mb: 4, maxWidth: 760, color: "rgba(255,255,255,0.85)" }}>
            A country dashboard to discover capitals, populations, regions, currencies, and languages.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.5 }}>
            <Link href="/countries" style={{ textDecoration: "none" }}>
              <PrimaryActionButton sx={{ px: 3.2, py: 1.2 }}>
                Explore Countries
              </PrimaryActionButton>
            </Link>
            <Link href="/search" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="inherit" sx={{ px: 3.2, py: 1.2, borderColor: "rgba(255,255,255,0.5)", color: "#fff", "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255,255,255,0.08)" } }}>
                Search Countries
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
