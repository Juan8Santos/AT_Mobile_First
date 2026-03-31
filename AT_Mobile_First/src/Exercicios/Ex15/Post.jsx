import { Card, CardContent, CardMedia, Typography, Avatar, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function Post({
  titulo,
  texto,
  imagem,
  data,
  autor,
  avatar,
  curtidas,
  compartilhamentos,
  comentarios
}) {
  return (
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={avatar} />
          <Typography>{autor}</Typography>
        </Box>

        <Typography mt={2} variant="h6">
          {titulo}
        </Typography>

        <Typography variant="body2">{texto}</Typography>
      </CardContent>

      <CardMedia component="img" height="400" image={imagem} />

      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {data}
        </Typography>

        <Typography sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <FavoriteIcon fontSize="small" />
            {curtidas}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <ShareIcon fontSize="small" />
            {compartilhamentos}
          </Box>
        </Typography>

        {comentarios.map((comentario, index) => (
          <Typography key={index} variant="body2">
            - {comentario}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}