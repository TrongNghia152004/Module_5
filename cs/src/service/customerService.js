import axios from "axios";

export const findAllCustomer = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/customer`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const saveCustomer = async (facility) => {
    try {
        await axios.post(`http://localhost:3000/customer`, facility);
    } catch (error) {
        console.log(error)
    }
}
export const updateCustomer = async (id, facility) => {
    try {
        await axios.put(`http://localhost:3000/customer/${id}`, {...facility});
    } catch (error) {
        console.log(error);
    }
}
export const deleteCustomer = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/customer/${id}`);
    } catch (error) {
        console.log(error);
    }
}
export const findCustomerById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3000/customer/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const findAllTypeCustomer = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/typeCustomer`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}