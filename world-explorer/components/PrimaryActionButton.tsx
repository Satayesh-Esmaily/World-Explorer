import { Button, ButtonProps } from "@mui/material";

export default function PrimaryActionButton(props: ButtonProps) {
  const { sx, ...rest } = props;

  return (
    <Button
      variant="contained"
      color="inherit"
      sx={[
        {
          backgroundColor: "#12b76a",
          color: "#04130d",
          "&:hover": { backgroundColor: "#0ea55f" },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    />
  );
}
