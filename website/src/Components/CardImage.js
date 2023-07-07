import React from 'react';

export default function CardImage(props) {
    return (
        <div className='col'>
            <div class="card text-bg-dark">
                <img src={props.image} class="card-img" alt={props.alt} />
                <div class="card-img-overlay d-flex justify-content-center">
                    <div class="card-title fs-5 font-bold py-1 px-4 rounded-4 bg-danger w-fit-content">
                        {props.title}
                    </div>
                </div>
            </div>
        </div>
    );
}