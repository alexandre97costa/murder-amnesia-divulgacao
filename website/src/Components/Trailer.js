import React from 'react';

import Video from '../Images/Vídeo promocional - Murder Amnesia.mp4'

export default function Trailer() {
    return (
        <>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12 fs-4 font-bold mb-4'>
                        Trailer
                    </div>
                </div>

                <div className="ratio ratio-16x9">
                    <iframe src={Video} title="Trailer" frameBorder="0" scrolling="no" allowFullScreen />
                </div>
            </div>
        </>
    );
}