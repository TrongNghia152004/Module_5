import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from "react";
import * as facilityService from "../../service/facilityService";
import * as customerService from "../../service/customerService";
import * as contractService from "../../service/contractService";
import {useNavigate} from "react-router-dom";

export function CreateContract() {
    const navigate = useNavigate();
    const [facilityList, setFacilityList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result1 = await facilityService.findAllFacility();
            const result2 = await customerService.findAllCustomer();
            setCustomerList(result2);
            setFacilityList(result1);

        }
        fetchApi();
    }, []);
    // const today = new Date();
    // const dateNow = today.toISOString().substr(0, 10);
    return (
        <>
            <Formik
                initialValues={{
                    idContract: "",
                    customerId: "",
                    facilityId: "",
                    dayIn: "",
                    dayOut: "",
                    deposits: ""
                }}
                // validationSchema={Yup.object({
                //     idContract: Yup.string()
                //         .required('Mã hợp đồng không được để trống'),
                //     checkInDate: Yup.date()
                //         .required('Ngày đặt phòng không được để trống'),
                //     checkOutDate: Yup.date()
                //         .required('Ngày trả phòng không được để trống')
                //         .when('checkInDate', (checkInDate, schema) => {
                //             return schema.min(checkInDate, 'Ngày trả phòng phải bằng hoặc sau ngày đặt phòng')
                //         }),
                //     deposit: Yup.number()
                //         .required('Tiền đặt cọc không được để trống')
                //         .positive('Tiền đặt cọc phải là số dương'),
                // })}
                onSubmit={(values, {resetForm}) => {
                    const createContract = async () => {
                        await contractService.saveContract(values);
                        console.log(values);
                        resetForm();
                        navigate("/");
                    }
                    createContract();
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
                                                    Thêm mới hợp đồng
                                                </h2>
                                                <Form>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Mã hợp đồng
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            type="text"
                                                            name="idContract"
                                                        />
                                                    </div>
                                                    {/*<ErrorMessage name='idContract' component='span'*/}
                                                    {/*              className='form-err'/>*/}
                                                    <div>
                                                        <label className="form-label">Mã khách hàng</label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            name="customerId"
                                                            as="select"
                                                        >
                                                            {customerList.map((customer, index) => (
                                                                <option key={index} value={customer.id}>
                                                                    {customer?.name}
                                                                </option>
                                                            ))}
                                                        </Field>
                                                    </div>
                                                    <div>
                                                        <label className="form-label">Mã dịch vụ</label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example1cg"
                                                            name="facilityId"
                                                            as="select"
                                                        >
                                                            {facilityList.map((facility, index) => (
                                                                <option key={index} value={facility.id}>
                                                                    {facility?.nameFacility}
                                                                </option>
                                                            ))}
                                                        </Field>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example3cg">
                                                            Ngày đặt phòng
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example3cg"
                                                            type="date"
                                                            name="dayIn"
                                                        />
                                                    </div>
                                                    {/*<ErrorMessage name='dayIn' component='span'*/}
                                                    {/*              className='form-err'/>*/}

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example3cg">
                                                            Ngày trả phòng phòng
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example3cg"
                                                            type="date"
                                                            name="dayOut"
                                                        />
                                                    </div>
                                                    {/*<ErrorMessage name='dayOut' component='span'*/}
                                                    {/*              className='form-err'/>*/}
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label"
                                                               htmlFor="form3Example4cdg">
                                                            Tiền đặt cọc
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <Field
                                                            className="form-control form-control-lg"
                                                            id="form3Example4cdg"
                                                            type="number"
                                                            name="deposits"
                                                        />
                                                    </div>
                                                    {/*<ErrorMessage name='deposits' component='span'*/}
                                                    {/*              className='form-err'/>*/}

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