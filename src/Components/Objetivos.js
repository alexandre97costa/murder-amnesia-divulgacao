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

                <div className="row row-cols-1 row-cols-md-2 g-4">

                    <CardImage image="https://cdn.discordapp.com/attachments/1084919872267497486/1127169102679646228/jump.png" alt="Jump" title="Jump" />

                    <CardImage image="https://media.discordapp.net/attachments/1084919872267497486/1127169103099088936/wallJump.png" alt="Wall Jump" title="Wall Jump" />

                    <CardImage image="https://media.discordapp.net/attachments/1084919872267497486/1127169137060356096/crouch.png" alt="Crouch" title="Crouch" />

                    <CardImage image="https://media.discordapp.net/attachments/1084919872267497486/1127169137425256559/Slide.png" alt="Slide" title="Slide" />

                </div>
            </div>
        </>
    );
}