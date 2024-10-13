import './App.css';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/Sections/Main/Main";
import {Skills} from "./layout/Sections/Skills/Skills";
import {Works} from "./layout/Sections/works/Works";
import {Testimony} from "./layout/Sections/testimony/Testimony";
import {Contact} from "./layout/Sections/contacts/Contacts";

function App() {
    return (
        <div className="App">
           <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
        </div>
    )
}

export default App;
