import axios from "axios";

export const findAllFacility = async () => {
    try {
        const result = await axios.get(`http://localhost:3000/facility`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}
export const saveFacility = async (facility) => {
    try {
        await axios.post(`http://localhost:3000/facility`, facility);
    } catch (error) {
        console.log(error)
    }
}
export const updateFacility = async (id, facility) => {
    try {
        await axios.put(`http://localhost:3000/facility/${id}`, {...facility});
    } catch (error) {
        console.log(error);
    }
}
export const deleteFacility = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/facility/${id}`);
    } catch (error) {
        console.log(error);
    }
}
export const findFacilityById = async (id) => {
    try {
        await axios.get(`http://localhost:3000/facility/${id}`)
    } catch (error) {
        console.log(error);
    }
}