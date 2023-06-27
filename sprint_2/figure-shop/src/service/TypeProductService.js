import axios from "axios";

export const findAllTypeProduct = async () => {
    try {
        return (await axios.get(`http://localhost:8080/api/public/product-type`)).data;
    }catch (e){
        console.log(e)
    }
}