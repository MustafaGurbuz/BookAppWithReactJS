import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
//import './Person.css';

const StyledDiv = styled.div`
width: 50%;
margin: 13px auto;
border: 1px solid #ffffff;
box-shadow: 0 2px 3px hsl(118, 46%, 49%);
padding: 20px;
text-align: center;
font-size: 20px;
'@media (min-width: 500px)': {
    width: '400px'
}
`

const person = (props) => {
    //Radium Version
    /*  const style = {
         '@media (min-width: 500px)': {
             width: '400px'
         }
     }; */

    return (
        //Radium Version
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>Hello there!!! I am {props.name} and I am {props.age} years old...</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};

export default person;
//export default Radium(person);