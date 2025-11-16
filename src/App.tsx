import "./App.css";
import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Sections/Main/Main";
import { Skills } from "./layout/Sections/Skills/Skills";
import { Works } from "./layout/Sections/works/Works";
import { Principles } from "./layout/Sections/Principles/Principles";
import { Contact } from "./layout/Sections/contacts/Contacts";
import { Slogan } from "./layout/Sections/slogan/Slogan";
import { Footer } from "./layout/footer/Footer";
import { Particle } from "./components/particle/Particle";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";
import { ThemeContextProvider, useTheme } from "./context/theme-context";
import { GlobalStyle } from "./styles/Global.styled";

function AppContent() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Principles />
      <Contact />
      <Slogan />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
