import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CardMinisrty = () => {
  return (
    <Box
      sx={{
        width: 400,
        height: 200,
        background:
          "linear-gradient(90deg, rgba(67,118,170,1) 0%, rgba(75,133,180,1) 35%, rgba(87,155,194,1) 100%)",
          transform: "matrix(1, 0, 0, 1, 0, 0)",
        borderRadius: 3,
        '&:hover': {
            
            transform: "matrix(1, 0.30, 0, 1, 0, 0)",
            transition: "all 0.3s ease-in-out",
            cursor:'pointer',
            boxShadow: "0px 0px 15px #706F6F",
        }
        
      }}
    >
      <Stack
        direction="row"
        sx={{
            width: "90%",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            //transform: "matrix(1, -0.3, 0, 1, 0, 0)",
            
        }}
      >
        <Stack
          sx={{
            marginBottom:4
          }}
        >
          <Typography sx={{paddingLeft:4, fontSize:20,  color:'white', fontWeight:'bold'}}>Ministerio de jefatura de gabinete</Typography>
          <Typography sx={{paddingLeft:4, fontSize:20, fontWeight:'400', color:'white'}}>Total objetivos: 10</Typography>
        </Stack>
        <Box
            sx={{
                width: 70,
                height: 70,
                borderRadius: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
            }}
        >
            <Box
                  sx={{
                    width: 70,
                    height: 70,

                    border:2,
                    borderColor:'white',
                    borderRadius: 60,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position:'absolute'
            
                    
                }}
            >
                <Typography
                  sx={{
                    fontSize: 25,
                    color: "white",
                  }}
                >50%</Typography>
            </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardMinisrty;
