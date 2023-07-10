import React from 'react';
import { Link } from 'react-router-dom';
import LogoDI from '../Images/logo_DI-branco.svg'

export default function Hero() {
    return (
        <>
            <div className='col-6'>
                <div className='fs-5 fw-light text-danger'>
                    Explora o edifício
                </div>
                <div className='fs-1 fw-bold text-uppercase'>
                    Descobre
                </div>
                <div className='fs-1 fw-bold text-uppercase lh-1'>
                    quem realmente és
                </div>

                <div className='mt-3 d-flex gap-3'>
                    <a className="btn btn-outline-danger w-100 fw-semibold w-fit-content d-flex align-items-center gap-2" href='http://193.137.7.33/~estgv19230/DJ/teste/' target='_blank'>
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
            <div className='col-6'>
                <img src='https://cdn.discordapp.com/attachments/1084919872267497486/1127175282583949332/IMGheroi.png' className='img-hero' />
            </div>

            <div className='col-12 text-center'>
                <i className="bi bi-mouse" />
            </div>
        </>
    );
}