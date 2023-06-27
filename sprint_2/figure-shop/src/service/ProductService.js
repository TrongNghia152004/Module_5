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
