import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/products`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const update = async (id, product) => {
    try {
        await axios.put(`http://localhost:8080/products/update/${id}`, {...product});
    } catch (error) {
        console.log(error);
    }
}
export const findAllTypeProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/product-type`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/products/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/products/${id}`);
    } catch (error) {
        console.log(error);
    }
}
export const create = async (product) => {
    try {
        await axios.post(`http://localhost:8080/products`, product);
    } catch (error) {
        console.log(error);
    }
}