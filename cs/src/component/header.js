import {Component} from "react";

export class Header extends Component{
    render() {
        return (
            <header>
                <nav
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    style={{backgroundColor: "#addccf"}}
                >
                    <a className="navbar-brand" href="#">
                        <img src="/image/Logo-FURAMA-RESORT-removebg-preview.png" height={75}/>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                        style={{fontSize: 30, textAlign: "center"}}
                    >
                        <div className="navbar-nav">
                            <a className="nav-link active" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                            <a className="nav-link" href="#">
                                Features
                            </a>
                            <a className="nav-link" href="#">
                                Pricing
                            </a>
                            <a className="nav-link disabled">Disabled</a>
                        </div>
                    </div>
                </nav>
            </header>

        )
    }
    }