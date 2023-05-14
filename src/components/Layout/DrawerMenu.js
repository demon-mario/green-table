import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HouseIcon from "@mui/icons-material/House";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupsIcon from "@mui/icons-material/Groups";
import { useNavigate } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import "../../styles/DrawerMenu.css";

const DrawerMenu = (props) => {
  const navigate = useNavigate();

  const homeBtnClickHandler = () => {
    navigate("/green-table");
  };
  const aboutBtnClickHandler = () => {
    navigate("/about");
  };
  const contactBtnClickHandler = () => {
    navigate("/contact");
  };
  const menuBtnClickHandler = () => {
    navigate("/menu");
  };

  return (
    <Drawer anchor="left" open={props.isOpen} onClose={props.drawerHandler}>
      <List className="drawer-menu" sx={{ mr: 10 }}>
        <ListItem key="Home" disablePadding>
          <ListItemButton onClick={homeBtnClickHandler}>
            <ListItemIcon>
              <HouseIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="About" disablePadding>
          <ListItemButton onClick={aboutBtnClickHandler}>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Contact" disablePadding>
          <ListItemButton onClick={contactBtnClickHandler}>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Menu" disablePadding>
          <ListItemButton onClick={menuBtnClickHandler}>
            <ListItemIcon>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
