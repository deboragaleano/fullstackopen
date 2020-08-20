import React from 'react'

const Total = ({parts}) => {
    const sum = parts.reduce((accum, part) => (
        accum + part.exercises 
    ), 0); 

    return (
        <p><strong>Number of exercises: {sum}</strong></p>
    ) 
}

export default Total; 