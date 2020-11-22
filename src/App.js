import { AppBar, ThemeProvider, Toolbar } from "@material-ui/core";
import React from "react";
import Auth from "./Components/Auth/Auth.js";
import Theme from "./Components/theme";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Auth title="Login" />
    </ThemeProvider>
  );
}
