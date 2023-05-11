import axios from "axios";

export const findAllContract = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/contract`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const saveContract = async (facility) => {
    try {
        await axios.post(`http://localhost:3000/contract`, facility);
    } catch (error) {
        console.log(error)
    }
}
