import { Box, Button, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import bgImage from "../images/Home/home_img_6.jpg";

const Home = () => {
  const navigate = useNavigate();

  const orderNowHandler = (event) => {
    event.preventDefault();
    navigate("/menu");
  };

  return (
    <Layout>
      <Box
        container="div"
        className="home"
        sx={{ backgroundImage: `url(${bgImage})` }}
      >
        <Box container="img">
          <Box className="home-container">
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "40px", lg: "70px" } }}
            >
              Green Table
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: { xs: "20px", lg: "40px" } }}
            >
              Best Food in India
            </Typography>
            <Button
              variant="contained"
              data-testid="order-now-btn"
              onClick={orderNowHandler}
            >
              Order Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
