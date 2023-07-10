import React, { useEffect } from "react";
import dev from "../dev";
import { Link } from 'react-router-dom';

import LogoDI from '../Images/logo_DI-branco.svg'
import LogoTDM from '../Images/logo_TDM-branco.svg'

function Footer() {

    useEffect(() => {

    }, [])

    return (
        <>
            <footer className="navbar navbar-expand-lg  w-100 text-light bg-dark py-0 lh-1 pt-2 pb-5 mt-4" data-bs-theme="dark">
                <div className="container px-0 justify-content-between align-items-center gap-4">

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
                            <li className="nav-item">
                                <a className="nav-link" href="#trailer">
                                    Trailer
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="d-none d-md-flex gap-2">
                        <a className="btn btn-outline-danger w-100 fw-semibold w-fit-content d-flex align-items-center gap-2" href='http://193.137.7.33/~estgv19230/DJ/teste/' target="_blank">
                            Play
                            <i className="bi bi-play-fill" />
                        </a>

                        <a
                            className="btn btn-danger w-100 fw-semibold w-fit-content d-flex align-items-center gap-2"
                            href={'http://193.137.7.33/~estgv19230/DJ/jogo'} download="jogo.zip"
                        >
                            Download
                            <i className="bi bi-download" />
                        </a>
                    </div>

                </div>

            </footer>

            <div className="row pb-3 align-items-end">
                <div className="col-md-4 col-12 fs-6">
                    ©2023 Desenvolvimento de jogos
                </div>

                <div className="col-8 d-flex gap-4 justify-content-end">
                    <img src={LogoDI} className="img-logo-pequeno w-9" />
                    <img src={LogoTDM} className="img-logo-pequeno w-9" />
                </div>
            </div>
        </>
    )

}

export default Footer;