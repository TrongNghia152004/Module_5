import {useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

export function Home() {
    const [onePiece, setOnePiece] = useState({
        page: 0,
        name: "",
        idType: 1
    })
    const [pageCount, setPageCount] = useState(0);
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    const [productOP, setProductOP] = useState([]);
    const [productNA, setProductNA] = useState([]);
    const [naruto, setNaruto] = useState({
        page: 0,
        name: "",
        idType: 2
    })
    useEffect(() => {
        (async () => {
            const productOP = await ProductService.findAllProduct(onePiece);
            setPageCount(productOP.totalPages);
            setProductOP(productOP.content);
        })()
    }, [onePiece]);
    useEffect(() => {
        (async () => {
            const productNA = await ProductService.findAllProduct(naruto);
            setPageCount(productNA.totalPages);
            setProductNA(productNA.content);
        })()
    }, [naruto]);
    const handlePageOnclickOP = (event) => {
        setOnePiece((prev) => ({...prev, page: event.selected}))
    }
    const handlePageOnclickNA = (event) => {
        setNaruto((prev) => ({...prev, page: event.selected}))
    }
    return (
        <>
            <div className="container-fluid">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="/image/hinh-nen-onepiece_035403397.jpg"
                                className="d-block w-100 img-carousel"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="/image/mo-hinh-anime-dep-ha-noi.jpg"
                                className="d-block w-100 img-carousel"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2 font">
                        <h2 className="font-size">MÔ HÌNH ONPIECE</h2>
                    </div>
                    <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2 pt-4">
                        {productOP.map((product, index) => {
                            return (
                                <div className="col-xl-3 col-md-6 col-12 m-b-20 p-3" key={index}>
                                    <div className="card">
                                        <img src={product.imgFigure} className="img-cart" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">MÔ HÌNH ANIME</h5>
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
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                        }
                    </div>
                    {productOP.length === 0 ? (
                        <div></div>
                    ) : (
                        <div>
                            {productOP && (
                                <div className="d-grid" style={{marginLeft: "46%", marginTop: 10}}>
                                    <ReactPaginate
                                        previousLabel="Trước"
                                        nextLabel="Sau"
                                        pageCount={pageCount}
                                        onPageChange={handlePageOnclickOP}
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
                    <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2 font">
                        <h2 className="font-size">MÔ HÌNH NARUTO</h2>
                    </div>
                    <div className="row large-columns-4 medium-columns-3 small-columns-2 row-small mx-5 p-2 pt-4">
                        {productNA.map((product, index) => {
                                return (
                                    <div className="col-xl-3 col-md-6 col-12 m-b-20 p-3" key={index}>
                                        <div className="card">
                                            <img src={product.imgFigure} className="img-cart" alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">MÔ HÌNH ANIME</h5>
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
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                        }
                    </div>
                    {productNA.length === 0 ? (
                        <div></div>
                    ) : (
                        <div>
                            {productNA && (
                                <div className="d-grid" style={{marginLeft: "46%", marginTop: 10}}>
                                    <ReactPaginate
                                        previousLabel="Trước"
                                        nextLabel="Sau"
                                        pageCount={pageCount}
                                        onPageChange={handlePageOnclickNA}
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
            </section>
        </>
    )
}