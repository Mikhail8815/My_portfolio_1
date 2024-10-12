import './App.css';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/Sections/Main/Main";
import {Skills} from "./layout/Sections/Skills/Skills";
import {Works} from "./layout/Sections/works/Works";

function App() {
    return (
        <div className="App">
           <Header />
            <Main />
            <Skills />
            <Works/>
        </div>
    )
}

export default App;
