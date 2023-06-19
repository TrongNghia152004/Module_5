import {Header} from "./Header";
import {Footer} from "./Footer";

export function Cart() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col div-title-cart">
                        <h2 className="title-cart">GIỎ HÀNG</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>
                                    <input type="checkbox"/>Tất cả
                                </th>
                                <th>
                                    Đơn giá
                                </th>
                                <th>
                                    Số lượng
                                </th>
                                <th>Thành tiền</th>
                                <th>Xoá</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="font-cart">
                                <td><input type="checkbox"/>Nghĩa đẹp trai khoai to</td>
                                <td>128.000đ</td>
                                <td>
                                    <div className="row">
                                        <div className="col counter">
                                            <button id="decrement">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-dash svg-cart"
                                                     viewBox="0 0 16 16">
                                                    <path
                                                        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                                </svg>
                                            </button>
                                            <span id="count">0</span>
                                            <button id="increment">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18"
                                                     fill="currentColor" className="bi bi-plus-lg svg-cart"
                                                     viewBox="0 0 16 16">
                                                    <path fillRule="evenodd"
                                                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    128.000đ
                                </td>
                                <td>
                                    <button className="btn svg-delete">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path
                                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                        </svg>
                                    </button>
                                </td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3">
                        <div className="background-cart container">
                            <div className="row">
                                <div className="col">
                                    <h5 className="title-h5">Giao tới</h5>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col">
                                    <h5 className="title-h5">Nguyễn Văn An | 0898175813</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h5 className="font-address">k03/10 Vạn Tường</h5>
                                </div>
                            </div>
                        </div>
                        <div className="container background-cart margin-cart">
                            <div className="row">
                                <div className="col-9">
                                    <span className="left">Tạm tính</span>
                                </div>
                                <div className="col-3"><span className="right">251.000đ</span></div>
                            </div>
                            <div className="row">
                                <div className="col-9">
                                    <span className="left">Giảm giá</span>
                                </div>
                                <div className="col-3"><span className="right">0đ</span></div>
                            </div>
                            <div className="row">
                                <hr/>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <span className="left">Tổng cộng</span>
                                </div>
                                <div className="col-7"><span className="right price">251.000đ</span></div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <button className="btn-cart">
                                        Mua hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}