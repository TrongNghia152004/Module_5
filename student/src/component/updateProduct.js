import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as productService from "../service/productService";
import * as Yup from 'yup';
import {ErrorMessage ,Field, Form, Formik} from "formik";

export function UpdateProduct(){
    const navigate = useNavigate();
    const [typeProductList, setTypeProductList] = useState([]);
    const [product, setProduct] = useState();
    const param = useParams();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await productService.findById(param?.id);
            const result2 = await productService.findAllProductType();
            setTypeProductList(result2);
            setProduct(result)
        }
        fetchApi();
    },[])
    if (!product){
        return null;
    }
    return (
        <>
        <Formik initialValues={{
            name: product?.name,
            importDate: product?.importDate,
            quantity: product?.quantity,
            productType: product?.productType
        }}
                validationSchema={Yup.object({
                    name: Yup.string().max(100 , 'Ten khong duoc qua 100 ki tu'),
                    quantity: Yup.string().matches(/^[1-9][0-9]*$/ , 'So luong phai lon hon 0')
                })}
                onSubmit={(values, {resetForm}) => {
                    const update = async () => {
                        await productService.edit(product?.id , values);
                        alert("Cap nhat thanh cong")
                        console.log(values)
                        resetForm();
                        navigate("/")
                    }
                    update();
                }}>
            <Form>
                <div>
                    <h1 className="text-center" style={{color: "red"}}>Cap nhat san pham</h1>
                <div>
                    <label htmlFor="name">Ten</label>
                    <Field className="form-control" type="text" name="name"/>
                    <ErrorMessage name="name"/>
                </div>
                <div>
                    <label htmlFor="importDate">Ngay nhap</label>
                    <Field type="date" className="form-control" name="importDate"/>
                </div>
                <div>
                    <label htmlFor="quantity">So luong</label>
                    <Field type="number" className="form-control" name="quantity"/>
                    <ErrorMessage name="quantity"/>
                </div>
                <div>
                    <label htmlFor="productType">Loai san pham</label>
                    <Field component="select" className="form-control" name="productType">
                        {typeProductList.map((type , index) => (
                            <option key={index} value={type.id}>{type.name}</option>
                        ))}
                    </Field>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Cap nhat</button>
            </div>
        </Form>
        </Formik>
        </>
    )
}