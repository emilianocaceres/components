import { Box } from "@mui/material";
import React from "react";
import CardMinisrty from "../../components/CardMinistry/CardMinisrty";
import CardObjetives from "../../components/CardObjetives/CardsObjetives";

const Home = () => {
  return (
    <div>
      <h1>Componentes U.P.S.T.I</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <CardObjetives />

        <Box
          sx={{
            marginLeft:8,
            marginTop: 15,
          }}
        >
          <CardMinisrty />
        </Box>
      </div>
    </div>
  );
};

export default Home;
