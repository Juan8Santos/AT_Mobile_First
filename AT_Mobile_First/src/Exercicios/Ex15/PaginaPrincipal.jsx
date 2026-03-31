import Header from "./Header";
import Feed from "./Feed";
import ListaUsuarios from "./ListaUsuarios";
import { Container, Grid, Box } from "@mui/material";

export default function PaginaPrincipal({ posts, amigos, sugestoes }) {
  return (
    <Container maxWidth="lg" sx={{ 
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
     }}>
      <Header />
      <Grid container spacing={2}>
        <Grid item >
          <Feed posts={posts} />
        </Grid>
        <Grid item >
            <Box sx={{
                display: "flex",
                flexDirection: {
                xs: "row",
                md: "column"
                },
                gap: 2
            }}>
            <ListaUsuarios titulo="Amigos" lista={amigos} />
            <ListaUsuarios titulo="Sugestões" lista={sugestoes} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}