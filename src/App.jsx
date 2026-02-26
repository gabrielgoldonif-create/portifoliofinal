import { createGlobalStyle } from "styled-components";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #ffffff;
  }

  h1, h2, h3 {
    font-family: 'Sora', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;