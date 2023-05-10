import {ErrorMessage, Form , Field, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from "react-loader-spinner";
import {useNavigate} from "react-router-dom";
import * as facilityService from "../../service/facilityService";

export function CreateService() {
    const navigate = useNavigate();
    return (
        <>
            <Formik initialValues={{
                nameFacility: '',
                img: '',
                typeFacility: '',
                usableArea: '',
                price: '',
                maxRenter: '',
                typeRental: '',
                roomStandard: '',
                description: '',
                poolArea: '',
                floor: '',
                freeService: ''
            }}
                    validationSchema={Yup.object({
                        nameFacility: Yup.string()
                            .required('Tên không được để trống, vui lòng nhập tên')
                            .matches(/\D+/, 'Tên phải đúng theo định dạng không có số'),
                        img: Yup.string()
                            .required('Ảnh không được để trống'),
                        usableArea: Yup.number()
                            .positive('Diện tích sử dụng phải là số dương'),
                        price: Yup.number()
                            .positive('Giá phải là số dương'),
                        maxRenter: Yup.number().integer()
                            .positive('Người thuê tối đa phải là số nguyên dương'),
                    })}
                    onSubmit={(values, {resetForm}) => {
                        const create = async () => {
                            await facilityService.saveFacility(values);
                            resetForm();
                            navigate("/")
                        }
                        create();
                    }}>
                {
                    ({isSubmitting}) => (
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
                                                            <label className="form-label" htmlFor="form3Example3cg">
                                                                Ảnh
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example3cg"
                                                                type="text"
                                                                name="img"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='img' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form3Example4cdg">
                                                                Diện tích sử dụng
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form3Example4cdg"
                                                                type="number"
                                                                name="usableArea"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='usableArea' component='span'
                                                                      className='form-err'/>
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="form5Examplecdg">
                                                                Số người thuê tối đa
                                                            </label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                className="form-control form-control-lg"
                                                                id="form5Examplecdg"
                                                                type="number"
                                                                name="maxRenter"
                                                            />
                                                        </div>
                                                        <ErrorMessage name='maxRenter' component='span'
                                                                      className='form-err'/>
                                                        <div>
                                                            <label className="form-label">Kiểu thuê</label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                as="select"
                                                                aria-label="Default select example"
                                                                className="form-select"
                                                                name="typeRental"
                                                                style={{height: 50, marginBottom: 30}}
                                                            >
                                                                <option value="1">Rent by year</option>
                                                                <option value="2">Rent by month</option>
                                                                <option value="3">Rent by day</option>
                                                                <option value="4">Rent by hour</option>
                                                            </Field>
                                                        </div>
                                                        <div>
                                                            <label className="form-label">Loại dịch vụ</label>
                                                            <span className="text-danger">*</span>
                                                            <Field
                                                                as="select"
                                                                aria-label="Default select example"
                                                                className="form-select"
                                                                name="typeFacility"
                                                                style={{height: 50, marginBottom: 30}}
                                                                onChange={(e) => {
                                                                    setTypeFacility(e.target.value)
                                                                }}
                                                                value={typeFacility}
                                                            >
                                                                <option value="1">Villa</option>
                                                                <option value="2">House</option>
                                                                <option value="3">Room</option>
                                                            </Field>
                                                        </div>

                                                        {typeFacility == 1 && (
                                                            <div>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Tiêu chuẩn phòng
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="text"
                                                                        name="roomStandard"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='roomStandard' component='span'
                                                                              className='form-err'/>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Mô tả tiện nghi khác
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        as="textarea"
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="text"
                                                                        name="description"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='description' component='span'
                                                                              className='form-err'/>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Diện tích hồ bơi
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="number"
                                                                        name="poolArea"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='poolArea' component='span'
                                                                              className='form-err'/>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Số tầng
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="number"
                                                                        name="floor"
                                                                    />
                                                                    <ErrorMessage name='floor' component='span'
                                                                                  className='form-err'/>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {typeFacility == 2 && (
                                                            <div>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Tiêu chuẩn phòng
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="text"
                                                                        name="roomStandard"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='roomStandard' component='span'
                                                                              className='form-err'/>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Mô tả tiện nghi khác
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="text"
                                                                        name="description"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='description' component='span'
                                                                              className='form-err'/>

                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Số tầng
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="number"
                                                                        name="floor"
                                                                    />
                                                                    <ErrorMessage name='floor' component='span'
                                                                                  className='form-err'/>
                                                                </div>
                                                            </div>
                                                        )}
                                                        {typeFacility == 3 && (
                                                            <div>
                                                                <div className="form-outline mb-4">
                                                                    <label className="form-label"
                                                                           htmlFor="form5Examplecdg">
                                                                        Dịch vụ miễn phí đi kèm
                                                                    </label>
                                                                    <span className="text-danger">*</span>
                                                                    <Field
                                                                        className="form-control form-control-lg"
                                                                        id="form5Examplecdg"
                                                                        type="text"
                                                                        name="freeService"
                                                                    />
                                                                </div>
                                                                <ErrorMessage name='freeService' component='span'
                                                                              className='form-err'/>
                                                            </div>
                                                        )}
                                                        {isSubmitting ?
                                                            <Vortex
                                                                visible={true}
                                                                height="80"
                                                                width="80"
                                                                ariaLabel="vortex-loading"
                                                                wrapperStyle={{}}
                                                                wrapperClass="vortex-wrapper"
                                                                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                                            />
                                                            :
                                                            <div className="d-flex justify-content-center">
                                                                <button
                                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                                    type="submit"
                                                                >
                                                                    Thêm mới
                                                                </button>
                                                            </div>
                                                        }
                                                        <ToastContainer/>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            </Formik>

        </>
    );
}
