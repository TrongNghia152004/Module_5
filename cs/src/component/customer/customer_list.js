import {useEffect, useState} from "react";
import * as customerService from "../../service/customerService";
import {Link} from "react-router-dom";

export function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [typeCustomerList, setTypeCustomerList] = useState([]);
    const [customerDetail, setCustomerDetail] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result1 = await customerService.findAllCustomer();
            const result2 = await customerService.findAllTypeCustomer();
            setCustomerList(result1);
            setTypeCustomerList(result2);
        }
        fetchApi();
    }, [])
    const handleDelete = async () => {
        await customerService.deleteCustomer(customerDetail?.id);
        let result = await customerService.findAllCustomer();
        setCustomerList(result);
    };
    const getData = async (id) => {
        const data = await customerService.findCustomerById(id);
        setCustomerDetail(data);
    };
    return (
        <>
            <section className="vh-100 bg-image">
                <div
                    className="bg-image h-100"
                    style={{backgroundImage: 'url("./image/resort-phan-rang-18.jpeg")'}}
                >
                    <div
                        className="mask d-flex align-items-center h-100"
                        style={{backgroundColor: "rgba(0,0,0,.25)"}}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="card bg-dark shadow-2-strong">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-dark table-borderless mb-0">
                                                    <thead>
                                                    <tr style={{textAlign: "center", color: "red"}}>
                                                        <th>
                                                            <Link
                                                                to={"/addCustomer"}
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                Thêm mới khách hàng
                                                            </Link>
                                                        </th>
                                                        <th colSpan={9}>Danh sách khách hàng</th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col">HỌ VÀ TÊN</th>
                                                        <th scope="col">NGÀY SINH</th>
                                                        <th scope="col">GIỚI TÍNH</th>
                                                        <th scope="col">SỐ CMND</th>
                                                        <th scope="col">SỐ ĐIỆN THOẠI</th>
                                                        <th scope="col">EMAIL</th>
                                                        <th scope="col">LOẠI KHÁCH</th>
                                                        <th scope="col">ĐỊA CHỈ</th>
                                                        <th colSpan={2} style={{textAlign: "center"}}>
                                                            TÁC VỤ
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {customerList.map((customer, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{customer.name}</th>
                                                            <td>{customer.dateOfBirth}</td>
                                                            <td>{customer.gender}</td>
                                                            <td>{customer.identity}</td>
                                                            <td>{customer.phoneNumber}</td>
                                                            <td>{customer.email}</td>
                                                            <td>
                                                                {typeCustomerList.find(
                                                                    (type) => type.id == customer.typeCustomer
                                                                )?.name}
                                                            </td>
                                                            <td>{customer.address}</td>
                                                            <td>
                                                                <Link
                                                                    to={`/editCustomer/${customer.id}`}
                                                                    className="btn btn-primary btn-sm"
                                                                    type="button"
                                                                >
                                                                    Cập nhật
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <a onClick={() => getData(customer.id)} type="button"
                                                                   className="btn btn-danger btn-sm" data-bs-toggle="modal"
                                                                   data-bs-target="#exampleModal">
                                                                    Xóa
                                                                </a>
                                                                <div className="modal fade" id="exampleModal" tabIndex="-1"
                                                                     aria-labelledby="exampleModalLabel"
                                                                     aria-hidden="true">
                                                                    <div className="modal-dialog">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header">
                                                                                <h5 className="modal-title" id="exampleModalLabel">Modal
                                                                                    title</h5>
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                <span>Bạn có muốn xóa</span>
                                                                                <span>{customerDetail?.name}</span>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button type="button" className="btn btn-secondary"
                                                                                        data-bs-dismiss="modal">Đóng
                                                                                </button>
                                                                                <button onClick={() => handleDelete()} type="button"
                                                                                        className="btn btn-primary btn-sm" data-bs-dismiss="modal">Xóa
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
