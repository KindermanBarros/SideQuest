import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../../shared/components/header/Header";
import Card from "../../shared/components/card/Card";

function Quests() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#05445E",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "150px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
            marginRight: "55%",
          }}
        >
          Quests
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "12px",
          }}
        >
          <Card title="HTML" subtitle="HTML" body="Hewo" buttonText="test" />
          <Card title="HTML" subtitle="HTML" body="HWEWO" buttonText="test" />
          <Card title="HTML" subtitle="HTML" body="hEWO" buttonText="test" />
        </Box>
      </Box>
    </Box>
  );
}

export default Quests;
