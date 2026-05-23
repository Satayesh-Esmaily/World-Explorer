import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "divider", mt: 8, py: 3, backgroundColor: "#f6f7f9" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
          © 2026 World Explorer
        </Typography>
      </Container>
    </Box>
  );
}
