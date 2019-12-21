import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div  className = "Person">
            {/* <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!</p> */}
            <p onClick= {props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type = 'text' onChange= {props.changed} value = {props.name}></input>
    </div>)
};

export default person;