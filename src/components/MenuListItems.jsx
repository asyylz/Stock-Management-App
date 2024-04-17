import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useNavigate } from "react-router-dom";

const icon = (name) => `/assets/navbar/${name}.svg`;

const links = [
  {
    title: "Dashboard",
    url: "/stock",
    // icon:"/assets/navbar/ic_analytics.svg"
    icon: icon("ic_analytics"),
  },
  {
    title: "Purchases",
    url: "/stock/purchases",
    icon: icon("purchase"),
  },
];

const iconStyle = {
  color: "secondary.main",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "secondary.main",
    color: "white",
  },
};
const selectedStyle = {
  backgroundColor: "secondary.second",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "secondary.main",
    color: "secondary.second",
  },
  color: "white",
};

const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Toolbar />
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => navigate(item.url)} sx={{backgroundColor:"black"}}>
              <ListItemIcon>
                <Box />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
