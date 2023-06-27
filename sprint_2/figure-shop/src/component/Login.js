import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {
    login
} from "../service/LoginService";
import {useNavigate} from "react-router-dom";

export function Login() {
    const [failedAccount, setFailedAccount] = useState(null);
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    return (<>
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div
                    className="login-container container d-flex justify-content-center align-items-center flex-column">
                    <Formik
                        initialValues={{
                            username: "", password: "",
                        }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .required("Tên đăng nhập bắt buộc phải nhập.")
                                .test("Tên đăng nhập bắt buộc từ 6-30 ký tự.", "Tên đăng nhập bắt buộc từ 6-30 ký tự.", function (value) {
                                    return value.length >= 6 && value.length <= 30;
                                }), password: Yup.string()
                                .required("Mật khẩu bắt buộc phải nhập.")
                                .test("Mật khẩu bắt buộc từ 6-30 ký tự.", "Mật khẩu bắt buộc từ 6-30 ký tự.", function (value) {
                                    return value.length >= 6 && value.length <= 30;
                                }),
                        })}
                        onSubmit={(values) => {
                            login(values)
                                .then((e) => {
                                    console.log(e);
                                    setFailedAccount(null);
                                    localStorage.setItem("token", e.token);
                                    localStorage.setItem("username", e.username);
                                    localStorage.setItem("account", JSON.stringify(e));
                                    // dispatch(receiveAccount(e));
                                    navigate("/home")
                                })
                                .catch((e) => {
                                    setFailedAccount("Tên đăng nhập hoặc mật khẩu không đúng.");
                                });
                        }}
                    >
                        <div>
                            <Form>
                                <p className="title-login text-center mb-3">Đăng nhập</p>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td colSpan={2} className="modify-title">
                                            Vui lòng đăng nhập trước khi mua mô hình figure, cơ
                                            hội nhận thêm nhiều ưu đãi từ chương trình thành viên
                                            WibuShop.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="username">Tên đăng nhập</label>
                                        </td>
                                        <td>
                                            <Field
                                                type="text"
                                                name="username"
                                                id="username"
                                                placeholder="Nhập tên đăng nhập"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>
                                            <ErrorMessage
                                                name="username"
                                                className="error-mess m-0"
                                                component={"p"}
                                            />
                                            {failedAccount && (<p className="error-mess m-0">{failedAccount}</p>)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="password">Mật khẩu</label>
                                        </td>
                                        <td>
                                            <Field
                                                type="password"
                                                autoComplete="on"
                                                name="password"
                                                id="password"
                                                placeholder="Mật khẩu"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>
                                            <ErrorMessage
                                                name="password"
                                                className="error-mess m-0"
                                                component={"p"}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="other-login">
                                            <a
                                                className="login-facebook text-decoration-none"
                                            >
                                                Quên mật khẩu ?
                                            </a>
                                            <a
                                                className="float-end text-decoration-none"
                                            >
                                                Đăng ký tài khoản
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td className="other-login">
                                            <button
                                                type="submit"
                                                className="login mt-3 w-100 text-center fw-bold"
                                            >
                                                Đăng nhập
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                    </tr>
                                    </tbody>
                                </table>
                            </Form>
                        </div>
                    </Formik>
                </div>
            </div>
        </div>
    </>)
}