import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import * as TodoListService from "../service/TodoListService";
import {useEffect, useState} from "react";

export function TodoList() {
    const [todoLists, setTodoLists] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let result = await TodoListService.findAll();
            setTodoLists(result)
        };
        fetchApi();
    }, []);
    return (
        <>
            <Formik initialValues={{
                title: ""
            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Không được để trống!")
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        const create = async () => {
                            await TodoListService.save(values);
                            let result = await TodoListService.findAll();
                            setTodoLists(result);
                            setSubmitting(false);
                            alert('Thêm mới thành công');
                        }
                        create();
                    }}>
                <Form>
                    <Field type="text" name="title" id="title" className="form-control"/>
                    <ErrorMessage style={{color: "red"}} name="title" component='span' className='form-err'/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <ul>
                {todoLists.map((todoList, index) => (
                    <li key={index}>
                        {todoList.title}
                    </li>
                ))}
            </ul>
        </>
    )
}