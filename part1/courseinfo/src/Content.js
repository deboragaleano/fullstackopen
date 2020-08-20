import React from 'react';
import Part from './Part'; 

const Content = ({parts}) => {

    return (
        parts.map(part => (
            <Part name={part.name} key={part.id} exercise={part.exercises} /> 
        ))        
    )
}

export default Content; 