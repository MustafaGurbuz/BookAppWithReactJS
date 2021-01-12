import React from 'react';
import './ExercisesOne.css';

const exercisesOne = (props) => {
    return (
        <div className="Exercises">
            <p>Hello there!!! Username: {props.username || <p defaultValue={props.username} />}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default exercisesOne;

