import {Header} from "./Header";
import {Footer} from "./Footer";

export function Home(){
    return(
        <>
            <Header/>
                <div className="container-fluid">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="/image/hinh-nen-onepiece_035403397.jpg"
                                    className="d-block w-100 img-carousel"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="/image/mo-hinh-anime-dep-ha-noi.jpg"
                                    className="d-block w-100 img-carousel"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2 font">
                            <h2 className="font-size">MÔ HÌNH ONEPIECE</h2>
                        </div>
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2">
                            <div className="col-xl-3 col-md-6 col-12 m-b-20">
                                <div className="card">
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2">
                            <div className="col-xl-3 col-md-6 col-12 m-b-20">
                                <div className="card">
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2">
                            <div className="col-xl-3 col-md-6 col-12 m-b-20">
                                <div className="card">
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small p-2">
                            <div className="col">
                                <div className="btn-show">
                                    <button className="btn btn-sm btn-shower">XEM THÊM</button>
                                </div>
                            </div>
                        </div>
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2 font">
                            <h2 className="font-size">MÔ HÌNH NARUTO</h2>
                        </div>
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2">
                            <div className="col-xl-3 col-md-6 col-12 m-b-20">
                                <div className="card">
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2">
                            <div className="col-xl-3 col-md-6 col-12 m-b-20">
                                <div className="card">
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2">
                            <div className="col-xl-3 col-md-6 col-12 m-b-20">
                                <div className="card">
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-1.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                                    <img src="/image/sp-2.jpg" className="card-img-top" alt="" />
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
                        <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small p-2">
                            <div className="col">
                                <div className="btn-show">
                                    <button className="btn btn-sm btn-shower">XEM THÊM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
            </>
    )
}