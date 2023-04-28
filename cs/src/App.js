import './App.css';
import {Header} from "./component/header";
import {Footer} from "./component/footer";
import {Service_list} from "./component/service_list";

function App() {
    return (
        <div className="App">
            <Header/>
            <Service_list/>
            <Footer/>
        </div>
    );
}

export default App;
