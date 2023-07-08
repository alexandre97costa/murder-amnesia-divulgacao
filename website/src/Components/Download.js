import React from 'react';
import LogoDI from '../Images/logo_DI-branco.svg'

export default function Download() {
    return (
        <>
            <div className='col-12 fs-4 font-bold'>
                Começa já a jogar!
            </div>
            <div className='col-12 mt-3'>
                <a
                    className="btn btn-danger w-100 fw-semibold w-fit-content d-flex align-items-center gap-2 mx-auto"
                    href="#download" download={LogoDI}
                >
                    Download
                    <i className="bi bi-download" />
                </a>
            </div>
        </>
    );
}