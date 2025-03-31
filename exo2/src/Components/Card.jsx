import React, { useState } from 'react';

function Card() {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className='flex flex-col w-48 h-72 bg-gray-400 hover:drop-shadow-xl p-2'>
            <div>
                <img src='/placeholder.svg' alt='image produit' className='w-full h-32 object-cover' />
            </div>
            <div className='text-sm flex flex-col justify-between flex-grow'>
                <p className='font-bold'>Nom du produit</p>
                <p className='text-lg font-semibold'>9.99€</p>
                <div className='flex flex-row'>
                    <button>⭐</button>
                    <button>⭐</button>
                    <button>⭐</button>
                    <button>⭐</button>
                </div>
                <p className='mt-3 text-gray-700'>Description du produit</p>
                <div className='mt-3 flex justify-around'>
                    <button className='bg-white rounded px-2 py-1 shadow hover:bg-red-600'>Add to cart</button>
                    <button onClick={() => setIsFavorite(!isFavorite)}>
                        {isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;