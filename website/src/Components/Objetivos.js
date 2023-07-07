import React from 'react';

import CardImage from './CardImage';

export default function Objetivos() {
    return (
        <>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12 fs-4 font-bold mb-4'>
                        Objetivos
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-2 g-4">

                    <CardImage image="https://cdn.akamai.steamstatic.com/steam/apps/1301720/ss_a3fab09c0e28d808882cded14d3f1d39dd7380d2.1920x1080.jpg?t=1666991317" alt="Escapa" title="Escapa" />

                    <CardImage image="https://newkidsgames.org/cdn/games/action/jump_to_sky_3d_parcour.jpg" alt="Salta" title="Salta" />

                </div>
            </div>
        </>
    );
}