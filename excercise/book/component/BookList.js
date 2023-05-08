import {useEffect, useState} from "react";
import * as BookService from "../service/BookService";
import {Link} from "react-router-dom";

export function BookList() {
    const [bookList, setBookList] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            let result = await BookService.findAll();
            setBookList(result);
        }
        fetchApi();
    }, []);
    const handleDelete = async (id) => {
        await BookService.remove(id);
        let result = await BookService.findAll();
        setBookList(result);
    };
    return (
        <>
            <div>
                <h1>Thư viện sách</h1>
                <Link className="btn btn-primary btn-sm" to={"/addBook"}>
                    Thêm mới sách
                </Link>
            </div>
            <div>
                <table className="table table-border table-striped">
                    <thead>
                    <tr>
                        <th>Tên sách</th>
                        <th>Số lượng</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookList.map((book, index) => (
                        <tr key={index}>
                            <th>{book.title}</th>
                            <th>{book.quantity}</th>
                            <th>
                                <Link className="btn btn-primary btn-sm" to={`/editBook/${book.id}`}>
                                    Sửa
                                </Link>
                            </th>
                            <th>
                                <a className="btn btn-danger btn-sm" onClick={() => handleDelete(book.id)}>
                                    Xoá
                                </a>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}