import { Fragment, useState } from "react";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212"
      }
    }
  })

  function ToggleDarkMode() {
    setDarkMode(!darkMode)
  };


  return (
    <Fragment>
      <ThemeProvider theme={theme} >
        <ToastContainer position="bottom-right" theme="colored" hideProgressBar />
        <CssBaseline />
        <Header darkMode={darkMode} ToggleDarkMode={ToggleDarkMode} />
        <Container>
          <Outlet />
        </Container>
      </ThemeProvider>

    </Fragment>
  )
}

export default App
