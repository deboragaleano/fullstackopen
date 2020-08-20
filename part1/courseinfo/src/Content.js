import React from 'react';
import Part from './Part'; 

const Content = (props) => {

    return (
        props.parts.map(part => (
            <Part name={part.name} key={part.id} exercise={part.exercises} /> 
        ))        
    )
}

export default Content; 