import {useEffect, useState} from "react";
import * as facilityService from "../../service/facilityService";
import {Link, useNavigate} from "react-router-dom";

export function ServiceList() {
const [facility , setFacility] = useState([]);
useEffect(() => {
    const fetchApi = async () => {
        const result = await facilityService.findAllFacility();
        setFacility(result);
    }
    fetchApi();
}, [])
    const handleDeleteFacility = async (id) => {
    await facilityService.deleteFacility(id);
    const result = await  facilityService.findAllFacility();
    setFacility(result);
    }
    if (!facility){
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
                                        <Link to={"/"} className="btn btn-primary btn-sm">
                                        Sửa
                                        </Link>
                                        <a
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            data-toggle="modal"
                                            data-target="#modelId"
                                        >
                                            Xoá
                                        </a>
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