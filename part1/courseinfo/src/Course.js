import React from 'react';
import Header from './Header';
import Content from './Content';
import Part from './Part';
import Total from './Total';


const Course = ({course}) => {
    return (
        <>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Part />
        </>
    )
}

export default Course; 