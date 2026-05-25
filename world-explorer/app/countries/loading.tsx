import { Card, CardContent, Container, Grid, Skeleton, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Card>
          <CardContent>
            <Skeleton variant="text" width={240} height={44} />
            <Skeleton variant="text" width={420} height={28} />
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          {Array.from({ length: 8 }).map((_, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card>
                <Skeleton variant="rectangular" height={178} />
                <CardContent>
                  <Skeleton variant="text" width="70%" height={34} />
                  <Skeleton variant="text" width="55%" />
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="rounded" width={120} height={34} sx={{ mt: 1 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
