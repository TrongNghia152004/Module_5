import {useContext, useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import * as TypeProductService from "../service/TypeProductService";
import ReactPaginate from "react-paginate";
import * as CartService from "../service/CartService";
import {ValueIconCartContext} from "./ValueIconCartContext";
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function Product() {
    const username = localStorage.getItem("username");
    const [products, setProducts] = useState([]);
    const [typeProducts, setTypeProducts] = useState([]);
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext)
    const [request, setRequest] = useState({
        page: 0,
        name: "",
        idType: 0
    })
    const account = JSON.parse(localStorage.getItem("account"));
    const roles = [];
    if (account != null) {
        for (let i = 0; i < account.roles.length; i++) {
            roles.push(account.roles[i].authority);
        }
    }
    const token = localStorage.getItem("token");
    useEffect(() => {
        {
            username ? (async () => {
                const result = await CartService.findCartByCustomerId(token);
                const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
                setIconQuantity(totalQuantity);
            })() : setIconQuantity(0)
        }

    }, []);
    const [pageCount, setPageCount] = useState(0);
    const handlePageOnclick = (event) => {
        setRequest((prev) => ({...prev, page: event.selected}))
    }
    const handleNameOnchange = (event) => {
        setRequest((prev) => ({...prev, name: event.target.value}))
    }
    const handleTypeProductOnchange = (event) => {
        setRequest((prev) => ({...prev, idType: +event.target.value}))
    }
    useEffect(() => {
        (async () => {
            const typeProductList = await TypeProductService.findAllTypeProduct();
            setTypeProducts(typeProductList);
        })()
    }, [])
    useEffect(() => {
        (async () => {
            const productList = await ProductService.findAllProduct(request);
            setPageCount(productList.totalPages);
            setProducts(productList.content);
        })()
    }, [request]);
    const handleAddCart = async (id) => {
        const cart = {
            quantity: 1,
            status: true,
            figureProduct: ""
        }
        try {
            await CartService.addCart({...cart, figureProduct: id}, token);
            setIconQuantity(iconQuantity + 1)
        } catch (err) {
            console.log(err)
        }
    }
    const handleAddProduct = async () => {

    }
    return (
        <>
            <section className="section header-section">
                <div className="container ">
                    <div className="row">
                        <div className="col-7">
                            {roles.includes("ADMIN") ? (
                                <a type="button"
                                   className="btn btn-primary btn-sm" data-bs-toggle="modal"
                                   data-bs-target="#exampleModal">
                                    Thêm mới
                                </a>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className="col-5 search-flex container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <input onChange={handleNameOnchange} className="form-control input-search"
                                           placeholder="Tìm kiếm theo tên......"
                                           type="text"/>
                                </div>
                                <div className="col-6">
                                    <select onChange={handleTypeProductOnchange} className="form-control select-option">
                                        <option className="text-option" value="0">-- Loại figure --</option>
                                        {typeProducts && typeProducts.map((typeProduct) => (
                                            <option className="text-option" key={typeProduct.id}
                                                    value={typeProduct.id}>{typeProduct.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2 pt-4">
                        {products.length === 0 ? (
                            <div
                                className="message-search">
                                <div>Không tìm thấy tên sản phẩm</div>
                                <div className="text-center" style={{fontSize: 100}}><i
                                    className="fas fa-search icon-search"/></div>
                            </div>
                        ) : products.map((product, index) => {
                                return (
                                    <div className="col-xl-3 col-md-6 col-12 m-b-20 p-3" key={index}>
                                        <div className="card">
                                            <img src={product.imgFigure} className="img-cart" alt=""/>
                                            <div className="card-body">
                                                <div className="card-p">
                                                    <Link to={`/detail/${product.id}`} className="card-text ">
                                                        {product.name}
                                                    </Link>
                                                </div>
                                                <div className="card-p">
                                                    <p className="card-price">{product.price.toLocaleString("vi-VN", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    })}
                                                        {username ? (
                                                            <a type='button' onClick={() => handleAddCart(product.id)}
                                                               className="icon-buy icon-cart">
                                                                <i className="fas fa-shopping-cart"/>
                                                            </a>
                                                        ) : (
                                                            <Link to="/login"
                                                                  className="icon-buy icon-cart">
                                                                <i className="fas fa-shopping-cart"/>
                                                            </Link>
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="card-p">
                                                    {roles.includes("ADMIN") ? (
                                                        <button className="btn btn-primary btn-sm">Sửa</button>
                                                    ) : (
                                                        ''
                                                    )}
                                                    {roles.includes("ADMIN") ? (
                                                        <button className="btn btn-danger btn-sm">Xoá</button>
                                                    ) : (
                                                        ''
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                    {products.length === 0 ? (
                        <div></div>
                    ) : (
                        <div>
                            {products && (
                                <div className="d-grid" style={{marginLeft: "46%", marginTop: 10}}>
                                    <ReactPaginate
                                        previousLabel="Trước"
                                        nextLabel="Sau"
                                        pageCount={pageCount}
                                        onPageChange={handlePageOnclick}
                                        containerClassName='pagination'
                                        previousClassName='page-item'
                                        previousLinkClassName='page-link'
                                        nextClassName='page-item'
                                        nextLinkClassName='page-link'
                                        pageClassName='page-item'
                                        pageLinkClassName='page-link'
                                        activeClassName='active'
                                        activeLinkClassName='page-link'
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-center"
                                 style={{color: "red", fontSize: 20, fontWeight: "bolder"}}>
                                <h5 className="modal-title" id="exampleModalLabel">Thêm sản phẩm</h5>
                            </div>
                            <div className="modal-body">
                                <Formik initialValues={{
                                    name: '',
                                    imgFigure: '',
                                    price: 0,
                                    material: '',
                                    height: '',
                                    weight: '',
                                    quantity: 0,
                                    productType: 0
                                }} onSubmit={(values) => {
                                    (async () => {
                                        await ProductService.createProduct(values, token);
                                    })()
                                }}>
                                    <Form>
                                        <div><label htmlFor="">Tên sản phẩm</label>
                                            <Field type="text" name="name"/></div>
                                        <div>
                                            <div>

                                                <label htmlFor="">Hình ảnh</label>
                                                <Field type="text" name="imgFigure"/>
                                            </div>
                                            <div>

                                                <label htmlFor="">Giá sản phẩm</label>
                                                <Field type="text" name="price"/>
                                            </div>
                                            <div>

                                                <label htmlFor="">Chất liệu</label>
                                                <Field type="text" name="material"/>
                                            </div>
                                            <div>

                                                <label htmlFor="">Chiều cao</label>
                                                <Field type="text" name="height"/>
                                            </div>
                                            <div>
                                                <label htmlFor="">Khối lượng</label>
                                                <Field type="text" name="weight"/>
                                            </div>
                                            <div>
                                                <label htmlFor="">Số lượng</label>
                                                <Field type="text" name="quantity"/>
                                            </div>
                                            <div>
                                                <label htmlFor="">Loại sản phẩm</label>
                                                <Field as="select" name="productType">
                                                    {typeProducts.map((type, index) => (
                                                        <option key={index} value={type.id}>{type.name}</option>
                                                    ))}
                                                </Field>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit"
                                                        className="button-modal" data-bs-dismiss="modal">Thêm mới
                                                </button>
                                                <button type="button" className="btn btn-secondary btn-sm"
                                                        data-bs-dismiss="modal">Huỷ
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
)
}