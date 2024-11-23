import React, { useState } from "react";
import { Box, Button, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import icon from "../assets/logo.jpeg";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const whatsappNumber = "+5491131034391";

  const reservarCita = () => {
    const mensaje = `👋 ¡Hola! Estoy interesada en reservar una cita para el servicio. ¿Podrías brindarme más información? Gracias 😊`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");
  };

  const scrollToServicios = () => {
    setTimeout(() => {
      const serviciosSection = document.querySelector("#servicios");
      if (serviciosSection) {
        serviciosSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Espera 100ms
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        backgroundColor: "#8C52FE",
        color: "#fff",
        height: "100%",
      }}
    >
      <Button
        color="inherit"
        sx={{
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
        onClick={() => {
          toggleDrawer(false)(); // Cierra el Drawer
          scrollToServicios();  // Navega a la sección
        }}
      >
        Servicios
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF69B4",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1rem",
          "&:hover": { backgroundColor: "#FF1493" },
        }}
        onClick={reservarCita}
      >
        ¡Reserva tu cita ahora!
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        backgroundColor: "#8C52FE",
        color: "#fff",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={icon}
          alt="Bella Luz Logo"
          style={{
            width: "100px",
            height: "100px",
            marginRight: "10px",
            borderRadius: "50%",
          }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Tu logo
        </Typography>
      </Box>
      <IconButton
        sx={{
          display: { xs: "block", md: "none" },
          color: "#fff",
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",  backgroundColor: "#8C52FE", }}>
      <img
          src={icon}
          alt="Bella Luz Logo"
          style={{
            width: "150px",
            height: "150px",
            marginRight: "10px",
            borderRadius: "50%",
            alignItems: "center",
            
          }}
        />
        </Box>
        {menuItems}
      </Drawer>
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <Button
          color="inherit"
          sx={{
            color: "#fff",
            marginRight: "10px",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
          onClick={scrollToServicios}
        >
          Servicios
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF69B4",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            "&:hover": { backgroundColor: "#FF1493" },
          }}
          onClick={reservarCita}
        >
          ¡Reserva tu cita ahora!
        </Button>
      </Box>
    </Box>
  );
};

export default Header;