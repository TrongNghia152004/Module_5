import {useEffect, useState} from "react";
import * as facilityService from "../../service/facilityService";
import {Link} from "react-router-dom";

export function ServiceList() {
    const [facility, setFacility] = useState([]);
    const [facilityDetail, setFacilityDetail] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await facilityService.findAllFacility();
            setFacility(result);
        }
        fetchApi();
    }, []);
    const handleDelete = async () => {
        await facilityService.deleteFacility(facilityDetail?.id);
        let result = await facilityService.findAllFacility();
        setFacility(result);
    };
    const getData = async (id) => {
        const data = await facilityService.findFacilityById(id , );
        setFacilityDetail(data);
    };
    if (!facility) {
        return null;
    }
    return (
        <>
            <div className="container-fluid">
                <div>
                    <img
                        src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
                        width="100%"
                    />
                    <div className="vc_empty_space" style={{height: 72}}>
                        <span className="vc_empty_space_inner"/>
                    </div>
                    <Link to={"/addFacility"} className="btn btn-primary btn-sm">
                        Thêm mới dịch vụ
                    </Link>
                    <div className="row room-grid">
                        {facility.map((facility, index) => (
                            <div
                                key={index}
                                className="text-center pt-4 col-sm-6 col-lg-4"
                            >
                                <div className="card" style={{width: "30rem"}}>
                                    <img
                                        src={facility.img}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{facility.nameFacility}</h5>
                                        <h5 className="card-title">{facility.roomSize}</h5>
                                    </div>
                                    <div className="card-footer text-center">
                                        <Link to={`/editFacility/${facility.id}`} className="btn btn-primary btn-sm">
                                            Sửa
                                        </Link>
                                        <a onClick={() => getData(facility.id)} type="button"
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
                                                        <span>{facilityDetail?.title}</span>
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
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}