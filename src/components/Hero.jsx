import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import clienta from "../assets/clienta.png";
import ModalConoceMas from "./ModalConoceMas";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "65vh", md: "85vh" }, // Altura adaptada según dispositivo
          backgroundImage: `url(${clienta})`,
          backgroundSize: "cover", // Ajuste de la imagen al contenedor
          backgroundPosition: { xs: "center right", md: "top right" }, // Centra la cara y los detalles
          color: "#fff",
          borderRadius: "10px", // Bordes redondeados
          overflow: "hidden", // Evita desbordes
          px: 2, // Espaciado interno horizontal
          marginTop: -20,
          height: "910px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2em", md: "3em" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Belleza que llega a vos 💇‍♀️
        </Typography>
        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "1em", md: "1.2em" },
            maxWidth: "600px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            lineHeight: 1.5,
          }}
        >
          ¡Transformá tu look sin salir de casa! Ofrecemos peinados a domicilio para que brilles en cualquier ocasión. Disfrutá de un servicio exclusivo, pensado solo para vos. 🎀
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          sx={{
            backgroundColor: "#FF69B4",
            borderRadius: "30px",
            fontWeight: "bold",
            px: 4, // Espaciado interno del botón
            py: 1.5,
            fontSize: { xs: "0.8em", md: "1em" },
            "&:hover": { backgroundColor: "#FF1493" },
          }}
        >
          Conocé más
        </Button>
      </Box>

      {/* Modal para "Conocé Más" */}
      <ModalConoceMas open={modalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default Hero;