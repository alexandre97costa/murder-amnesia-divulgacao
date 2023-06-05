import React, { useEffect } from "react";
import dev from "../dev";
import { Link } from 'react-router-dom';

function Header() {

    useEffect(() => {

    }, [])

    return (
        <>
            <header className="navbar navbar-expand-lg fixed-top text-light bg-dark py-0 lh-1" data-bs-theme="dark">
                <div className="container">

                    <nav className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-nav-scroll mx-auto align-items-center gap-4" style={{ "--ar-scroll-height": "520px;" }}>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/" >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="btn btn-lg btn-danger w-100 text-uppercase fw-semibold rounded-0" 
                                    to="/" 
                                >
                                    Play
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Download
                                </Link>
                            </li>
                        </ul>

                        <div className="d-sm-none p-3 mt-n3">
                            <Link className="btn btn-primary w-100  mb-1" to="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/" target="_blank" rel="noopener">
                                <i className="ai-cart fs-xl me-2 ms-n1"></i>Buy now
                            </Link>
                        </div>
                    </nav>

                </div>
            </header>

            {/* Spacer */}
            <div className="py-5">

            </div>
        </>
    )

}

export default Header;