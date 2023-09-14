import React, {useState, useEffect} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitchTheme from "./Components/SwitchTheme";





function App() {
  const [tema, setTema] = useState(getInitialTheme)


  useEffect(() => {
    localStorage.setItem("tema", JSON.stringify(tema));
  }, [tema]);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("tema");
    return savedTheme ? JSON.parse(savedTheme) : temaClaro;
  }


  const toggletema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggletema}>
        <SwitchTheme tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
