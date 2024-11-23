import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

import Servicios from "../components/Servicios";
import ModalServicio from "../components/ModalServicio";
import { serviciosData } from "../data/datos";
import Hero from "../components/Hero";
import ModalCarga from "../components/ModalCarga";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedServicio, setSelectedServicio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpen = (servicio) => {
    setSelectedServicio(servicio);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedServicio(null);
  };

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setIsLoading(false); // Oculta el modal cuando todas las imágenes han cargado
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad(); // Cuenta las imágenes ya cargadas
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => img.removeEventListener("load", handleImageLoad));
    };
  }, []);

  return (
    <>
      {isLoading && <ModalCarga />}
      <Box sx={{ backgroundColor: "#FD73FC", minHeight: "100vh" }}>
        <Hero />
        <Container id="servicios" sx={{ py: 5 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 4, color: "#fff", fontWeight: "bold" }}
          >
            💇‍♀️ Mis Servicios
          </Typography>
          <Servicios serviciosData={serviciosData} handleOpen={handleOpen} />
        </Container>
        <ModalServicio open={open} selectedServicio={selectedServicio} handleClose={handleClose} />
      </Box>
    </>
  );
};

export default Home;