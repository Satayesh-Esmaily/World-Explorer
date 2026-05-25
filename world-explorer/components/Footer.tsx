import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "#17314b", mt: "auto", py: 4, background: "linear-gradient(180deg, #071423 0%, #040b14 100%)" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ textAlign: "center", color: "#dbe7f3" }}>
          © 2026 World Explorer.
        </Typography>
      </Container>
    </Box>
  );
}
