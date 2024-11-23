import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const Servicios = ({ serviciosData, handleOpen }) => (
  <Grid container spacing={3}>
    {serviciosData.map((servicio, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            backgroundColor: "#FF69B4",
            color: "#fff",
            borderRadius: "10px",
            textAlign: "center",
            overflow: "hidden", // Asegura que el efecto no se desborde
            "&:hover": { transform: "scale(1.05)" },
            cursor: "pointer",
          }}
          onClick={() => handleOpen(servicio)}
        >
          {/* Imagen con efecto de desenfoque */}
          <CardMedia
            component="img"
            image={Array.isArray(servicio.imagen) ? servicio.imagen[0] : servicio.imagen}
            alt={servicio.nombre}
            sx={{
              height: 200,
              borderRadius: "10px 10px 0 0",
              filter: "blur(5px)", // Aplica desenfoque inicial
              transition: "filter 0.3s ease-in-out", // Transición suave
              "&:hover": {
                filter: "blur(0)", // Elimina el desenfoque al pasar el cursor
              },
            }}
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {servicio.nombre}
            </Typography>
            <Typography variant="body2">{servicio.descripcion}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default Servicios;