import React from 'react';

export default function Download() {
    return (
        <>
            <div className='col-12'>
                Começa já a jogar!
            </div>
            <div className='col-12 mt-3'>
                <a
                    className="btn btn-danger w-100 fw-semibold w-fit-content d-flex align-items-center gap-2 mx-auto"
                    href="#download"
                >
                    Download
                    <i class="bi bi-download" />
                </a>
            </div>
        </>
    );
}