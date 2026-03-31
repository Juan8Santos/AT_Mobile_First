import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

export default function ListaUsuarios({ titulo, lista }) {
  return (
    <Card sx={{ p: 1 }}>
      <CardContent>
        <Typography variant="h6" mb={1}>
          {titulo}
        </Typography>

        {lista.map((user) => (
          <Box
            key={user.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 1
            }}
          >
            <Avatar src={user.foto} />
            <Box>
              <Typography>{user.nome}</Typography>
              <Typography variant="caption" color="text.secondary">
                {user.comuns} amigos em comum
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}