export function CustomerList() {
    const customer = [
        {
            "id": 1,
            "name": "Tran Trong Nghia",
            "dateOfBirth": "07/05/2004",
            "gender": "Male",
            "identity": "201865361",
            "phoneNumber": "0905551127",
            "email": "ttn.hdttb152004@gmail.com",
            "typeCustomer": 5,
            "address": "Villa"
        },
        {
            "id": 2,
            "name": "Duong Minh Truong",
            "dateOfBirth": "07/05/2004",
            "gender": "Male",
            "identity": "201865361",
            "phoneNumber": "0905551127",
            "email": "ttn.hdttb152004@gmail.com",
            "typeCustomer": 4,
            "address": "Villa"
        },
        {
            "id": 3,
            "name": "Pham Hoang Hai",
            "dateOfBirth": "07/05/2004",
            "gender": "Male",
            "identity": "201865361",
            "phoneNumber": "0905551127",
            "email": "ttn.hdttb152004@gmail.com",
            "typeCustomer": 3,
            "address": "Villa"
        },
        {
            "id": 4,
            "name": "Phan Van Dong",
            "dateOfBirth": "07/05/2004",
            "gender": "Male",
            "identity": "201865361",
            "phoneNumber": "0905551127",
            "email": "ttn.hdttb152004@gmail.com",
            "typeCustomer": 2,
            "address": "Villa"
        },
        {
            "id": 5,
            "name": "Ngo Ngoc Truong",
            "dateOfBirth": "07/05/2004",
            "gender": "Male",
            "identity": "201865361",
            "phoneNumber": "0905551127",
            "email": "ttn.hdttb152004@gmail.com",
            "typeCustomer": 1,
            "address": "Villa"
        },
        {
            "id": 6,
            "name": "Phan Ta Anh Dao",
            "dateOfBirth": "07/05/2004",
            "gender": "Male",
            "identity": "201865361",
            "phoneNumber": "0905551127",
            "email": "ttn.hdttb152004@gmail.com",
            "typeCustomer": 3,
            "address": "Villa"
        },
        {
            "id": 7,
            "name": "Nguyen Le Van Khai",
            "dateOfBirth": "07/05/2004",
            "gender": "Male",
            "identity": "201865361",
            "phoneNumber": "0905551127",
            "email": "ttn.hdttb152004@gmail.com",
            "typeCustomer": 2,
            "address": "Villa"
        },
        {
            "id": 8,
            "name": "Le Van Phat Dat",
            "dateOfBirth": "07/05/2004",
            "gender": "Male",
            "identity": "201865361",
            "phoneNumber": "0905551127",
            "email": "ttn.hdttb152004@gmail.com",
            "typeCustomer": 4,
            "address": "Villa"
        },
        {
            "id": 9,
            "name": "Le Van Chinh",
            "dateOfBirth": "07/05/2004",
            "gender": "Male",
            "identity": "201865361",
            "phoneNumber": "0905551127",
            "email": "ttn.hdttb152004@gmail.com",
            "typeCustomer": 5,
            "address": "Villa"
        },
    ]
    const typeCustomer = [
        {
            "id": 1,
            "name": "Member"
        },
        {
            "id": 2,
            "name": "Silver"
        },
        {
            "id": 3,
            "name": "Gold"
        },
        {
            "id": 4,
            "name": "Platinum"
        },
        {
            "id": 5,
            "name": "Diamond"
        }
    ]
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
                                                            <a
                                                                href="create-customer.html"
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                Thêm mới khách hàng
                                                            </a>
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
                                                    {customer.map((customer, index) => (
                                                        <tr>
                                                            <th scope="row">{customer.name}</th>
                                                            <td>{customer.dateOfBirth}</td>
                                                            <td>{customer.gender}</td>
                                                            <td>{customer.identity}</td>
                                                            <td>{customer.phoneNumber}</td>
                                                            <td>{customer.email}</td>
                                                            <td>
                                                                {
                                                                    typeCustomer.find(
                                                                        (typeCustomer) => typeCustomer.id === customer.typeCustomer
                                                                    )?.name
                                                                }
                                                            </td>
                                                            <td>{customer.address}</td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-primary btn-sm"
                                                                    type="button"
                                                                >
                                                                    Cập nhật
                                                                </button>
                                                            </td>
                                                            <td>
                                                                {/* Button trigger modal */}
                                                                <button
                                                                    className="btn btn-danger btn-sm"
                                                                    data-bs-target="#exampleModal"
                                                                    data-bs-toggle="modal"
                                                                    type="button"
                                                                >
                                                                    Xóa
                                                                </button>
                                                                {/* Modal */}
                                                                <div
                                                                    aria-hidden="true"
                                                                    aria-labelledby="exampleModalLabel"
                                                                    className="modal fade"
                                                                    id="exampleModal"
                                                                    tabIndex={-1}
                                                                >
                                                                    <div className="modal-dialog">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header">
                                                                                <h5
                                                                                    className="modal-title"
                                                                                    id="exampleModalLabel"
                                                                                >
                                                                                    Modal title
                                                                                </h5>
                                                                                <button
                                                                                    aria-label="Close"
                                                                                    className="btn-close"
                                                                                    data-bs-dismiss="modal"
                                                                                    type="button"
                                                                                />
                                                                            </div>
                                                                            <div className="modal-body">...</div>
                                                                            <div className="modal-footer">
                                                                                <button
                                                                                    className="btn btn-secondary"
                                                                                    data-bs-dismiss="modal"
                                                                                    type="button"
                                                                                >
                                                                                    Close
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-primary"
                                                                                    type="button"
                                                                                >
                                                                                    Save changes
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
