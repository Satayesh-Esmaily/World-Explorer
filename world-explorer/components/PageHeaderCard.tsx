import { ReactNode } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
  rightContent?: ReactNode;
};

export default function PageHeaderCard({ title, subtitle, rightContent }: Props) {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <div>
            <Typography variant="h4">{title}</Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {subtitle}
            </Typography>
          </div>
          {rightContent ? (
            <Box sx={{ alignSelf: { xs: "flex-start", md: "center" } }}>{rightContent}</Box>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
}
