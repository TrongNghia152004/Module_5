import './App.css';
import {Home} from "./component/Home";
import {Cart} from "./component/Cart";
import {Login} from "./component/Login";
import {Route, Routes} from "react-router-dom";
import {Product} from "./component/Product";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {QuantityProvider} from "./component/ValueIconCartContext";
import {FigureDetail} from "./component/FigureDetail";
import {PaymentSuccess} from "./component/PaymentSuccess";
import {HistoryShopping} from "./component/HistoryShopping";
import {InformationPersonal} from "./component/InformationPersonal";

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
                    <Route path={"/order-detail/:totalPrice"} element={<PaymentSuccess/>}/>
                    <Route path={"/user/history"} element={<HistoryShopping/>}/>
                    <Route path={"/user/information"} element={<InformationPersonal/>}/>
                </Routes>
                <Footer/>
            </QuantityProvider>
        </>
    );
}

export default App;
