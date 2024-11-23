import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

const ModalConoceMas = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "20px",
          backgroundColor: "#FDF3F0",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          color: "#4B0082",
        },
      }}
    >
      {/* Título del modal */}
      <DialogTitle
        sx={{
          backgroundColor: "#FD73FC",
          color: "#fff",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", md: "2rem" },
          textAlign: "center",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          py: 2,
        }}
      >
        Conocé Más ✨
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Contenido del modal */}
      <DialogContent
        sx={{
          p: 3,
          textAlign: "center",
          color: "#4B0082",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          Descubrí nuestros tratamientos personalizados 💇‍♀️, diseñados para
          resaltar tu belleza natural. Cuidamos cada detalle para que te sientas
          única y especial. 💖
        </Typography>
        <Box
          sx={{
            backgroundColor: "#F8F4FF",
            padding: 2,
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PhotoLibraryIcon sx={{ fontSize: "3rem", color: "#8C52FE", mb: 1 }} />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            📸 Mirá nuestra galería de transformaciones
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ModalConoceMas;