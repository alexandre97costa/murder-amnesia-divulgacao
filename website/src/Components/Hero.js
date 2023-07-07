import React from 'react';

export default function Hero() {
    return (
        <>
            <div className='col-8'>
                <div className='fs-5 fw-light text-danger'>
                    Explora o mundo
                </div>
                <div className='fs-1 fw-bold text-uppercase'>
                    Descobre
                </div>
                <div className='fs-1 fw-bold text-uppercase lh-1'>
                    quem realmente és
                </div>

                <div className='mt-3'>
                    <a
                        className="btn btn-danger w-100 fw-semibold w-fit-content d-flex align-items-center gap-2"
                        href="#download"
                    >
                        Download
                        <i class="bi bi-download" />
                    </a>
                </div>
            </div>
            <div className='col-4'>
                Imagem Hero
            </div>

            <div className='col-12 text-center'>
                <i className="bi bi-mouse" />
            </div>
        </>
    );
}