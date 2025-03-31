import React from 'react'
import TestimonialCard from './TestimonialCard'

function TestimonialGrid() {
    return (
        <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-2 sm:grid-cols-1 gap-2'>
            <TestimonialCard nom="Patrick" photo="/Placeholder.svg" témoignage="Test" />
            <TestimonialCard nom="Patrice" photo="/cat.jpeg" témoignage="Dur la vie" />
            <TestimonialCard nom="Jason" photo="/dog.jpeg" témoignage="que de la fonte" />
        </div>
    )
}

export default TestimonialGrid