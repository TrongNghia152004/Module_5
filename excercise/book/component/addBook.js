import React from "react";
import {Field, Formik, Form} from "formik";
import * as BookService from "../service/BookService";

export function AddBook() {
    return (
        <div>
            <Formik
                initialValues={{title: "", quantity: ""}}
                onSubmit={(values, {resetForm}) => {
                    const create = async () => {
                        await BookService.save(values);
                        resetForm();

                    };
                    create();
                }}
            >
                <Form>
                    <h1>Thêm sách</h1>
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
                    <button type="submit">Thêm mới</button>
                </Form>
            </Formik>
        </div>
    );
}