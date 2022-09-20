import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke",
// };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App tab="home" />
  </ThemeProvider>
);
