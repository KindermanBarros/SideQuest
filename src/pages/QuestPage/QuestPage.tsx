import React from "react";
import HeaderAluno from "../../shared/components/HeaderAluno/HeaderAluno";
import { Box, Button, Typography } from "@mui/material";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import HttpsIcon from "@mui/icons-material/Https";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

function QuestPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <HeaderAluno />
      <Typography
        sx={{
          marginTop: "100px",
          fontWeight: "bold",
          fontSize: "30px",
          marginRight: "40%",
        }}
      >
        Introdução a programação web: HTML
      </Typography>
      <Box
        sx={{
          bgcolor: "#05445E",
          height: "300px",
          width: "65%",
          borderRadius: "10px",
          border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            sx={{
              borderRadius: "50%",

              height: "60px",
              bgcolor: "#d4f1f4",
              marginLeft: "20px",
              marginTop: "1px",
            }}
          >
            <NotStartedIcon />
          </Button>
          <Button
            sx={{
              borderRadius: "50%",

              height: "60px",
              bgcolor: "#c6c6c6",
              marginLeft: "60px",
              marginTop: "90px",
            }}
          >
            <HttpsIcon />
          </Button>

          <Button
            sx={{
              borderRadius: "50%",

              height: "60px",
              bgcolor: "#c6c6c6",
              marginLeft: "75px",
              marginTop: "80px",
            }}
          >
            <HttpsIcon />
          </Button>

          <Button
            sx={{
              borderRadius: "50%",

              height: "60px",
              bgcolor: "#c6c6c6",
              marginLeft: "60px",
              marginTop: "40px",
            }}
          >
            <HttpsIcon />
          </Button>

          <Button
            sx={{
              borderRadius: "50%",

              height: "60px",
              bgcolor: "#c6c6c6",
              marginLeft: "60px",
              marginTop: "40px",
            }}
          >
            <HttpsIcon />
          </Button>

          <Button
            sx={{
              borderRadius: "50%",

              height: "60px",
              bgcolor: "#c6c6c6",
              marginLeft: "60px",
              marginTop: "90px",
            }}
          >
            <HttpsIcon />
          </Button>
          <Button
            sx={{
              borderRadius: "50%",

              height: "60px",
              bgcolor: "#c6c6c6",
              marginLeft: "60px",
              marginTop: "40px",
            }}
          >
            <SportsScoreIcon color="success" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default QuestPage;
