import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Product} from "./component/product";
import {UpdateProduct} from "./component/updateProduct";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Product/>}/>
                    <Route path={"/:id"} element={<UpdateProduct/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
