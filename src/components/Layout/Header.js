import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/Header.css";
import DrawerMenu from "./DrawerMenu";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const favCount = useSelector((state) => state.fav.favCount);
  const theme = useSelector((state) => state.theme.theme);

  const isChecked = useSelector((state) => state.theme.switchBtn);

  // console.log("theme", theme);
  const drawerHandler = () => {
    setIsOpen(!isOpen);
  };

  const themeSwitchHandler = (event) => {
    event.preventDefault();

    if (event.target.checked) {
      // console.log("dark mode");
      dispatch(themeActions.setTheme("dark"));
      dispatch(themeActions.setSwitchBtn(true));
    } else {
      // setIsDarkMode(false);

      // console.log("light mode");
      dispatch(themeActions.setTheme("light"));
      dispatch(themeActions.setSwitchBtn(false));
    }
  };

  return (
    // The flex-grow property specifies how much the item will grow relative to the rest of the flexible items inside the same container.
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={drawerHandler}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Green Table
          </Typography>
          <Box>
            <ul className="navigation-menu">
              <li>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {theme === "light" && <LightModeIcon />}
                  <Switch checked={isChecked} onChange={themeSwitchHandler} />
                  {theme === "dark" && <DarkModeIcon />}
                </Box>
              </li>
            </ul>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Link to={"/green-table"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              {/* <li>
                <Badge badgeContent={favCount} color="secondary">
                  <FavoriteIcon color="action" sx={{ color: "red" }} />
                </Badge>
              </li> */}
            </ul>
          </Box>
          <Box>
            <ul>
              <li>
                <Badge badgeContent={favCount} color="secondary">
                  <FavoriteIcon color="action" sx={{ color: "red" }} />
                </Badge>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerMenu isOpen={isOpen} drawerHandler={drawerHandler} />
    </Box>
  );
};

export default Header;
