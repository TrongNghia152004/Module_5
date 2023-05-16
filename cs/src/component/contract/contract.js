import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import * as contractService from "../../service/contractService";
import * as facilityService from "../../service/facilityService";
import * as customerService from "../../service/customerService";

export function Contract() {
const [contractList , setContractList] = useState([]);
const [facilityList , setFacilityList] = useState([]);
const [customerList , setCustomerList] = useState([]);
useEffect(() => {
    const fetchApi = async () => {
        const result1 = await contractService.findAllContract();
        const result2 = await facilityService.findAllFacility();
        const result3 = await customerService.findAllCustomer();
        setContractList(result1);
        setCustomerList(result3);
        setFacilityList(result2);
    }
    fetchApi();
})
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
                                                               to={"/addContract"}
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                Thêm mới hợp đồng
                                                            </Link>
                                                        </th>
                                                        <th colSpan={8}>Danh sách hợp đồng</th>
                                                    </tr>
                                                    <tr>
                                                        <th scope="col">Số hợp đồng</th>
                                                        <th scope="col">Khách hàng</th>
                                                        <th scope="col">Tên dịch vụ</th>
                                                        <th scope="col">Ngày bắt đầu</th>
                                                        <th scope="col">Ngày kết thúc</th>
                                                        <th scope="col">Số tiền cọc trước</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {contractList.map((contract, index) => (
                                                        <tr>
                                                            <td>{contract.idContract}</td>
                                                            <td>
                                                                {
                                                                    customerList.find(
                                                                        (customer) => contract.customerId == customer.id
                                                                    )?.name
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    facilityList.find(
                                                                        (facility) => facility.id == contract.facilityId
                                                                    )?.nameFacility
                                                                }
                                                            </td>
                                                            <td>{contract.dayIn}</td>
                                                            <td>{contract.dayOut}</td>
                                                            <td>{contract.deposits}</td>
                                                            <td></td>
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
