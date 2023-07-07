import React, { useEffect } from "react";
import dev from "../dev";
import { Link } from 'react-router-dom';
import Logo from "../Images/game-logo.png";

function Header() {

    useEffect(() => {

    }, [])

    return (
        <>
            <header className="navbar navbar-expand-lg fixed-top text-light py-0 lh-1 bg-dark" data-bs-theme="dark">
                <div className="container ">
                    <div className="w-100 d-flex justify-content-between align-items-center gap-4">

                        <Link className="navbar-brand fw-bold fs-4" to="/">
                            <span className="text-danger">M</span>
                            <span>urder Amnesia</span>
                        </Link>

                        <nav className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                            <ul className="navbar-nav navbar-nav-scroll align-items-center gap-4 py-md-2" style={{ "--ar-scroll-height": "520px;" }}>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#historia" >
                                        História
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#objetivos">
                                        Objetivos
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="btn btn-danger w-100 fw-semibold w-fit-content d-flex align-items-center gap-2"
                                        href="#download"
                                    >
                                        Download
                                        <i class="bi bi-download" />
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <div className="vr py-3"></div>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="https://github.com/alexandre97costa/murder-amnesia" target="_blank" rel="noopener noreferrer" >
                                        <i className="bi bi-github"></i>
                                    </a>
                                </li>
                            </ul>

                            <div className="d-sm-none p-3 mt-n3">
                                <Link className="btn btn-primary w-100  mb-1" to="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/" target="_blank" rel="noopener">
                                    <i className="ai-cart fs-xl me-2 ms-n1"></i>Buy now
                                </Link>
                            </div>
                        </nav>


                    </div>
                </div>
            </header>

            {/* Spacer */}
            <div className="py-5">

            </div>
        </>
    )

}

export default Header;