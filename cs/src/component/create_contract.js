import {Component} from "react";

export class CreateContract extends Component {
    render() {
        return (
            <>
                <section
                    className="vh-100 bg-image"
                    style={{ backgroundImage: 'url("./image/N.NT-31-1024x676.jpg")' }}
                >
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card" style={{ borderRadius: 15 }}>
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase text-center mt-4">
                                                Thêm mới hợp đồng
                                            </h2>
                                            <form>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example1cg">
                                                        Số hợp đồng
                                                    </label>
                                                    <span className="text-danger">*</span>
                                                    <input
                                                        type="text"
                                                        id="form3Example1cg"
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example3cg">
                                                        Ngày bắt đầu
                                                    </label>
                                                    <span className="text-danger">*</span>
                                                    <input
                                                        type="date"
                                                        id="form3Example3cg"
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example4cg">
                                                        Ngày kết thúc
                                                    </label>
                                                    <span className="text-danger">*</span>
                                                    <input
                                                        type="date"
                                                        id="form3Example4cg"
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example4cdg">
                                                        Số tiền cọc trước
                                                    </label>
                                                    <span className="text-danger">*</span>
                                                    <input
                                                        type="number"
                                                        id="form3Example4cdg"
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form4Example4cdg">
                                                        Tổng số tiền thanh toán
                                                    </label>
                                                    <span className="text-danger">*</span>
                                                    <input
                                                        type="number"
                                                        id="form4Example4cdg"
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    >
                                                        Cập nhật
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}
