import {Header} from "./Header";
import {Footer} from "./Footer";

export function FigureDetail() {
    return (
        <>
            <Header/>
            <div className="container container-detail">
                <div className="row">
                    <div className="col-4">
                        <img src="/image/sp-1.jpg" alt=""/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <h2 className="detail-font">MÔ HÌNH FIGURE - NARUTO</h2>
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
                                                <th>Tên nhân vật:</th>
                                                <td>Nghĩa đẹp trai</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th>Chiều cao:</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>Trọng lượng:</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>Chất liệu:</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>Giá:</th>
                                                <td></td>
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
                                            Giá mô hình:
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
                                            <div className="col-6">
                                                <input className="input-detail" type="number" value="0"/>
                                            </div>
                                            <div className="col-6">
                                                <div className="row">
                                                    <div className="col">
                                                        <button className="btn button-detail">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16"
                                                                 fill="currentColor"
                                                                 className="bi bi-chevron-up svg-detail"
                                                                 viewBox="0 0 16 16">
                                                                <path fillRule="evenodd"
                                                                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <button className="btn button-detail">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16"
                                                                 fill="currentColor"
                                                                 className="bi bi-chevron-down svg-detail"
                                                                 viewBox="0 0 16 16">
                                                                <path fillRule="evenodd"
                                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                            </svg>
                                                        </button>
                                                    </div>
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
            <Footer/>
        </>
    )
}