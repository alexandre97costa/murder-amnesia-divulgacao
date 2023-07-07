import React, { useEffect } from "react";
import dev from "../dev";
import { Link } from 'react-router-dom';

function Footer() {

    useEffect(() => {

    }, [])

    return (
        <>
            <footer className="navbar navbar-expand-lg  w-100 text-light bg-dark py-0 lh-1 pt-2 pb-5 mt-4" data-bs-theme="dark">
                <div className="container px-0 justify-content-between align-items-center gap-4">

                    <Link className="navbar-brand fw-bold fs-4" to="/">
                        <span className="text-danger">M</span>
                        <span>urder Amnesia</span>
                    </Link>

                    <nav className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-nav-scroll me-auto align-items-center gap-4" style={{ "--ar-scroll-height": "520px;" }}>
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
                        </ul>
                    </nav>

                    <a
                        className="btn btn-danger w-100 fw-semibold w-fit-content d-flex align-items-center gap-2"
                        href="#download"
                    >
                        Download
                        <i class="bi bi-download" />
                    </a>

                </div>
            </footer>
        </>
    )

}

export default Footer;