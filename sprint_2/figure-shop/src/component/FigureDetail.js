import {useParams} from "react-router";
import {useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";

export function FigureDetail() {
    const param = useParams();
    const [figure, setFigure] = useState(null);
    useEffect(() => {
        (async () => {
            console.log(param.id);
            const result = await ProductService.findProductById(param.id);
            setFigure(result);
        })()
    }, [param.id])
    if (!figure) {
        return null;
    }
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
                                                <div>
                                                <a className="a-cart"
                                                >-</a>
                                                <input type="text"
                                                       className="input-c"/>
                                                <a className="a-cart">+</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="col-7">
                                            <div className="row">
                                                <div className="col">
                                                    <button className="button-add">THÊM VÀO GIỎ HÀNG</button>
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