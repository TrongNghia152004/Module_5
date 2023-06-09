import axios from "axios";

export const findByName = async (name, productType, page) => {
    try {
        const result = await axios.get(`http://localhost:8080/products?name=${name}&productType=${productType}&page=${page ? page : '0'}`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}


export const save = async (id , product) => {
    try {
        await axios.post(`http://localhost:8080/products/update/${id}`, {...product})
    } catch (error) {
        console.log(error);
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/products/detail?id=${id}`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const edit = async (product) => {
    try {
        await axios.put('http://localhost:8080/products', {...product})
    } catch (error) {
        console.log(error);
    }
}
export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/products?id=${id}`)
    } catch (error) {
        console.log(error);
    }
}
export const findAllProductType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/product-type`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}