import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const ModalCarga = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Box sx={{ textAlign: "center", color: "#fff" }}>
        <CircularProgress color="inherit" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Cargando...
        </Typography>
      </Box>
    </Box>
  );
};

export default ModalCarga;