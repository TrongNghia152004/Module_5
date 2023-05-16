import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Product} from "./component/product";
import {UpdateProduct} from "./component/updateProduct";
import {CreateProduct} from "./component/createProduct";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Product/>}/>
                    <Route path={"/create"} element={<CreateProduct/>}/>
                    <Route path={"/update/:id"} element={<UpdateProduct/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
