import axios from "axios";

export const findAllProduct = async (request) => {
    try {
        const rs = (await axios.get("http://localhost:8080/api/public/product?page="
            + request.page +
            "&name=" + request.name +
            "&idType=" + request.idType)).data;
        return rs
    } catch (e) {
        console.log(e)
    }
}
export const findProductById = async (id) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/public/product/detail/` + id);
        return rs.data;
    } catch (e) {
        console.log(e)
    }
}
export const createProduct = async (values , auth) => {
    const headers = {Authorization: "Bearer " + auth}
    try {
        await axios.post(`http://localhost:8080/api/public/product/create` , values , {headers});
    } catch (e) {
        console.log(e)
    }
}