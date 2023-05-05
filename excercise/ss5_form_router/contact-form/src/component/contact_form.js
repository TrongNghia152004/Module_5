import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {ColorRing} from "react-loader-spinner";

export function ContactForm() {
    return (
        <>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Không được để trống."),
                        email: Yup.string().required("Không được để trống.")
                            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Nhập không đúng định dạng email."),
                        phone: Yup.string().required("Không được để trống."),
                        message: Yup.string().required("Không được để trống."),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log(values)
                            setSubmitting(false)
                            alert("Contact form finished")
                        }, 1000)
                    }}>
                {
                    ({isSubmitting}) => (
                        <div className='container'>
                            <h1>Contact Form</h1>
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor="name" className='form-label'>Name</label>
                                    <Field type='text' className='form-control' id='name' name='name'/>
                                    <ErrorMessage style={{color: "red"}} name='name' component='span'
                                                  className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <Field type='text' className='form-control' id='email' name='email'/>
                                    <ErrorMessage style={{color: "red"}} name='email' component='span'
                                                  className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="phone" className='form-label'>Phone</label>
                                    <Field type='text' className='form-control' id='phone' name='phone'/>
                                    <ErrorMessage style={{color: "red"}} name='phone' component='span'
                                                  className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="message" className='form-label'>Message</label>
                                    <Field type='text' className='form-control' id='message' name='message'/>
                                    <ErrorMessage style={{color: "red"}} name='message' component='span'
                                                  className='form-err'/>
                                </div>
                                {
                                    isSubmitting ?
                                        <ColorRing
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                        /> : <button type='submit' className='btn btn-primary'>Submit</button>}
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}