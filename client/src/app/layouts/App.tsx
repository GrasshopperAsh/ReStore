import { Fragment, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";


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

  function ToggleDarkMode () {
    setDarkMode(!darkMode)
  };


  return (
    <Fragment>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Header darkMode={darkMode} ToggleDarkMode={ToggleDarkMode}/>
        <Container>
          <Catalog />
        </Container>
      </ThemeProvider>

    </Fragment>
  )
}

export default App
