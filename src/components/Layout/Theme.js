import { createTheme } from "@mui/material";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Theme = () => {
  const { theme } = useContext(ThemeContext);

  const currentTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
};

export default Theme.currentTheme;
