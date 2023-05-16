import {useEffect, useState} from "react";
import * as productService from "../service/productService";
import {Link} from "react-router-dom";

export function Product() {
    const [productList, setProductList] = useState([]);
    const [typeProductList, setTypeProductList] = useState([]);
    const [product , setProduct] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result1 = await productService.findByName();
            const result2 = await productService.findAllProductType();
            setProductList(result1);
            setTypeProductList(result2)
        }
        fetchApi();
    }, []);
    const handleDelete = async () => {
        await productService.remove(product?.id);
        let result = await productService.findByName();
        setProductList(result);
    };
    const getData = async (id) => {
        const data = await productService.findById(id);
        setProduct(data);
    };
    return (
        <>
            <div>
                <h1 className="text-center" style={{color: "red"}}>Danh sach san pham</h1>
                <div>
                    <Link to={"/create"}>Them moi san pham</Link>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Ma san pham</th>
                        <th>Ten san pham</th>
                        <th>Ngay nhap</th>
                        <th>So luong</th>
                        <th>Loai san pham</th>
                        <th>Sua</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productList.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.importDate}</td>
                            <td>{product.quantity}</td>
                            <td>
                                {typeProductList.find((typeProduct) => typeProduct.id == product.productType.id)?.name}
                            </td>
                            <td>
                                <Link className="btn btn-primary btn-sm" to={`/update/${product.id}`}>Sua</Link>
                            </td>
                            <td>
                                <a type="button" onClick={() => getData(product.id)}
                                   className="btn btn-danger btn-sm" data-bs-toggle="modal"
                                   data-bs-target="#exampleModal">
                                    Xóa
                                </a>
                                <div className="modal fade" id="exampleModal" tabIndex="-1"
                                     aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal
                                                    title</h5>
                                            </div>
                                            <div className="modal-body">
                                                <span>Bạn có muốn xóa</span>
                                                <span></span>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Đóng
                                                </button>
                                                <button type="button" onClick={() => handleDelete()}
                                                        className="btn btn-primary btn-sm" data-bs-dismiss="modal">Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}