import React from "react";
import AppBar from "@mui/material/AppBar";
import { Stack, Box, Divider } from "@mui/material/";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAuthCall from "../hooks/useAuthCall";
import { useSelector } from "react-redux";

function Dashboard() {
  const { logout } = useAuthCall();
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STOCK APP
          </Typography>
          <Stack>
            <p style={{ textTransform: "none" }}>
              {currentUser ? `Welcome ${currentUser}` : null}
            </p>
            <Button
              style={{ textTransform: "none" }}
              color="inherit"
              onClick={logout}
            >
              {currentUser ? "Logout" : "Login"}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Dashboard;
