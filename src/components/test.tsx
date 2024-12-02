import { Box, Button } from "@mui/material";
import BG from "../assets/images/background.webp";
import { useNavigate } from "react-router";
import LGG from "../assets/images/lg-removebg-preview.png";
const Test = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
        // minHeight: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))`,
          width: "400px",
          height: "400px",
          position: "absolute",
          top: "20%",
          left: "10%",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 10px 10px rgba(30,30,30,0.5)",
          borderRadius: "10px",
          display: "flex",
          //   bgcolor: "white",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          p: 1,
          //   bgcolor: "red",
        }}
      >
        <img src={LGG} width={"200px"} />
        <Button variant="contained" onClick={() => navigate("/home-page")}>
          استعلام بیمه نامه
        </Button>
      </Box>
    </Box>
  );
};

export default Test;
