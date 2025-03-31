import React from 'react';

function TestimonialCard(props) {
    return (
        <div className="desktop-grid">
            <div className="">
                <img src={props.photo} alt="photo" className="w-full h-16 rounded-full" />
            </div>
            <div className="">
                <p className="">{props.nom}</p>
                <p className="text-yellow-500">⭐⭐⭐⭐</p>
            </div>
            <div className="">
                <p className="">{props.témoignage}</p>
            </div>
        </div>
    );
}

export default TestimonialCard;