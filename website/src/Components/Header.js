import React, { useEffect } from "react";
import dev from "../dev";

function Header() {

    useEffect(() => {

    }, [])

    return (
        <>
            <header className="navbar navbar-expand-lg fixed-top " data-bs-theme="dark">
                <div className="container">

                    <nav class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav navbar-nav-scroll me-auto" style={{ "--ar-scroll-height": "520px;" }}>
                            <li class="nav-item ">
                                <a class="nav-link active" href="#" >
                                    Landings
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" >
                                    Pages
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-primary w-100  mb-1" href="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/" target="_blank" rel="noopener">
                                    <i class="bi bi-play-fill fs-xl me-2 ms-n1"></i>Play
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="components/typography.html">
                                    UI Kit
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="docs/getting-started.html">
                                    Docs
                                </a>
                            </li>
                        </ul>

                        <div class="d-sm-none p-3 mt-n3">
                            <a class="btn btn-primary w-100  mb-1" href="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/" target="_blank" rel="noopener">
                                <i class="ai-cart fs-xl me-2 ms-n1"></i>Buy now
                            </a>
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