import './App.css';
import {Home} from "./component/Home";
import {Cart} from "./component/Cart";
import {Login} from "./component/Login";
import {Route, Routes} from "react-router-dom";
import {Product} from "./component/Product";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import { QuantityProvider } from "./component/ValueIconCartContext";
import {FigureDetail} from "./component/FigureDetail";

function App() {
    return (
        <>
            <QuantityProvider>
                <Header/>
                <Routes>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/product"} element={<Product/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/detail/:id"} element={<FigureDetail/>}/>
                </Routes>
                <Footer/>
            </QuantityProvider>
        </>
    );
}

export default App;
