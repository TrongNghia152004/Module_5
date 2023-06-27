import {useContext, useEffect, useState} from "react";
import * as CartService from "../service/CartService";
import {Link} from "react-router-dom";
import * as CustomerService from "../service/CustomerService";
import {ValueIconCartContext} from "./ValueIconCartContext";

export function Cart() {
    const [carts, setCarts] = useState([]);
    const token = localStorage.getItem("token");
    const [customer, setCustomer] = useState();
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext)
    const [cart] = useState({
        quantity: 1,
        figureProduct: ""
    })
    // useEffect(() => )
    const findAllCart = async ()=>{
        try {
            const result = await CartService.findCartByCustomerId(token);
            setCarts(result);
            const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
            setIconQuantity(totalQuantity);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
      findAllCart()
    }, []);
    useEffect(() => {
        (async () => {
            const result = await CustomerService.findCustomer(token);
            setCustomer(result);
        })()
    }, []);
    const totalPrice = carts.reduce((total, cart) => {
        return total + cart?.figureProduct?.price * cart?.quantity;
    }, 0);
    const decreaseQuantity = async (cartIndex) => {
        const updatedCarts = [...carts];
        if (updatedCarts[cartIndex].quantity > 1) {
            updatedCarts[cartIndex].quantity -= 1;
            setCarts(updatedCarts);
            try {
                await CartService.updateCart({
                    ...cart,
                    quantity: updatedCarts[cartIndex].quantity,
                    figureProduct: updatedCarts[cartIndex].figureProduct?.id
                }, token);

            }catch (e) {

            }

        }
    };
    const increaseQuantity = async (cartIndex) => {
        const updatedCarts = [...carts];
        updatedCarts[cartIndex].quantity += 1;
        setCarts(updatedCarts);
        await CartService.updateCart({
            ...cart,
            quantity: updatedCarts[cartIndex].quantity,
            figureProduct: updatedCarts[cartIndex].figureProduct?.id
        }, token);

    };
    const handleInputChange = async (event, cartIndex) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            const updatedCarts = [...carts];
            updatedCarts[cartIndex].quantity = newQuantity;
            setCarts(updatedCarts);
            await CartService.updateCart({
                ...cart,
                quantity: updatedCarts[cartIndex].quantity,
                figureProduct: updatedCarts[cartIndex].figureProduct?.id
            }, token);


        }
    };
    console.log(carts)
    return (
        <>
            <div className="container cart-margin">
                <div className="card ">
                    <div className="row" style={{display: "flex"}}>
                        <div className="col-md-8 cart">
                            <div className="title-cart">
                                <div className="row">
                                    <div className="col">
                                        <h4>
                                            <b>Giỏ hàng</b>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom">
                                {carts.map((cart, index) => (
                                    <div className="row main align-items-center" key={index}>
                                        <div className="col-2">
                                            <img className="img-cart-hihi img-fluid"
                                                 src={cart?.figureProduct?.imgFigure}/>
                                        </div>
                                        <div className="col">
                                            <div className="row text-muted">{cart?.figureProduct?.name}</div>
                                        </div>
                                        <div className="col">
                                            <a className="a-cart"
                                               onClick={() => decreaseQuantity(index)}>-</a>
                                            <input type="text" onChange={(event) => handleInputChange(event, index)}
                                                   className="input-c" value={cart.quantity}/>
                                            <a className="a-cart" onClick={() => increaseQuantity(index)}>+</a>
                                        </div>
                                        <div className="col">
                                            {(cart.quantity * cart?.figureProduct?.price).toLocaleString("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="back-to-shop">
                                <Link to="/home" className="a-cart">←</Link>
                                <span className="text-muted">Trang chủ</span>
                            </div>
                        </div>
                        <div className="col-md-4 summary">
                            <div>
                                <h5 className="h5-cart">
                                    <b>Đơn hàng</b>
                                </h5>
                            </div>
                            <hr className="hr-cart"/>
                            <form className="form-cart">
                                <div className="col" style={{paddingLeft: 0}}>
                                    Giao đến : {customer?.address}
                                </div>
                            </form>
                            <div
                                className="row"
                                style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}
                            >
                                <div className="col item">Tổng tiền : {totalPrice.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                })}</div>
                            </div>
                            <button className="btn-cart">Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}