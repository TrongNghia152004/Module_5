import axios from "axios";

export const findCustomer = async (auth) => {
    const headers = { Authorization: "Bearer " + auth}
    try {
        const result = await axios.get(`http://localhost:8080/api/user/customer` , {headers});
        return result.data;
    }catch (e){
        console.log(e);
    }
}