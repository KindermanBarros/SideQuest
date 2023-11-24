import { Box, Typography } from "@mui/material";
import Header from "../../shared/components/header/Header";
import RankList from "../../shared/RankList";

function Home() {
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
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "30px",
          marginRight: "55%",
        }}
      >
        RANKING
      </Typography>

      <Box
        sx={{
          bgcolor: "white",
          height: "50%",
          width: "65%",
          borderRadius: "10px",
        }}
      >
        {/* O box abaixo é para o header da div Ranking */}
        <Box
          sx={{
            borderBottom: "1px solid black",
            height: "12%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              marginLeft: "25px",
            }}
          >
            Nº
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              marginRight: "40px",
            }}
          >
            Perfil
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            Aluno
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              marginRight: "12px",
            }}
          >
            Pontuação
          </Typography>
        </Box>
        <RankList nome="Ricardo" ponto={50} rank={1} />

        <RankList nome="Fulano" ponto={45} rank={2} />

        <RankList nome="Ciclano" ponto={30} rank={3} />

        <RankList nome="Beltrano" ponto={25} rank={4} />

        <RankList nome="Murano" ponto={10} rank={5} />
      </Box>
    </Box>
  );
}

export default Home;
