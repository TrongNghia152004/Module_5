import axios from "axios";
import Swal from "sweetalert2";

export const addCart = async (cart, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.post(`http://localhost:8080/api/public/cart/add`, {...cart}, {headers})
        Swal.fire({
            title: 'Thông báo',
            text: 'Thêm thành công sản phẩm vào giỏ hàng!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    } catch (e) {
        Swal.fire({
            title: 'Thông báo',
            text: 'Sản phẩm trong kho đã hết!',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}

export const findCartByCustomerId = async (auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        const result = await axios.get(`http://localhost:8080/api/public/cart`, {headers});
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const updateCart = async (cart, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.put(`http://localhost:8080/api/public/cart/update`, {...cart}, {headers});
    } catch (e) {
        Swal.fire({
            title: 'Thông báo',
            text: 'Sản phẩm trong kho đã hết!',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}
export const deleteCart = async (id, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.delete(`http://localhost:8080/api/public/cart/delete/` + id, {headers});
    } catch (e) {
        console.log(e);
    }
}