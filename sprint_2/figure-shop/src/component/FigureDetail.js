import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import * as CartService from "../service/CartService";
import {ValueIconCartContext} from "./ValueIconCartContext";
import Swal from "sweetalert2";

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
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handleInputChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            setQuantity(newQuantity);
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
            await CartService.addCart({...cart, figureProduct: id}, token);
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
                                        <div className="row">
                                            <div className="col">
                                                <button className="button-add" onClick={() => handleAddCart(figure?.id)}>THÊM VÀO GIỎ HÀNG</button>
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <div className="col">
                                                <button className="button-add">MUA NGAY</button>
                                            </div>
                                        </div>
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
                <div className="row">
                    <div className="col font">
                        <h2 className="font-size">SẢN PHẨM TƯƠNG TỰ</h2>
                    </div>
                </div>
                <div className="row mx-5 p-2">
                    <div className="col-xl-3 col-md-6 col-12 m-b-20">
                        <div className="card">
                            <img src="/image/sp-1.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">MÔ HÌNH ANIME</h5>
                                <p className="card-text">
                                    Mô hình Luffy và các bại tướng chất lượng- cao 48 cm – ngang 40
                                    cm – nặng 7 kg – Có Hộp carton – Box xốp
                                </p>
                                <p className="card-price">5.000.000 đ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 m-b-20">
                        <div className="card">
                            <img src="/image/sp-1.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">MÔ HÌNH ANIME</h5>
                                <p className="card-text">
                                    Mô hình Wcf Luffy Zoro Sanji Nami Choper Usopp Law Kin’emon Sư
                                    Tử vàng Otama- Cao 5cm – No Box
                                </p>
                                <p className="card-price">10.000.000 đ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 m-b-20">
                        <div className="card">
                            <img src="/image/sp-2.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">MÔ HÌNH ANIME</h5>
                                <p className="card-text">
                                    Mô Hình One Piece Enel Chúa Trời trạng thái chiến đấu cao 35cm
                                    nặng 4.9kg – Có Hộp Màu
                                </p>
                                <p className="card-price">7.500.000 đ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 m-b-20">
                        <div className="card">
                            <img src="/image/sp-2.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">MÔ HÌNH ANIME</h5>
                                <p className="card-text">
                                    Mô Hình One Piece Enel Chúa Trời trạng thái chiến đấu cao 35cm
                                    nặng 4.9kg – Có Hộp Màu
                                </p>
                                <p className="card-price">7.500.000 đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}