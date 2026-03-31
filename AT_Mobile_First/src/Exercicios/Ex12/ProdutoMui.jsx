import { Box, Divider, ListItem, ListItemText, Typography, Avatar, ListItemAvatar, Button, } from "@mui/material";

export default function ProdutoMui({ item, calcularTotalItem }) {
    return (
        <Box key={item.id}>
            <ListItem
                sx={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <ListItemAvatar>
                    <Avatar
                        variant="rounded"
                        src={item.img}
                        alt={item.nome}
                        sx={{ width: 80, height: 80, mr: 2 }}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography fontWeight="bold">
                            {item.nome}
                        </Typography>
                    } 
                    secondary={
                        <>
                            <Typography variant="body2">
                                Valor unitário: R$ {item.preco.toFixed(2)}
                            </Typography>
                            <Typography variant="body2">
                                Quantidade: {item.quantidade}
                            </Typography>
                            <Typography variant="body2">
                                Total: R$ {calcularTotalItem(item).toFixed(2)}
                            </Typography>
                        </>
                    }
                />
                <ListItemText 
                    primary={        
                        <Button variant="outlined" color="error" size="small">
                            Remover
                        </Button>
                    }
                    secondary={        
                        <Typography variant="body1" fontWeight="bold" mt={3}>
                            {`Subtotal: R$ ${calcularTotalItem(item).toFixed(2)}`}
                        </Typography>
                    }
                    sx={{ textAlign: "right",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                     }}
                />
            </ListItem>
            <Divider />
        </Box>
    );
}