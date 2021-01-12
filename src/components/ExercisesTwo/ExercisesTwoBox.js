import React from 'react';
import './ExercisesTwoBox.css';

const exercisesTwoBox = (props) => {
    return (
        <div className="ExercisesTwoBox" onClick={props.click}>
            {props.text}
        </div>
    )
};

export default exercisesTwoBox;

