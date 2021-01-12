import React from 'react';
import './ExercisesTwo.css';

const exercisesTwo = (props) => {
    return (
        <div className="ExercisesTwo">
            <p>{props.text}
                <p>
                    {props.validationShort < 5
                        ?
                        "Text too short"
                        :
                        "Text long enough"
                    }
                </p>
            </p>
        </div>
    )
};

export default exercisesTwo;

