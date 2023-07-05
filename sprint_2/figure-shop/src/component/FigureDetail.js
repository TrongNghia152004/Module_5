import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import * as CartService from "../service/CartService";
import {ValueIconCartContext} from "./ValueIconCartContext";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

export function FigureDetail() {
    const param = useParams();
    const token = localStorage.getItem("token");
    const [figure, setFigure] = useState(null);
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext)
    const username = localStorage.getItem("username");
    useEffect(() => {
        (async () => {
            const result = await ProductService.findProductById(param.id);
            setFigure(result);
        })()
    }, [param.id]);
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        if (quantity < figure.quantity){
            setQuantity(quantity + 1);
        }else {
            Swal.fire({
                title: 'Thông báo',
                text: 'Sản phẩm trong kho không đủ!',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handleInputChange = (event) => {
            const newQuantity = parseInt(event.target.value);
            if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= figure.quantity) {
                setQuantity(newQuantity);
            }else {
                Swal.fire({
                    title: 'Thông báo',
                    text: 'Sản phẩm trong kho không đủ!',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                })
            }
    };
    useEffect(() => {
        {
            username ? (async () => {
                const result = await CartService.findCartByCustomerId(token);
                const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
                setIconQuantity(totalQuantity);
            })() : setIconQuantity(0)
        }

    }, []);
    const handleAddCart = async (id) => {
        const cart = {
            quantity: 1,
            status: true,
            figureProduct: ""
        }
        try {
            await CartService.addCart({...cart, quantity: quantity , figureProduct: id}, token);
            setIconQuantity(iconQuantity + 1)
            Swal.fire({
                title: 'Thông báo',
                text: 'Thêm thành công sản phẩm vào giỏ hàng!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } catch (err) {
            console.log(err)
        }
    }
    if (!figure) {
        return null;
    }
    console.log(quantity)
    return (
        <>
            <div className="container container-detail">
                <div className="row">
                    <div className="col-4">
                        <img src={figure?.imgFigure} alt=""/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <h2 className="detail-font">{figure.name}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <hr className="hr-detail"></hr>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th colSpan={2} style={{textAlign: "center"}}>Chi tiết sản phẩm</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th>Chiều cao:</th>
                                                <td>{figure.height}</td>
                                            </tr>
                                            <tr>
                                                <th>Trọng lượng:</th>
                                                <td>{figure.weight}</td>
                                            </tr>
                                            <tr>
                                                <th>Chất liệu:</th>
                                                <td>{figure.material}</td>
                                            </tr>
                                            <tr>
                                                <th>Giá:</th>
                                                <td>{figure.price.toLocaleString("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="div-detail">
                                        <p className="p-detail">
                                            Giá mô hình: {figure.price.toLocaleString("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        })}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="p-quantity">SỐ LƯỢNG:</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-5">
                                        <div className="row">
                                            <div className="col">
                                                <div style={{marginTop: 20}}>
                                                    <a className="a-cart" style={{fontSize: 40}}
                                                       onClick={() => handleDecrease()}
                                                    >-</a>
                                                    <input type="text" style={{fontSize: 40 , width: 40 , height: 40}}
                                                           className="input-c" onChange={(event) => {
                                                        handleInputChange(event)
                                                    }} value={quantity}/>
                                                    <a className="a-cart" style={{fontSize: 40}}
                                                       onClick={() => handleIncrease()}>+</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        {username ? (
                                            <div className="row" style={{marginTop: 20}}>
                                                <div className="col">
                                                    <button className="button-add" onClick={() => handleAddCart(figure?.id)}>THÊM VÀO GIỎ HÀNG</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="row" style={{marginTop: 20}}>
                                                <div className="col">
                                                    <Link to="/login">
                                                    <button className="button-add" >THÊM VÀO GIỎ HÀNG</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col">
                                <hr className="hr-detail"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}