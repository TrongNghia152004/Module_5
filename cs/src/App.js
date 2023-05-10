import './App.css';
import {Header} from "./component/header";
import {Footer} from "./component/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ServiceList} from "./component/facility/service_list";
import {CreateService} from "./component/facility/create_service";

function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<ServiceList/>}/>
                <Route path="/addFacility" element={<CreateService/>}/>
                {/*<Route path="" element={}/>*/}
            </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;
