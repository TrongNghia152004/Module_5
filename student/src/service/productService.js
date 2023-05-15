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
        await axios.put(`http://localhost:8080/products/${id}`, {...product});
    } catch (error) {
        console.log(error);
    }
}
// export const search = async (name, typeProduct) => {
//     try {
//         const result = await axios.get(`http://localhost:3000/products?name_like=${name}&typeProduct=${typeProduct}`);
//         return result.data;
//     } catch (error) {
//         console.log(error);
//     }
// }
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
// export const findByNameContaining = async (name) => {
//     try {
//         const result = await axios.get(`http://localhost:3000/products?name_like=${name}`);
//         return result.data;
//     } catch (error) {
//         console.log(error);
//     }
// }