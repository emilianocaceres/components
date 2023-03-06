import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "./CardObjetives.styles";
import BarChartIcon from "@mui/icons-material/BarChart";

const CardObjetives = () => {

  const { _circle, _cardStack, _cardContainer, _cardFooter, _textCircle } =
    useStyles();

  return (
    <Box
      sx={{
        marginTop: 10,
      }}
    >
      <Box className={_circle}>
        <Typography
          className={_textCircle}
          sx={{
            color: "#ffffff",
            fontSize: 45,
            fontWeight: "bold",
          }}
        >
          1
        </Typography>
      </Box>
      <Stack className={_cardStack}>
        <Box className={_cardContainer}>
          <Typography
            sx={{
              color: "#1e1e1e",
              fontSize: 20,
              textAlign: "center",
              marginX: 2,
             
            }}
          >
            ODS 7: Energía Asequible y no contaminante
          </Typography>
        </Box>
        <Box className={_cardFooter}>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: 15,
              textAlign: "center",
              marginX: 2,
            }}
          >
            Ver metas e indicadores
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardObjetives;
