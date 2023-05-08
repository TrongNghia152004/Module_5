import { Field, Formik, Form } from "formik";
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import * as BookService from "../service/BookService";
export function EditBook() {
    const [bookData, setBookData] = useState();
    const param = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            let result = await BookService.findById(param.id);
            setBookData(result);
        };
        fetchApi();
    }, []);

    if (!bookData) {
        return null;
    }

    return (
        <div>
            <Formik
                initialValues={{ title: bookData?.title, quantity: bookData?.quantity }}
                onSubmit={(values, { resetForm }) => {
                    const update = async () => {
                        await BookService.edit(bookData?.id, values);
                        resetForm();
                    };
                    update();
                }}
            >
                <Form>
                    <h1>Cập nhật sách</h1>
                    <div>
                        <label htmlFor="title">Tên sách</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                        />
                    </div>
                    <div>
                        <label htmlFor="quantity">Số lượng</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="quantity"
                            name="quantity"
                        />
                    </div>
                    <button type="submit">Cập nhật</button>
                </Form>
            </Formik>
        </div>
    );
}
