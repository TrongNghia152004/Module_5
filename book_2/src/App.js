import './App.css';
import {BookList} from "./component/BookList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddBook} from "./component/addBook";
import {EditBook} from "./component/editBook";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookList/>}/>
                    <Route path="/addBook" element={<AddBook/>}/>
                    <Route path="/editBook/:id" element={<EditBook/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
