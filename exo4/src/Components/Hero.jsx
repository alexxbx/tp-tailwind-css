import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col'>
            <div className='bg-hero-pattern bg-fixed h-96'>
                <a className='text-white'>Titre accrocheur</a>
                <p className='text-white mt-10'>Si vous avez trop envie d'en savoir plus appuyez sur le bouton</p>
                <div className='mt-11 flex justify-evenly'>
                    <button className='bg-white border-4 border-solid border-green-400 rounded hover:bg-green-400'>Bouton primaire</button>
                    <button className='bg-white border-4 border-solid border-red-500 rounded hover:bg-red-500'>Bouton secondaire</button>
                </div>
            </div>

        </div>
    )
}

export default Hero