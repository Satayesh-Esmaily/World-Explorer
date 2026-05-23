import { Card, CardContent, Container, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card>
        <CardContent>
          <Typography color="text.secondary" align="center">Loading countries...</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
