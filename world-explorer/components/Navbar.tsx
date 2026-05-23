"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppBar, Box, Button, Chip, Container, Toolbar, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

const links = [
  { href: "/", label: "Home" },
  { href: "/countries", label: "Countries" },
  { href: "/search", label: "Search" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: "1px solid", borderColor: "divider", backgroundColor: "rgba(243,244,246,0.92)", backdropFilter: "blur(10px)" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 74, gap: 2, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <PublicIcon fontSize="small" />
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                World Explorer
              </Typography>
            </Link>
            <Chip size="small" label="Dashboard" sx={{ ml: 0.6, fontWeight: 600 }} />
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                  <Button
                    color="inherit"
                    variant={active ? "contained" : "text"}
                    sx={{
                      color: active ? "#fff" : "text.secondary",
                      backgroundColor: active ? "#111" : "transparent",
                      '&:hover': { backgroundColor: active ? "#000" : "rgba(17,17,17,0.06)" },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
