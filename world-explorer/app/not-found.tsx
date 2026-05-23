import { Card, CardContent, Container, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card>
        <CardContent sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>404</Typography>
          <Typography color="text.secondary">Page Not Found</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
