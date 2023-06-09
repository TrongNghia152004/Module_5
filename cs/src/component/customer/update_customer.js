import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {findAllTypeCustomer} from "../../service/customerService";
import * as customerService from "../../service/customerService";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const [type , setType] = useState(1);
    const [customer , setCustomer] = useState();
    const [typeCustomerList , setTypeCustomerList] = useState([]);
    const param = useParams();
    const handleTypeChange = (event) => {
        setType(event);
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.findAllTypeCustomer();
            const findCustomer = await customerService.findCustomerById(param.id);
            setTypeCustomerList(result);
            setCustomer(findCustomer);
            setType(customer?.typeCustomer);
        }
        fetchApi();
    }, [])
    if (!customer) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    name: customer?.name,
                    dateOfBirth: customer?.dateOfBirth,
                    gender: customer?.gender,
                    identity: customer?.identity,
                    phoneNumber: customer?.phoneNumber,
                    email: customer?.email,
                    address: customer?.address,
                    typeCustomer: customer?.typeCustomer
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Tên không được để trống, vui lòng nhập tên')
                        .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/, 'Tên phải đúng theo định dạng không có số, các ký tự đàu tiên của mỗi từ phải viết hoa'),
                    dateOfBirth: Yup.string()
                        .required('Ngày sinh không được để trống'),
                    identity: Yup.string()
                        .required('CCCN không được để trống')
                        .matches(/\b\d{9}\b|\b\d{12}\b/, 'CCCN phải đúng theo định dạng, 9 hoặc 12 số'),
                    phoneNumber: Yup.string()
                        .required('Số điện thoại không được để trống')
                        .matches(/(^090\d{7}$)|(^091\d{7}$)|(^\(84\)\+90\d{7}$)|(^\(84\)\+91\d{7}$)/, 'Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx'),
                    email: Yup.string()
                        .required('Email không được để trống')
                        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email phải đúng định dạng Example@gmail.com')

                })}
                onSubmit={(values, {resetForm}) => {
                    const updateCustomer = async () => {
                        values.typeCustomer = type;
                        await customerService.updateCustomer(customer?.id , values);
                        resetForm();
                        navigate("/");
                    }
                    updateCustomer();
                }}>
                {
                        <section
                            className="vh-100 bg-image"
                            style={{backgroundImage: 'url("/image/N.NT-31-1024x676.jpg")'}}
                        >
                            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                                <div className="container h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                            <div className="card" style={{borderRadius: 15}}>
                                                <div className="card-body p-5">
                                                    <div className="card-body p-5">
                                                        <h2 className="text-uppercase text-center mt-4">
                                                            Cập nhật khách hàng
                                                        </h2>
                                                        <Form>
                                                            <div className="form-outline mb-4">
                                                                <label className="form-label" htmlFor="form3Example1cg">
                                                                    Họ và tên
                                                                </label>
                                                                <span className="text-danger">*</span>
                                                                <Field
                                                                    className="form-control form-control-lg"
                                                                    id="form3Example1cg"
                                                                    type="text"
                                                                    name="name"
                                                                />
                                                            </div>
                                                            <ErrorMessage name='name' component='span'
                                                                          className='form-err'/>
                                                            <div className="form-outline mb-4">
                                                                <label className="form-label" htmlFor="form3Example3cg">
                                                                    Ngày sinh
                                                                </label>
                                                                <span className="text-danger">*</span>
                                                                <Field
                                                                    className="form-control form-control-lg"
                                                                    id="form3Example3cg"
                                                                    type="date"
                                                                    name="dateOfBirth"
                                                                />
                                                            </div>
                                                            <ErrorMessage name='dateOfBirth' component='span'
                                                                          className='form-err'/>
                                                            <div>
                                                                <label className="form-label">Giới tính</label>
                                                                <span className="text-danger">*</span>
                                                                <div
                                                                    className="form-check form-check-inline"
                                                                    style={{marginLeft: 20}}
                                                                >
                                                                    <Field
                                                                        className="form-check-input"
                                                                        id="inlineRadio1"
                                                                        name="gender"
                                                                        type="radio"
                                                                        value="Nam"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="inlineRadio1">
                                                                        Nam
                                                                    </label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <Field
                                                                        className="form-check-input"
                                                                        id="inlineRadio2"
                                                                        name="gender"
                                                                        type="radio"
                                                                        value="Nu"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="inlineRadio2">
                                                                        Nữ
                                                                    </label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <Field
                                                                        className="form-check-input"
                                                                        id="inlineRadio3"
                                                                        name="gender"
                                                                        type="radio"
                                                                        value="Khac"
                                                                    />
                                                                    <label className="form-check-label"
                                                                           htmlFor="inlineRadio3">
                                                                        Khác
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="form-outline mb-4">
                                                                <label className="form-label"
                                                                       htmlFor="form3Example4cdg">
                                                                    Số CMND
                                                                </label>
                                                                <span className="text-danger">*</span>
                                                                <Field
                                                                    className="form-control form-control-lg"
                                                                    id="form3Example4cdg"
                                                                    type="number"
                                                                    name="identity"
                                                                />
                                                            </div>
                                                            <ErrorMessage name='identity' component='span'
                                                                          className='form-err'/>
                                                            <div className="form-outline mb-4">
                                                                <label className="form-label" htmlFor="form5Examplecdg">
                                                                    Số điện thoại
                                                                </label>
                                                                <span className="text-danger">*</span>
                                                                <Field
                                                                    className="form-control form-control-lg"
                                                                    id="form5Examplecdg"
                                                                    type="text"
                                                                    name="phoneNumber"
                                                                />
                                                            </div>
                                                            <ErrorMessage name='phoneNumber' component='span'
                                                                          className='form-err'/>
                                                            <div className="form-outline mb-4">
                                                                <label className="form-label"
                                                                       htmlFor="form7Example4cdg">
                                                                    Email
                                                                </label>
                                                                <span className="text-danger">*</span>
                                                                <Field
                                                                    className="form-control form-control-lg"
                                                                    id="form7Example4cdg"
                                                                    type="text"
                                                                    name="email"
                                                                />
                                                            </div>
                                                            <ErrorMessage name='email' component='span'
                                                                          className='form-err'/>
                                                            <div className="form-outline mb-4">
                                                                <label className="form-label"
                                                                       htmlFor="form8Example4cdg">
                                                                    Địa chỉ
                                                                </label>
                                                                <span className="text-danger">*</span>
                                                                <Field
                                                                    className="form-control form-control-lg"
                                                                    id="form8Example4cdg"
                                                                    type="text"
                                                                    name="address"
                                                                />
                                                            </div>
                                                            <div className="form-outline mb-4">
                                                                <label className="form-label" htmlFor="form3Example1cg">
                                                                    Loai khach
                                                                </label>
                                                                <span className="text-danger">*</span>
                                                                <Field
                                                                    className="form-control form-control-lg"
                                                                    id="form3Example1cg"
                                                                    type="text"
                                                                    name="typeRoom"
                                                                    render={() => (
                                                                        <select
                                                                            style={{borderRadius: 5, width: "94%"}}
                                                                            onChange={(event) =>
                                                                                handleTypeChange(event.target.value)
                                                                            }
                                                                        >
                                                                            {typeCustomerList.map((typeCustomer, index) => (
                                                                                <option key={index}
                                                                                        value={typeCustomer?.id}>
                                                                                    {typeCustomer?.name}
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
                                                                    Cap nhat
                                                                </button>
                                                            </div>
                                                        </Form>
                                                    </div>
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
