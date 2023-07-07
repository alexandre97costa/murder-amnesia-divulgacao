import React from 'react';

export default function CardImage(props) {
    return (
        <div className='col'>
            <div className="card text-bg-dark">
                <img src={props.image} className="card-img" alt={props.alt} />
                <div className="card-img-overlay d-flex justify-content-center">
                    <div className="card-title fs-5 font-bold py-1 px-4 rounded-4 bg-danger w-fit-content">
                        {props.title}
                    </div>
                </div>
            </div>
        </div>
    );
}