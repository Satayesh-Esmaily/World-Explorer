import Link from "next/link";
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="overline" color="text.secondary">Overview</Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 2 }}>World Explorer Dashboard</Typography>
          <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 700 }}>
            Explore countries, search by name, and review detailed information in a clean and organized interface.
          </Typography>
          <Link href="/countries" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="inherit" sx={{ backgroundColor: "#111", color: "#fff", px: 3, py: 1.2, '&:hover': { backgroundColor: "#000" } }}>
              Explore Countries
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}
