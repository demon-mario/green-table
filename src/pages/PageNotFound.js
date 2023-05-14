import { Box } from "@mui/material";
import Layout from "../components/Layout/Layout";
import img from "../images/pagenotfound.jpg";

const PageNotFound = () => {
  return (
    <Layout>
      {/* <Box component="img" image={img} alt="Page Not Found"></Box> */}
      <Box
        container="div"
        className="home"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "contain",
        }}
      ></Box>
    </Layout>
  );
};

export default PageNotFound;
