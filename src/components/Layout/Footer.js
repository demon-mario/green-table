import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#1A1A19",
        color: "white",
        p: 3,
      }}
    >
      <Box>
        <IconButton
          size="large"
          color="inherit"
          sx={{
            p: 0,
            m: 0,
            "&:hover": {
              color: "goldenrod",
              transform: "scale(1.1)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon sx={{ fontSize: "40px" }} />
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          sx={{
            p: 1,
            m: 0,
            "&:hover": {
              color: "goldenrod",
              transform: "scale(1.1)",
              transition: "all 400ms",
            },
          }}
        >
          <TwitterIcon sx={{ fontSize: "40px" }} />
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          sx={{
            p: 0,
            m: 0,
            "&:hover": {
              color: "goldenrod",
              transform: "scale(1.1)",
              transition: "all 400ms",
            },
          }}
        >
          <GitHubIcon sx={{ fontSize: "40px" }} />
        </IconButton>
      </Box>

      <Box>
        <Typography variant="h5" sx={{ fontSize: { xs: "1rem", lg: "2rem" } }}>
          All Rights Reserved &copy; Green Table
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
