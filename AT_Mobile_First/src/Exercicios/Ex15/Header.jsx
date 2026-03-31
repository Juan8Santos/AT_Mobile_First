import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5">
          Fotogram
        </Typography>
      </Toolbar>
    </AppBar>
  );
}