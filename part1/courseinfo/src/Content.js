import React from 'react';
import Part from './Part'; 

const Content = (props) => {
    const part1 = props.content.part1
    const part2 = props.content.part2
    const part3 = props.content.part3
    const exercises1 = props.content.exercises1
    const exercises2 = props.content.exercises2
    const exercises3 = props.content.exercises3

    return (
        <div>
            <Part part={part1} exercises={exercises1}/> 
            <Part part={part2} exercises={exercises2}/> 
            <Part part={part3} exercises={exercises3}/> 
        </div>
    )
}

export default Content; 