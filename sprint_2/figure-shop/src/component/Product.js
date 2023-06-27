import {useContext, useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import * as TypeProductService from "../service/TypeProductService";
import ReactPaginate from "react-paginate";
import * as CartService from "../service/CartService";
import {ValueIconCartContext} from "./ValueIconCartContext";
import {Link} from "react-router-dom";

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
    const token = localStorage.getItem("token");
    useEffect(() => {
        (async () => {
            const result = await CartService.findCartByCustomerId(token);
            const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
            setIconQuantity(totalQuantity);
        })()
    }, [])
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
            console.log(productList)
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
    return (
        <>
            <section className="section header-section">
                <div className="container ">
                    <div className="row">
                        <div className="col-7"></div>
                        <div className="col-5 search-flex container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <input onChange={handleNameOnchange} className="form-control input-search"
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
                        {products.length == 0 ? (
                            <span className="message-search">Không tìm thấy tên sản phẩm</span>) : products.map((product, index) => {
                                return (
                                    <div className="col-xl-3 col-md-6 col-12 m-b-20 p-3" key={index}>
                                        <div className="card">
                                            <img src={product.imgFigure} className="img-cart" alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">MÔ HÌNH ANIME</h5>
                                                <Link to={`/detail/${product.id}`} className="card-text card-p">
                                                    {product.name}
                                                </Link>
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
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                    {products && (
                        <div className="d-grid">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=">"
                                onPageChange={handlePageOnclick}
                                pageCount={pageCount}
                                previousLabel="<"
                                containerClassName="pagination"
                                pageLinkClassName="page-num"
                                nextLinkClassName="page-num"
                                previousLinkClassName="page-num"
                                activeClassName="active"
                                disabledClassName="d-none"
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}