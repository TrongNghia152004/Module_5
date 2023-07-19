import {useNavigate} from "react-router-dom";
import {payment} from "./service/CartService";
import {toast} from "react-toastify";
import {useEffect} from "react";

export const PaymentStatus = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const totalPrice = localStorage.getItem("totalPrice")

    const fetchApiPaymentStatus = async () => {
        try {
            const paymentForm = {
                totalPrice: totalPrice,
            }
             await payment(paymentForm , token);
            toast.success("Thanh toán thành công", { autoClose: 3000 });
            navigate(`/order-detail/${totalPrice}`)
        } catch (error) {
            if (error.response.status === 400) {
                toast.error(`Thanh toán thất bại, ${error.response.data.message} sản phẩm`, { autoClose: 3000 })
            }
            navigate("/cart")

        }
    }
    useEffect(() => {
        fetchApiPaymentStatus()
    }, [])
}