import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  ImageList,
  ImageListItem,
  Stack,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ModalServicio = ({ open, selectedServicio, handleClose }) => {
  // Número de WhatsApp
  const whatsappNumber = "+5491131034391";

  // Función para generar y abrir el enlace de WhatsApp
  const compartirEnWhatsApp = () => {
    const mensaje = `👋 ¡Hola! Estoy interesada en reservar una cita para el servicio: ✨ *${selectedServicio?.nombre}* ✨. ¿Podrías brindarme más información? Gracias 😊`;


    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank"); // Abrir en una nueva pestaña
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "20px",
          backgroundColor: "#FDF3F0",
          color: "#4B0082",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* Título del modal */}
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FD73FC",
          color: "#fff",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          px: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
          }}
        >
          {/* <EventAvailableIcon sx={{ mr: 1, fontSize: "2rem" }} /> */}
          ✨ {selectedServicio?.nombre} ✨
        </Typography>
      
        <IconButton
          onClick={handleClose}
          sx={{
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ width: "100%", margin: "auto",  mb: 0 }} />
      {/* Contenido del modal */}
      <DialogContent
        sx={{
          backgroundColor: "#FD73FC",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          p: 3,
        }}
      >
      
        {/* Descripción */}
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            mb: 3,
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            lineHeight: 1.8,
          }}
        >
          💇‍♀️ {selectedServicio?.descripcion} 🌟
        </Typography>

        {/* Galería de imágenes */}
        <Box
          sx={{
            backgroundColor: "#F8F4FF",
            padding: 2,
            borderRadius: "15px",
            mb: 4,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{ mb: 2, color: "#4B0082" }}
          >
            <PhotoLibraryIcon sx={{ mr: 1 }} />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              📸 Galería de imágenes
            </Typography>
          </Stack>
          <ImageList cols={2} gap={12}>
            {selectedServicio?.imagen.map((img, idx) => (
              <ImageListItem key={idx}>
                <img
                  src={img}
                  alt={`Imagen ${idx + 1}`}
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        {/* Botón de acción */}
        
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={compartirEnWhatsApp}
            sx={{
              backgroundColor: "#FF69B4",
              fontWeight: "bold",
              borderRadius: "30px",
              fontSize: "1rem",
              px: 4,
              py: 1.5,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": { backgroundColor: "#FF1493" },
            }}
            // startIcon={<WhatsAppIcon sx={{ fontSize: "1.5rem" }} />}
          >
            ¡RESERVA TU CITA AHORA!
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ModalServicio;