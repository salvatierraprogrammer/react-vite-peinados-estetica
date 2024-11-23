import React, { useState } from 'react';
import { Fab, Modal, Typography, Box, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';

function ButtonWhatsapp() {
  const [open, setOpen] = useState(true); // Modal abierto por defecto
  const message = '¡Hola! Estoy interado/a en el proyecto web Peinados a domicilio.'; // Mensaje inicial
  const phoneNumber = "+5491131034391";
  const handleClose = () => setOpen(false); // Cierra el modal

  return (
    <>
      {/* Modal de Aviso */}
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, // Fondo oscuro pero translúcido
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            bottom: '140px',
            right: '20px',
            width: '280px',
            bgcolor: '#FD73FC', // Color de fondo consistente con la marca
            color: 'white',
            p: 3,
            borderRadius: '12px',
            boxShadow: 24,
            textAlign: 'center',
            zIndex: 1001,
            fontWeight: 'bold',
          }}
        >
          {/* Botón de cerrar modal */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              color: '#fff',
              backgroundColor: '#FF69B4',
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: '#FF1493',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {/* Contenido del modal */}
          <Typography variant="body2" sx={{ mb: 1 }}>
          💣 <strong>Consultas sin Cargo</strong>
          </Typography>
          <Typography
  variant="body2"
  sx={{
    mb: 1,
    textAlign: "center", // Centra horizontalmente
    lineHeight: 1.5, // Mejora la separación entre líneas
    fontSize: { xs: "0.9rem", md: "1rem" }, // Tamaño adaptable según pantalla
  }}
>
  <Box component="span" sx={{ fontWeight: "bold", display: "inline-block" }}>
    De Lunes a Viernes
  </Box>
  : 8 AM a 17:00 hs <br />
  <Box component="span" sx={{ fontWeight: "bold", display: "inline-block" }}>
    Sábado
  </Box>
  : 9 AM a 12 AM
</Typography>
          <Typography variant="body2">
            ¡Hablemos por WhatsApp para coordinar una cita!
          </Typography>
        </Box>
      </Modal>

      {/* Botón de WhatsApp flotante */}
      <Fab
        color="success"
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        sx={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          backgroundColor: '#25D366', // Color característico de WhatsApp
          color: 'white',
          zIndex: 1000,
          borderRadius: '50%',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#128C7E', // Color de hover más oscuro
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: '2.5rem' }} />
      </Fab>
    </>
  );
}

export default ButtonWhatsapp;