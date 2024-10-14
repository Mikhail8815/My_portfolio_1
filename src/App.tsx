import './App.css';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/Sections/Main/Main";
import {Skills} from "./layout/Sections/Skills/Skills";
import {Works} from "./layout/Sections/works/Works";
import {Testimony} from "./layout/Sections/testimony/Testimony";
import {Contact} from "./layout/Sections/contacts/Contacts";
import {Slogan} from "./layout/Sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
           <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
            <Slogan />
            <Footer />
        </div>
    )
}

export default App;
