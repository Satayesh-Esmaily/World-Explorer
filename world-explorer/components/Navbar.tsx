"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import { AppBar, Box, Button, Chip, Container, Drawer, IconButton, Stack, Toolbar, Typography } from "@mui/material";

const links = [
  { href: "/", label: "Home" },
  { href: "/countries", label: "Countries" },
  { href: "/search", label: "Search" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentSection =
    links.find((item) => item.href === pathname)?.label ??
    (pathname.startsWith("/countries/") ? "Country Details" : "World Explorer");

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: "1px solid", borderColor: "divider", backgroundColor: "rgba(4,11,20,0.9)", backdropFilter: "blur(10px)" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 74, gap: 2, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <PublicIcon fontSize="small" sx={{ color: "#0a1a2b" }} />
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                World Explorer
              </Typography>
            </Link>
            <Chip size="small" label={currentSection} sx={{ ml: 0.6, fontWeight: 700, color: "#cfe1f3", bgcolor: "rgba(7,20,35,0.75)", border: "1px solid #17314b", display: { xs: "none", sm: "inline-flex" } }} />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                  <Button
                    color="inherit"
                    variant={active ? "contained" : "text"}
                    sx={{
                      color: active ? "#fff" : "text.secondary",
                      backgroundColor: active ? "#071423" : "transparent",
                      "&:hover": { backgroundColor: active ? "#040b14" : "rgba(16,42,67,0.08)" },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <IconButton
            color="inherit"
            sx={{ display: { xs: "inline-flex", md: "none" } }}
            aria-label="open menu"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} slotProps={{ paper: { sx: { backgroundColor: "#071423", color: "#e8f1fb", borderLeft: "1px solid #17314b" } } }}>
        <Stack sx={{ width: 260, p: 2 }} spacing={1}>
          <Typography variant="subtitle1" sx={{ px: 1, pb: 1 }}>Navigation</Typography>
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                <Button
                  fullWidth
                  color="inherit"
                  variant={active ? "contained" : "text"}
                  sx={{
                    justifyContent: "flex-start",
                    color: active ? "#fff" : "text.primary",
                    backgroundColor: active ? "#071423" : "transparent",
                    "&:hover": { backgroundColor: active ? "#040b14" : "rgba(16,42,67,0.08)" },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </Stack>
      </Drawer>
    </AppBar>
  );
}
