import {useEffect, useState} from "react";
import * as productService from "../service/productService";
import {Link} from "react-router-dom";

export function Product() {
    const [productList, setProductList] = useState([]);
    const [typeProductList, setTypeProductList] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result1 = await productService.findAll();
            const result2 = await productService.findAllTypeProduct();
            setProductList(result1);
            setTypeProductList(result2)
        }
        fetchApi();
    }, []);
    // const search = async () => {
    //     const name = document.getElementById("name").value;
    //     const typeProduct = document.getElementById("typeProduct").value;
    //     const result = await productService.search(name, typeProduct)
    //     setProductList(result);
    // }
    // const searchByName = async () => {
    //     const name = document.getElementById("nameSearch").value;
    //     const result = await productService.findByNameContaining(name)
    //     setProductList(result);
    // }
    return (
        <>
            <div>
                <h1 className="text-center" style={{color: "red"}}>Danh sach san pham</h1>
                {/*<div>*/}
                {/*    <label htmlFor="nameSearch">Tim kiem theo ten san pham:</label>*/}
                {/*    <input type="text" id="nameSearch" name="nameSearch" onChange={() => searchByName()}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <label htmlFor="nameSearch">Tim kiem theo ten va loai san pham:</label>*/}
                {/*    <input type="text" id="name" name="name" onChange={() => search()}/>*/}
                {/*    <select name="typeProduct" id="typeProduct" onChange={() => search()}>*/}
                {/*        {typeProductList.map((type, index) => (*/}
                {/*            <option key={index} value={type.id}>{type.name}</option>*/}
                {/*        ))}*/}
                {/*    </select>*/}
                {/*</div>*/}
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
                                <Link className="btn btn-primary btn-sm" to={`/${product.id}`}>Sua</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}