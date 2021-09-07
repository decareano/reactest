import React from 'react';

const ChildComponent = (props) => { 
    console.log(props)   
    return <p>{props.text}</p>; 
};

export default ChildComponent