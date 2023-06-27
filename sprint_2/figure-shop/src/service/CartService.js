import axios from "axios";

export const addCart = async (cart, auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.post(`http://localhost:8080/api/public/cart/add`, {...cart}, {headers})
    } catch (e) {
        console.log(e);
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
        await axios.put(`http://localhost:8080/api/public/cart/update`, {...cart} , {headers});
    } catch (e) {
        console.log(e);
    }
}