import {ErrorMessage, Form, Field, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from "react-loader-spinner";
import {useNavigate} from "react-router-dom";
import * as facilityService from "../../service/facilityService";
import {useEffect, useState} from "react";

export function CreateService() {
    const navigate = useNavigate();
    const [type, setType] = useState(1);
    const [typeRoomList, setTypeRoomList] = useState([]);
    const [freeServiceList, setFreeServiceList] = useState([]);
    const handleTypeChange = (event) => {
        setType(event);
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result1 = await facilityService.findAllTypeRoom();
            const result2 = await facilityService.findAllFreeService();
            setTypeRoomList(result1);
            setFreeServiceList(result2);
        }
        fetchApi();
    }, [])

    return (
        <>
            <Formik initialValues={{
                nameFacility: "",
                typeRoom: "",
                roomSize: "",
                img: "",
                price: "",
                roomStandard: "",
                floor: "",
                poolArea: "",
                description: "",
                freeService: "",
            }}
                    validationSchema={Yup.object({
                        nameFacility: Yup.string()
                            .required('Tên không được để trống, vui lòng nhập tên')
                            .matches(/\D+/, 'Tên phải đúng theo định dạng không có số'),
                        img: Yup.string()
                            .required('Ảnh không được để trống'),
                        poolArea: Yup.number()
                            .positive('Diện tích sử dụng phải là số dương'),
                        price: Yup.number()
                            .positive('Giá phải là số dương'),
                        roomStandard: Yup.number().integer()
                            .positive('Người thuê tối đa phải là số nguyên dương'),
                    })}
                    onSubmit={(values, {resetForm}) => {
                        const create = async () => {
                            values.typeRoom = type;
                            await facilityService.saveFacility(values);
                            resetForm();
                            navigate("/")
                        }
                        create();
                    }}>
                {
                    <section
                        className="vh-100 bg-image"
                        style={{backgroundImage: 'url("./image/N.NT-31-1024x676.jpg")'}}
                    >
                        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div className="card" style={{borderRadius: 15}}>
                                            <div className="card-body p-5">
                                                <h2 className="text-uppercase text-center mt-4">
                                                    Thêm mới dịch vụ
                                                </h2>
                                                <Form>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Tên
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="nameFacility"
                                                        />
                                                    </div>
                                                    <ErrorMessage name='nameFacility' component='span'
                                                                  className='form-err'/>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Kieu phong
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="number"
                                                            name="typeRoom"
                                                            render={() => (
                                                                <select
                                                                    style={{borderRadius: 5, width: "94%"}}
                                                                    onChange={(event) =>
                                                                        handleTypeChange(event.target.value)
                                                                    }
                                                                >
                                                                    {typeRoomList.map((typeRoom, index) => (
                                                                        <option key={index} value={typeRoom.id}>
                                                                            {typeRoom.name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            )}
                                                        />
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Room size:
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="roomSize"
                                                        />
                                                    </div>
                                                    <ErrorMessage name='roomSize' component='span'
                                                                  className='form-err'/>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Image:
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="img"
                                                        />
                                                    </div>
                                                    <ErrorMessage name='img' component='span'
                                                                  className='form-err'/>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Price:
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="price"
                                                        />
                                                    </div>
                                                    <ErrorMessage name='price' component='span'
                                                                  className='form-err'/>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            RoomStandard:
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="roomStandard"
                                                        />
                                                    </div>
                                                    <ErrorMessage name='roomStandard' component='span'
                                                                  className='form-err'/>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Floor:
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="floor"
                                                        />
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Pool area:
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="poolArea"
                                                        />
                                                    </div>
                                                    <ErrorMessage name='poolArea' component='span'
                                                                  className='form-err'/>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Description:
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="description"
                                                        />
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Free Service:
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="description"
                                                            render={() => (
                                                                <select style={{borderRadius: 5, width: "94%"}}>
                                                                    {freeServiceList.map((service, index) => (
                                                                        <option key={index} value={service.id}>
                                                                            {service.name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            )}
                                                        />
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button
                                                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                            type="submit"
                                                        >
                                                            Thêm mới
                                                        </button>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </Formik>

        </>
    );
}
