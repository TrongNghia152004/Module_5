import {Link, NavLink, useNavigate} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import {Avatar} from "@mui/material";
import {useContext, useState} from "react";
import {ValueIconCartContext} from "./ValueIconCartContext";
import Swal from "sweetalert2";

export function Header() {
    const username = localStorage.getItem("username");
    const {iconQuantity} = useContext(ValueIconCartContext)
    const navigate = useNavigate();
    const handleLogout = async () => {
        localStorage.clear();
        Swal.fire({
            title: 'Thông báo',
            text: 'Đăng xuất thành công!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/home")
    }
    const [activeLink, setActiveLink] = useState('');
    const handleClick = (link) => {
        setActiveLink(link);
    };
    return (
        <>
            <div className="header">
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="header-icon">
                                    <ul className="d-flex">
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-facebook-f"/>
                                            </a>
                                        </li>
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-twitter"/>
                                            </a>
                                        </li>
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-youtube"/>
                                            </a>
                                        </li>
                                        <li className="icon">
                                            <a href="">
                                                <i className="fab fa-google-plus-g"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header-contact">
                                    <ul className="d-flex justify-content-end">
                                        <li className="contact">
                                            <a className="header-shop-map" href="">
                                                <i className="fas fa-map-marker-alt"/>
                                                Hệ thống cửa hàng
                                            </a>
                                        </li>
                                        <li className="contact">
                                            <a className="header-shop-phone" href="">
                                                <i className="fas fa-phone"/>
                                                (+84)816 195 246
                                            </a>
                                        </li>
                                        <li className="contact">
                                            <a className="header-shop-support" href="">
                                                <i className="fas fa-envelope"/>
                                                ttn.hdttb152004@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <div className="logo">
                                        <a href="">
                                            <img
                                                alt=""
                                                src="/image/logo.png"
                                                style={{height: "25%", width: "50%"}}
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                            className="navbar-toggler"
                                            data-bs-target="#navbarSupportedContent"
                                            data-bs-toggle="collapse"
                                            type="button"
                                        >
                                            <span className="navbar-toggler-icon"/>
                                        </button>
                                    </div>
                                    <div
                                        className="collapse navbar-collapse justify-content-center"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-center ">
                                            <li className="nav-item">
                                                <NavLink
                                                    className={activeLink === '/home' ? 'nav-link active home' : 'nav-link'}
                                                    to="/home"
                                                    onClick={() => handleClick('/home')}
                                                >
                                                    Trang chủ
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    className={activeLink === '/product' ? 'nav-link active home' : 'nav-link'}
                                                    to="/product"
                                                    onClick={() => handleClick('/product')}
                                                >
                                                    Sản phẩm
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <a aria-current="page" className="nav-link active" href="">
                                                    Tin tức
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a aria-current="page" className="nav-link active" href="">
                                                    Liên hệ
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a aria-current="page" className="nav-link active" href="">
                                                    Giới thiệu
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="icon-nav justify-content-end d-flex">
                                        <li>
                                            {username ? (
                                                    <Dropdown>
                                                        <Dropdown.Toggle
                                                            variant="transparent"
                                                            className="login-drop d-flex justify-content-center align-items-center border-0"
                                                        >
                                                            <Avatar>{username[0].toUpperCase()}</Avatar>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item
                                                                onClick={handleLogout}
                                                                className="text-decoration-none"
                                                            >
                                                                Đăng xuất
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                ) :
                                                (
                                                    <Link to="/login"
                                                          className="icon-user"
                                                          href=""
                                                    >
                                                        <i className="fas fa-user-alt"/>
                                                    </Link>
                                                )
                                            }
                                        </li>
                                        <li>
                                            <Link to={username? "/cart" : "/login"} className="icon-buy" href="">
                                                <i className="fas fa-shopping-cart"/>
                                                <div className="number-buy">{iconQuantity}</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="responsive-navbar text-center hide an">
                    <div className="row">
                        <div className="col-12">
                            <div className="search">
                                <input placeholder="Tìm kiếm..." type="text"/>
                                <i className="fas fa-search"/>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-6 d-flex flex-column align-items-start res-left">
                                    <div className="res-home">
                                        <a href="">
                                            <i className="fas fa-house-user"/>
                                            Trang chủ
                                        </a>
                                    </div>
                                    <div className="resproducts">
                                        <a href="">
                                            <i className="fas fa-cart-plus"/>
                                            Sản phẩm
                                        </a>
                                    </div>
                                    <div className="res-contact">
                                        <a href="">
                                            <i className="fas fa-map-marker-alt"/>
                                            Liên hệ
                                        </a>
                                    </div>
                                    <div className="res-about">
                                        <a href="">
                                            <i className="fas fa-address-card"/>
                                            Giới thiệu
                                        </a>
                                    </div>
                                    <div className="about-us">
                                        <a href="">
                                            <i className="fab fa-themeisle"/>
                                            Về chúng tôi
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 d-flex flex-column align-items-start res-right">
                                    <div className="love">
                                        <a href="">
                                            <i className="far fa-heart"/>
                                            Yêu thích
                                        </a>
                                    </div>
                                    <div className="res-n">
                                        <a href="">
                                            <i className="far fa-newspaper"/>
                                            Tin tức
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}