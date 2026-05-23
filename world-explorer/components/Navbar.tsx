import Link from "next/link";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";

const links = [
  { href: "/", label: "Home" },
  { href: "/countries", label: "Countries" },
  { href: "/search", label: "Search" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: "1px solid", borderColor: "divider", backgroundColor: "#f6f7f9" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2, justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 700 }}>
              World Explorer
            </Typography>
          </Link>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {links.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <Button color="inherit" sx={{ color: "text.secondary", fontWeight: 600 }}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
