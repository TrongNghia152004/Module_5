import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const save = async (book) => {
    try {
        await axios.post(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books`, {...book});
        alert("Thêm mới thành công!")
    } catch (error) {
        console.log(error)
    }
}
export const edit = async (id, book) => {
    try {
        await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
        alert("Cập nhật thành công!")
    } catch (error) {
        console.log(error);
    }
}
export const remove = async (id) => {
    try {
        await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`)
        alert("Xoá thành công!")
    } catch (error) {
        console.log(error)
    }
}
export const findById = async (id) => {
    try {
        const book = await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
        return book.data;
    } catch (error) {
        console.log(error);
    }
}